// See https://www.npmjs.com/package/next-sitemap
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://blog.williecubed.me',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
