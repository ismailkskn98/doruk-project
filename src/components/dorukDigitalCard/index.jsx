"use client";
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const userData = {
  name: "DORUK",
  surname: "BICER",
  email: "doruk@dorukbicer.com",
  phone: "+39 331 342 7864",
  website: "www.dorukbicer.com",
  address: "Via Giovanni Pastorelli 4, Milan, Italy",
  photo: "/images/doruk-bicer.jpg",
};
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const QR_URL = `${BASE_URL}/api/vcard`;

function normalizeWebsite(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

export default function DorukDigitalCard() {
  return (
    <div className="w-full max-w-full sm:max-w-96 mx-auto h-dvh flex items-center justify-center bg-white overflow-hidden shadow-lg py-37.5 px-12">
      <article className="flex flex-col items-center text-center gap-15">
        <div className="flex flex-col gap-1">
          <h1 className="text-[32px] font-bold font-forma-djr-display tracking-tight text-nowrap">
            <span className="font-light">STUDIO</span> DORUK BICER
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 max-w-62.5">
          <p className="text-[24px] uppercase tracking-wide font-helvetica-neue">
            {userData.name} {userData.surname}
          </p>

          <QRCodeCanvas value={QR_URL} size={250} level="H" />
        </div>

        <div className="flex flex-col text-left gap-2 text-base font-helvetica-neue w-full max-w-62.5">
          <a href={normalizeWebsite(userData.website)} className="text-black hover:underline truncate">
            {userData.website}
          </a>
          <p className="max-w-41.25">{userData.address}</p>
        </div>
      </article>
    </div>
  );
}
