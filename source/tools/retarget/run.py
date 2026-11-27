import sys, json, subprocess, time, os
from playwright.sync_api import sync_playwright
page_name, expr = sys.argv[1], sys.argv[2]
srv = subprocess.Popen(['python3', '-m', 'http.server', '8765'], cwd='/home/claude/mixamo', stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
try:
  with sync_playwright() as p:
    b = p.chromium.launch(args=['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'])
    pg = b.new_page(viewport={'width': 900, 'height': 600})
    pg.on('console', lambda m: print('CONSOLE', m.text[:300]) if m.type in ('error','warning') else None)
    pg.on('pageerror', lambda e: print('PAGEERR', e))
    pg.goto(f'http://localhost:8765/{page_name}')
    pg.wait_for_function('window.ready === true', timeout=60000)
    r = pg.evaluate(expr)
    if len(sys.argv) > 3: pg.screenshot(path=sys.argv[3])
    out = json.dumps(r)
    if len(sys.argv) > 4: open(sys.argv[4], 'w').write(out); print('wrote', len(out))
    else: print(out[:6000])
    b.close()
finally:
  srv.kill()
