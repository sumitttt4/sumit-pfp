fetch('https://jaimec.co')
  .then(r => r.text())
  .then(html => {
    // Find all style blocks
    const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
    const backgroundCSS = [];

    styleMatches.forEach(block => {
      const regex = /[^}]*?background(-image)?:[^}]+?/g;
      let match;
      while ((match = regex.exec(block)) !== null) {
        const str = match[0].trim();
        if (str.includes('linear-gradient') || str.includes('radial-gradient') || str.includes('url(')) {
          backgroundCSS.push(str);
        }
      }
    });

    console.log('Found background-image gradients/urls in CSS:');
    console.log(backgroundCSS);
  })
  .catch(console.error);
