import vCardsJS from "vcards-js";
import { readFileSync } from "fs";
import path from "path";

const CARD_DATA = {
  name: "DORUK",
  surname: "BICER",
  email: "doruk@dorukbicer.com",
  phone: "+39 123 456 7890",
  website: "www.dorukbicer.com",
  address: "Via Giovanni Pastorelli 4, Milan, Italy",
  photo: "/images/doruk-bicer.jpg",
};

async function buildVCard({ name, surname, email, phone, website, address, photo } = CARD_DATA) {
  const vCard = vCardsJS();
  vCard.firstName = name || "";
  vCard.lastName = surname || "";
  vCard.email = email || "";
  vCard.cellPhone = phone || "";
  vCard.url = website || "";
  vCard.workAddress.label = address || "";

  if (photo) {
    try {
      // Statik resim URL'ini public klasöründeki dosya path'ine çevir
      const imagePath = path.join(process.cwd(), `public${photo}`);
      const imageBuffer = readFileSync(imagePath);
      const base64Photo = imageBuffer.toString("base64");

      // Content-Type'ı dosya extension'ından al
      const ext = photo.split(".").pop()?.toLowerCase() || "jpeg";
      const mediaType = ext === "jpg" || ext === "jpeg" ? "JPEG" : ext.toUpperCase();

      vCard.photo.embedFromString(base64Photo, mediaType);
    } catch (error) {
      console.error("Failed to load photo:", error);
    }
  }

  return vCard.getFormattedString();
}

export async function GET() {
  const vCardString = await buildVCard();
  return new Response(vCardString, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard",
      "Content-Disposition": 'attachment; filename="doruk-bicer-contact.vcf"',
    },
  });
}

export async function POST(request) {
  const body = await request.json();
  const { name, surname, email, phone, website, address, photo } = body;

  const vCardString = await buildVCard({ name, surname, email, phone, website, address, photo });

  return new Response(vCardString, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard",
      "Content-Disposition": 'attachment; filename="contact.vcf"',
    },
  });
}
