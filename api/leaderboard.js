// Iron Vanguard online leaderboards (Vercel Function + Vercel Blob).
// Each score is stored as an empty blob whose *pathname* carries the data, ordered so that a
// lexicographic listing returns the best scores first:  lb/v1/<board>/<9999999-score>_<diff>_<time>_<kills>_<name>_<ts>
// GET  /api/leaderboard?board=<mission|campaign>  -> { ok, scores:[{ name, score, diff, time, kills, date }] }
// POST /api/leaderboard  { board, name, score, diff, time, kills }
import { list, put } from '@vercel/blob';

const BOARDS = new Set(['bootcamp', 'dustdevil', 'overwatch', 'ironharbor', 'deepfreeze', 'angel', 'midnight', 'burnnotice', 'blacktide', 'convoy', 'skyfall', 'irondawn', 'laststand', 'campaign']);
const DIFFS = new Set(['recruit', 'regular', 'hardened', 'veteran']);
const MAX_SCORE = 400000;
const recent = new Map(); // ip -> last post time (per function instance; a light brake on spam)

const enc = s => Buffer.from(s, 'utf8').toString('base64url');
const dec = s => { try { return Buffer.from(s, 'base64url').toString('utf8'); } catch (e) { return '?'; } };

function parse(pathname) {
  const f = pathname.split('/').pop().split('_');
  if (f.length < 6) return null;
  return { score: 9999999 - parseInt(f[0], 10), diff: f[1], time: +f[2], kills: +f[3], name: dec(f[4]), date: +f[5] };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  // the token's name depends on the prefix chosen when the store was connected (default BLOB_)
  const tokenKey = Object.keys(process.env).find(k => k === 'BLOB_READ_WRITE_TOKEN') || Object.keys(process.env).find(k => /READ_WRITE_TOKEN$/.test(k));
  if (!tokenKey) return res.status(503).json({ ok: false, error: 'Leaderboard storage is not set up yet.', seen: Object.keys(process.env).filter(k => /BLOB|STORE|READ_WRITE/i.test(k)) });
  const token = process.env[tokenKey];
  try {
    if (req.method === 'GET') {
      const board = String(req.query.board || '');
      if (!BOARDS.has(board)) return res.status(400).json({ ok: false, error: 'Unknown board' });
      const out = [], seen = new Set(); let cursor;
      do {
        const r = await list({ prefix: `lb/v1/${board}/`, limit: 1000, cursor, token });
        for (const b of r.blobs) { const s = parse(b.pathname); if (s) out.push(s); }
        cursor = r.hasMore ? r.cursor : null;
      } while (cursor && out.length < 3000);
      out.sort((a, b) => b.score - a.score || a.date - b.date);
      const top = [];
      for (const s of out) { const k = s.name.toLowerCase(); if (seen.has(k)) continue; seen.add(k); top.push(s); if (top.length >= 25) break; }
      res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=60');
      return res.status(200).json({ ok: true, scores: top });
    }
    if (req.method === 'POST') {
      const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const board = String(b.board || ''), diff = String(b.diff || ''), name = String(b.name || '').replace(/[^A-Za-z0-9 _.-]/g, '').trim().slice(0, 16);
      const score = Math.floor(+b.score), time = Math.floor(+b.time), kills = Math.floor(+b.kills);
      if (!BOARDS.has(board) || !DIFFS.has(diff) || name.length < 2) return res.status(400).json({ ok: false, error: 'Bad entry' });
      if (!(score >= 0 && score <= MAX_SCORE) || !(time >= 5 && time < 36000) || !(kills >= 0 && kills < 2000)) return res.status(400).json({ ok: false, error: 'Bad entry' });
      const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0];
      const now = Date.now();
      if (ip && recent.get(ip) > now - 4000) return res.status(429).json({ ok: false, error: 'Slow down' });
      recent.set(ip, now); if (recent.size > 5000) recent.clear();
      const path = `lb/v1/${board}/${String(9999999 - score).padStart(7, '0')}_${diff}_${time}_${kills}_${enc(name)}_${now}`;
      try { await put(path, '1', { access: 'public', addRandomSuffix: false, contentType: 'text/plain', token }); }
      catch (e) { await put(path, '1', { access: 'private', addRandomSuffix: false, contentType: 'text/plain', token }); }
      return res.status(200).json({ ok: true });
    }
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ ok: false, error: 'Leaderboard error', detail: String(e && e.message || e).slice(0, 200) });
  }
}
