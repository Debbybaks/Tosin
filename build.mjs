import {mkdir,copyFile,writeFile,readFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js','science.js','worker.js'])await copyFile(file,'dist/'+file);
await cp('fonts','dist/fonts',{recursive:true});
console.log('Static production files built in dist/');

let commit=process.env.VERCEL_GIT_COMMIT_SHA;
if(!commit){const head=(await readFile('.git/HEAD','utf8')).trim();commit=head.startsWith('ref: ')?(await readFile('.git/'+head.slice(5),'utf8')).trim():head;}
if(!/^[a-f0-9]{40}$/.test(commit))throw Error('Unable to verify source commit.');
await writeFile('dist/build-info.json',JSON.stringify({application:'TOSIN',commit,repository:'https://github.com/Debbybaks/Tosin',builtAt:new Date().toISOString()},null,2));
