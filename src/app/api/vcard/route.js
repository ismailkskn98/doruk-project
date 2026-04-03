import vCardsJS from "vcards-js";
import { readFileSync } from "fs";
import path from "path";

const CARD_DATA = {
  name: "DORUK",
  surname: "BICER",
  email: "doruk@dorukbicer.com",
  phone: "+39 331 342 7864",
  website: "https://www.dorukbicer.com",
  address: {
    street: "Via Giovanni Pastorelli 4",
    city: "Milan",
    stateProvince: "",
    postalCode: "",
    countryRegion: "Italy",
    label: "Via Giovanni Pastorelli 4, Milan, Italy",
  },
  photo: "/images/doruk-bicer.jpg",
};

function normalizeWebsite(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

async function buildVCard(data = CARD_DATA) {
  const vCard = vCardsJS();

  const { name, surname, email, phone, website, address, photo } = data;

  vCard.firstName = name || "";
  vCard.lastName = surname || "";
  vCard.email = email || "";
  vCard.cellPhone = phone || "";
  vCard.url = normalizeWebsite(website);

  if (address) {
    vCard.workAddress.street = address.street || "";
    vCard.workAddress.city = address.city || "";
    vCard.workAddress.stateProvince = address.stateProvince || "";
    vCard.workAddress.postalCode = address.postalCode || "";
    vCard.workAddress.countryRegion = address.countryRegion || "";
    vCard.workAddress.label = address.label || "";
  }

  if (photo) {
    try {
      const imagePath = path.join(process.cwd(), "public", photo.replace(/^\/+/, ""));
      const imageBuffer = readFileSync(imagePath);
      const base64Photo = imageBuffer.toString("base64");

      const ext = photo.split(".").pop().toLowerCase();
      const mediaType = ext === "jpg" || ext === "jpeg" ? "JPEG" : ext === "png" ? "PNG" : "JPEG";

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
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="doruk-bicer-contact.vcf"',
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const vCardString = await buildVCard({
      name: body.name || "",
      surname: body.surname || "",
      email: body.email || "",
      phone: body.phone || "",
      website: body.website || "",
      address: {
        street: body.address?.street || "",
        city: body.address?.city || "",
        stateProvince: body.address?.stateProvince || "",
        postalCode: body.address?.postalCode || "",
        countryRegion: body.address?.countryRegion || "",
        label: body.address?.label || "",
      },
      photo: body.photo || "",
    });

    return new Response(vCardString, {
      status: 200,
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
        "Content-Disposition": 'attachment; filename="contact.vcf"',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }
}
