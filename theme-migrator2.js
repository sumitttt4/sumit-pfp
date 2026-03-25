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

const map = {
  // exact words only
  'text-white': 'text-zinc-900 dark:text-white',
  'bg-\\[#050505\\]': 'bg-zinc-50 dark:bg-[#050505]',
  'bg-\\[#0a0a0a\\]': 'bg-white dark:bg-[#0a0a0a]',
  'bg-black': 'bg-zinc-100 dark:bg-black',
  'bg-white\\[0.03\\]': 'bg-zinc-900/[0.03] dark:bg-white/[0.03]',
  'hover:text-white': 'hover:text-zinc-900 dark:hover:text-white',
  'text-gray-200': 'text-gray-800 dark:text-gray-200',
  'text-gray-300': 'text-gray-700 dark:text-gray-300',
  'text-gray-400': 'text-gray-600 dark:text-gray-400',
  'text-gray-500': 'text-gray-500 dark:text-gray-500',
};

// Also for classes with /opacity:
// text-white/XX -> text-zinc-900/XX dark:text-white/XX
// bg-white/XX -> bg-black/XX dark:bg-white/XX
// border-white/XX -> border-black/XX dark:border-white/XX
// decoration-white/XX -> decoration-zinc-900/XX dark:decoration-white/XX
// hover:border-white/XX -> hover:border-black/XX dark:hover:border-white/XX
// hover:bg-white/XX -> hover:bg-black/XX dark:hover:bg-white/XX

const files = walkSync('./src', []);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Process mapping exact matches
  for (const [key, val] of Object.entries(map)) {
    content = content.replace(new RegExp(`(?<![\\w-])` + key + `(?!/[\\d.]+)`, 'g'), val);
  }

  // Regex patterns
  content = content.replace(/(?<![\w-])text-white\/([0-9]+)\b/g, 'text-zinc-900/$1 dark:text-white/$1');
  content = content.replace(/(?<![\w-])text-white\b/g, 'text-zinc-900 dark:text-white');
  
  content = content.replace(/(?<![\w-])bg-white\/(\[[0-9.]+\]|[0-9]+)\b/g, 'bg-black/$1 dark:bg-white/$1');
  content = content.replace(/(?<![\w-])border-white\/(\[[0-9.]+\]|[0-9]+)\b/g, 'border-black/$1 dark:border-white/$1');
  content = content.replace(/(?<![\w-])decoration-white\/([0-9]+)\b/g, 'decoration-zinc-900/$1 dark:decoration-white/$1');
  
  content = content.replace(/(?<![\w-])hover:border-white\/([0-9]+)\b/g, 'hover:border-black/$1 dark:hover:border-white/$1');
  content = content.replace(/(?<![\w-])hover:bg-white\/(\[[0-9.]+\]|[0-9]+)\b/g, 'hover:bg-black/$1 dark:hover:bg-white/$1');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
