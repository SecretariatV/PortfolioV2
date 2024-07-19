import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import { resolve } from "path";

const pipelineAsync = promisify(pipeline);

const baseUrl = "https://ovb-portfolio.vercel.app";

const paths = ["/"];

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({ hostname: baseUrl });

    // Save the sitemap to a file
    const sitemapPath = resolve("./public/sitemap.xml");
    const writeStream = createWriteStream(sitemapPath);

    // Write each path to the sitemap
    paths.forEach((path) => {
      sitemap.write({ url: path, changefreq: "daily", priority: 0.7 });
    });

    sitemap.end();

    // Use pipeline to handle the stream
    await pipelineAsync(sitemap, writeStream);

    console.log("Sitemap successfully created!");
  } catch (err) {
    console.error("Error generating sitemap:", err);
  }
}

// Run the sitemap generation script
generateSitemap();
