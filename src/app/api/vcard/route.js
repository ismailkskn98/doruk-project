import vCardsJS from 'vcards-js';
import { readFileSync } from 'fs';
import path from 'path';

const CARD_DATA = {
  name: 'DORUK',
  surname: 'BICER',
  formattedName: 'DORUK BICER',
  organization: 'Studio Bicer',
  title: '',
  email: 'info@dorukbicer.com',
  emailLabel: 'business',
  phone: '+39 331 342 7864',
  website: 'https://www.dorukbicer.com',
  websiteLabel: 'homepage',
  address: {
    street: 'Via Giovanni Pastorelli 4B',
    city: 'Milan',
    stateProvince: '',
    postalCode: '20143',
    countryRegion: 'Italy',
    label: 'Via Giovanni Pastorelli 4B 20143 Milan, Italy',
    customLabel: 'work',
  },
  photo: '/images/vcard-logo-update.png',
};

function normalizeWebsite(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
}

function escapeVCardValue(value = '') {
  return String(value).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

function appendFields(vCardString, fields = []) {
  if (!fields.length) return vCardString;
  const extraLines = fields.filter(Boolean).join('\r\n');
  return vCardString.replace(/\r?\nEND:VCARD\r?\n?$/, `\r\n${extraLines}\r\nEND:VCARD\r\n`);
}

async function buildVCard(data = CARD_DATA) {
  const vCard = vCardsJS();

  const { name, surname, formattedName, organization, title, email, emailLabel, phone, website, websiteLabel, address, photo } = data;

  vCard.firstName = name || '';
  vCard.lastName = surname || '';
  vCard.formattedName = formattedName || [name, surname].filter(Boolean).join(' ');
  vCard.organization = organization || '';
  vCard.title = title || '';

  if (photo) {
    try {
      const imagePath = path.join(process.cwd(), 'public', photo.replace(/^\/+/, ''));
      const imageBuffer = readFileSync(imagePath);
      const base64Photo = imageBuffer.toString('base64');

      const ext = photo.split('.').pop().toLowerCase();
      const mediaType = ext === 'jpg' || ext === 'jpeg' ? 'JPEG' : ext === 'png' ? 'PNG' : 'JPEG';

      vCard.photo.embedFromString(base64Photo, mediaType);
    } catch (error) {
      console.error('Failed to load photo:', error);
    }
  }

  return appendFields(vCard.getFormattedString(), [
    phone ? `item1.TEL;TYPE=CELL:${escapeVCardValue(phone)}` : '',
    phone ? 'item1.X-ABLabel:mobile' : '',
    email ? `item2.EMAIL;TYPE=INTERNET;TYPE=WORK:${escapeVCardValue(email)}` : '',
    email && emailLabel ? `item2.X-ABLabel:${escapeVCardValue(emailLabel)}` : '',
    website ? `item3.URL:${escapeVCardValue(normalizeWebsite(website))}` : '',
    website && websiteLabel ? `item3.X-ABLabel:${escapeVCardValue(websiteLabel)}` : '',
    address
      ? `item4.ADR;TYPE=WORK;LABEL="${escapeVCardValue(address.label || '')}":;;${escapeVCardValue(address.street || '')};${escapeVCardValue(address.city || '')};${escapeVCardValue(address.stateProvince || '')};${escapeVCardValue(address.postalCode || '')};${escapeVCardValue(address.countryRegion || '')}`
      : '',
    address?.customLabel ? `item4.X-ABLabel:${escapeVCardValue(address.customLabel)}` : '',
  ]);
}

export async function GET() {
  const vCardString = await buildVCard();

  return new Response(vCardString, { status: 200, headers: { 'Content-Type': 'text/vcard; charset=utf-8', 'Content-Disposition': 'attachment; filename="doruk-bicer-contact.vcf"' } });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const vCardString = await buildVCard({
      name: body.name || '',
      surname: body.surname || '',
      formattedName: body.formattedName || '',
      organization: body.organization || '',
      title: body.title || '',
      email: body.email || '',
      emailLabel: body.emailLabel || '',
      phone: body.phone || '',
      website: body.website || '',
      websiteLabel: body.websiteLabel || '',
      address: {
        street: body.address?.street || '',
        city: body.address?.city || '',
        stateProvince: body.address?.stateProvince || '',
        postalCode: body.address?.postalCode || '',
        countryRegion: body.address?.countryRegion || '',
        label: body.address?.label || '',
        customLabel: body.address?.customLabel || '',
      },
      photo: body.photo || '',
    });

    return new Response(vCardString, { status: 200, headers: { 'Content-Type': 'text/vcard; charset=utf-8', 'Content-Disposition': 'attachment; filename="contact.vcf"' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
  }
}
