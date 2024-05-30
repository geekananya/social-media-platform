import imgur from 'imgur'
import { fileURLToPath } from "url";
import fs from 'fs'
import path from "path";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
imgur.setClientId(process.env.IMGUR_CLIENT_ID);

export async function uploadToImgur(req, res) {
    if (!req.files || !req.files.image) {
      return '';
    }
  
    const image = req.files.image;
    const uploadsDir = path.join(__dirname, '../public/uploads');
    const uploadPath = path.join(uploadsDir, image.name);
  
    try {
      await image.mv(uploadPath);
  
      try {
        const urlObject = await imgur.uploadFile(uploadPath);
        fs.unlinkSync(uploadPath);
        return urlObject.data.link;
      } catch (e) {
        throw new Error('An error occurred while uploading the image to Imgur');
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
      return '';
    }
  }