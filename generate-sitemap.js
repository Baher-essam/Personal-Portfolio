// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: 'https://baheressam.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  smStream.pipe(writeStream);

  smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  smStream.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
  smStream.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });

  smStream.end();

  await streamToPromise(smStream);
  console.log('Sitemap generated.');
}

generateSitemap();
