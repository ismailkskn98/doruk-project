import vCardsJS from "vcards-js";

export async function POST(request) {
  const body = await request.json();
  const { name, surname, email, phone, website, address, photo } = body;

  const vCard = vCardsJS();
  vCard.firstName = name || "";
  vCard.lastName = surname || "";
  vCard.email = email || "";
  vCard.cellPhone = phone || "";
  vCard.url = website || "";
  vCard.workAddress.label = address || "";

  if (photo) {
    // base64 data URL → strip prefix
    const base64Data = photo.replace(/^data:image\/\w+;base64,/, "");
    vCard.photo.embedFromString(base64Data, "image/jpeg");
  }

  const vCardString = vCard.getFormattedString();

  return new Response(vCardString, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard",
      "Content-Disposition": 'attachment; filename="contact.vcf"',
    },
  });
}
