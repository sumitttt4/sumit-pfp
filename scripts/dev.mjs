const args=process.argv.slice(2).flatMap((v)=>v==='--host'?['--hostname']:v==='--strictPort'?[]:[v]);
process.argv=[process.argv[0],process.argv[1],...args];
await import('next/dist/bin/next');
