const fs=require('fs');const vm=require('vm');
// Recreates /home/claude/opt/{tex,models,hdri} from the packed assets/*.js so build.mjs can run.
// usage: node unpack-assets.cjs <game folder containing assets/>
const dir=process.argv[2]||'..';const ctx={window:{}};ctx.__A=ctx.window.__A={};
for(const f of fs.readdirSync(dir+'/assets')){vm.runInNewContext(fs.readFileSync(dir+'/assets/'+f,'utf8'),ctx);ctx.__A=ctx.window.__A;}
const map={tex:'tex',model:'models',hdri:'hdri'};
for(const [k,v] of Object.entries(ctx.window.__A)){const [g,n]=k.split('/');fs.mkdirSync('/home/claude/opt/'+map[g],{recursive:true});fs.writeFileSync('/home/claude/opt/'+map[g]+'/'+n,Buffer.from(v,'base64'));}
console.log(Object.keys(ctx.window.__A).length);
