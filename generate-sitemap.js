import axios from 'axios';
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

async function generateSitemap() {
    try {
        // Static URLs
        const staticUrls = [
            { loc: 'https://www.adirayglobal.com/', lastmod: new Date().toISOString(), priority: '0.8' },
            { loc: 'https://www.adirayglobal.com/to', lastmod: new Date().toISOString(), priority: '1.0' },
            { loc: 'https://www.adirayglobal.com/products', lastmod: new Date().toISOString(), priority: '1.0' },
            { loc: 'https://www.adirayglobal.com/forgot-password', lastmod: new Date().toISOString(), priority: '1.0' },
            { loc: 'https://www.adirayglobal.com/sign-up', lastmod: new Date().toISOString(), priority: '1.0' },
            { loc: 'https://www.adirayglobal.com/login', lastmod: new Date().toISOString(), priority: '1.0' },
            { loc: 'https://www.adirayglobal.com/enquiry', lastmod: new Date().toISOString(), priority: '1.0' },
            { loc: 'https://www.adirayglobal.com/contact', lastmod: new Date().toISOString(), priority: '1.0' },
            { loc: 'https://www.adirayglobal.com/products/category', lastmod: new Date().toISOString(), priority: '0.8' },
            { loc: 'https://www.adirayglobal.com/blog', lastmod: new Date().toISOString(), priority: '1.0' },
            { loc: 'https://www.adirayglobal.com/join-us', lastmod: new Date().toISOString(), priority: '1.0' },
            { loc: 'https://www.adirayglobal.com/chatbot', lastmod: new Date().toISOString(), priority: '1.0' }
        ];

        // Fetch list of all blog posts
        const response = await axios.get('https://node-js-jwt-auth.onrender.com/api/posts/');
        const posts = response.data;

        // Initialize the sitemap content
        let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
        sitemapContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        // Add static URLs
        staticUrls.forEach(url => {
            sitemapContent += '  <url>\n';
            sitemapContent += `    <loc>${url.loc}</loc>\n`;
            sitemapContent += `    <lastmod>${url.lastmod}</lastmod>\n`;
            sitemapContent += `    <priority>${url.priority}</priority>\n`;
            sitemapContent += '  </url>\n';
        });

        // Add blog posts URLs
        for (const post of posts) {
            const postId = post._id;
            const postTitle = post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            const postUrl = `https://www.adirayglobal.com/blogpost/${postId}/${postTitle}`;
            const lastModified = post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date().toISOString();

            sitemapContent += '  <url>\n';
            sitemapContent += `    <loc>${postUrl}</loc>\n`;
            sitemapContent += `    <lastmod>${lastModified}</lastmod>\n`;
            sitemapContent += '    <priority>0.8</priority>\n';
            sitemapContent += '  </url>\n';
        }

        sitemapContent += '</urlset>';

        // Write the sitemap content to a file
        writeFileSync(join(__dirname, 'public', 'sitemap.xml'), sitemapContent, 'utf8');
        console.log('Sitemap generated successfully.');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();
