// Client for the online leaderboards (api/leaderboard.js on Vercel). Only works on the hosted site.
const API = '/api/leaderboard';
export const online = () => /^https?:$/.test(location.protocol);
export async function fetchBoard(board) {
  if (!online()) return { ok: false, offline: true };
  try { const r = await fetch(`${API}?board=${encodeURIComponent(board)}`); return await r.json(); }
  catch (e) { return { ok: false, error: 'Could not reach the leaderboard.' }; }
}
export async function submitScore(entry) {
  if (!online()) return { ok: false, offline: true };
  try {
    const r = await fetch(API, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(entry) });
    return await r.json();
  } catch (e) { return { ok: false, error: 'Could not reach the leaderboard.' }; }
}
