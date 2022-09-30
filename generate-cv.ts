import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

export const generateCv = async () => {
    const htmlContent = fs.readFileSync(
        path.resolve(__dirname, "public", "cv", "index.html"),
        "utf-8",
    );
    const staticPath = path.resolve(__dirname, "public");
    const [cssFile] = fs
        .readdirSync(staticPath)
        .filter((file) => file.endsWith(".css"));
    const cssContent = fs.readFileSync(
        path.resolve(staticPath, cssFile),
        "utf-8",
    );

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--font-render-hinting=none",
        ],
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: ["networkidle0"] });
    await page.addStyleTag({ content: cssContent });
    // await page.evaluateHandle("document.fonts.ready");
    await page.waitForNetworkIdle();

    await page.pdf({
        path: path.resolve(
            __dirname,
            "public",
            "static",
            "michal-irzylowski-cv.pdf",
        ),
        format: "A4",
        scale: 0.67,
        displayHeaderFooter: false,
        printBackground: true,
        margin: {
            top: "10mm",
            left: "10mm",
            right: "10mm",
            bottom: "10mm",
        },
    });

    await browser.close();
};
