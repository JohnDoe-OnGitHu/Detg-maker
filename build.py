# Junta DETG_lean.html + assets/ num único dist/index.html
import re, os
d = os.path.dirname(os.path.abspath(__file__))
rd = lambda p: open(os.path.join(d, p), encoding='utf-8', newline='').read()
s = rd('DETG_lean.html')
s = s.replace('@@DATA@@', rd('assets/data_D.txt'))
s = re.sub(r'@@A(\d+)@@', lambda m: rd(f'assets/A{m.group(1)}.txt'), s)
os.makedirs(os.path.join(d, 'dist'), exist_ok=True)
open(os.path.join(d, 'dist', 'index.html'), 'w', encoding='utf-8', newline='').write(s)
print('ok -> dist/index.html', len(s), 'bytes')
