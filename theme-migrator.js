const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync('./src', []);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // text-white -> text-zinc-900 dark:text-white
  content = content.replace(/(?<![\w-])text-white\b/g, 'text-zinc-900 dark:text-white');
  
  // text-white/XX -> text-zinc-900/XX dark:text-white/XX
  content = content.replace(/(?<![\w-])text-white\/([0-9]+)\b/g, 'text-zinc-900/$1 dark:text-white/$1');
  
  // bg-white/XX -> bg-zinc-900/XX dark:bg-white/XX  (Wait, for bg, white/5 in dark is faint white. In light, we want faint black: zinc-900/5)
  content = content.replace(/(?<![\w-])bg-white\/([0-9]+)\b/g, 'bg-zinc-900/$1 dark:bg-white/$1');

  // bg-[#0a0a0a] -> bg-white dark:bg-[#0a0a0a]
  content = content.replace(/(?<![\w-])bg-\[\#0a0a0a\]\b/g, 'bg-white dark:bg-[#0a0a0a]');

  // bg-[#050505] -> bg-zinc-50 dark:bg-[#050505]
  content = content.replace(/(?<![\w-])bg-\[\#050505\]\b/g, 'bg-zinc-50 dark:bg-[#050505]');
  
  // bg-black -> bg-white dark:bg-black
  content = content.replace(/(?<![\w-])bg-black\b/g, 'bg-white dark:bg-black');

  // border-white/XX -> border-zinc-900/XX dark:border-white/XX
  content = content.replace(/(?<![\w-])border-white\/([0-9]+)\b/g, 'border-zinc-900/$1 dark:border-white/$1');

  // text-gray-200 -> text-gray-800 dark:text-gray-200
  content = content.replace(/(?<![\w-])text-gray-200\b/g, 'text-gray-800 dark:text-gray-200');
  
  // text-gray-300 -> text-gray-700 dark:text-gray-300
  content = content.replace(/(?<![\w-])text-gray-300\b/g, 'text-gray-700 dark:text-gray-300');
  
  // text-gray-400 -> text-gray-600 dark:text-gray-400
  content = content.replace(/(?<![\w-])text-gray-400\b/g, 'text-gray-600 dark:text-gray-400');
  
  // text-gray-500 -> text-gray-500 dark:text-gray-500
  // text-gray-600 -> text-gray-400 dark:text-gray-600

  // Replace decoration-white / decoration-white/XX
  content = content.replace(/(?<![\w-])decoration-white\/([0-9]+)\b/g, 'decoration-zinc-900/$1 dark:decoration-white/$1');
  content = content.replace(/(?<![\w-])decoration-white\b/g, 'decoration-zinc-900 dark:decoration-white');
  
  // hover:text-white -> hover:text-zinc-900 dark:hover:text-white
  content = content.replace(/(?<![\w-])hover:text-white\b/g, 'hover:text-zinc-900 dark:hover:text-white');
  
  // hover:bg-white/XX -> hover:bg-zinc-900/XX dark:hover:bg-white/XX
  content = content.replace(/(?<![\w-])hover:bg-white\/([0-9]+)\b/g, 'hover:bg-zinc-900/$1 dark:hover:bg-white/$1');

  // hover:border-white/XX -> hover:border-zinc-900/XX dark:hover:border-white/XX
  content = content.replace(/(?<![\w-])hover:border-white\/([0-9]+)\b/g, 'hover:border-zinc-900/$1 dark:hover:border-white/$1');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
