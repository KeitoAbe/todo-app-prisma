import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const originalDir = path.join(process.cwd(), "src/assets/images/original");
const generatedDir = path.join(publicDir, "generated");

async function convertImage(imageName) {
  const imageFullPath = path.join(originalDir, imageName);

  const dest = path.join(generatedDir, "images", "thumb");
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // 拡張子
  const ext = path.extname(imageFullPath);
  // ディレクトリのパスを除いたファイル名
  const basename = path.basename(imageFullPath, ext);

  const sharpStream = sharp(imageFullPath);
  await sharpStream
    .clone()
    .resize(500, 500)
    .toFile(
      path.format({
        dir: dest,
        name: "thumb-" + basename,
        ext: ".jpg",
      })
    );
  await sharpStream
    .clone()
    .resize(500, 500)
    .toFile(
      path.format({
        dir: dest,
        name: "thumb-" + basename,
        ext: ".webp",
      })
    );
}

async function generateThumbnailImages(imageNames) {
  Promise.all(imageNames.map(convertImage));
}

function readAllImages() {
  const fileNames = fs.readdirSync(originalDir);
  return fileNames;
}
const allImages = readAllImages();
await generateThumbnailImages(allImages);
