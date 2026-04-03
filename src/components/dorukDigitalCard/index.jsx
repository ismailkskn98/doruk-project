"use client";
import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";
import { Download } from "lucide-react";

export default function DorukDigitalCard() {
  const [userData, setUserData] = useState({
    name: "DORUK",
    surname: "BICER",
    email: "doruk@dorukbicer.com",
    phone: "+39 123 456 7890",
    website: "www.dorukbicer.com",
    address: "Via Giovanni Pastorelli 4, Milan, Italy",
    photo: null,
  });

  const qrRef = useRef();

  // vCard'ı API'den al ve indir
  const downloadVCard = async () => {
    const res = await fetch("/api/vcard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "doruk-bicer-contact.vcf";
    link.click();
  };

  // QR içeriği için vCard string'ini API'den çek
  const [qrValue, setQrValue] = React.useState("https://www.dorukbicer.com");

  React.useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch("/api/vcard", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
        const text = await res.text();
        setQrValue(text);
      } catch {
        setQrValue("https://www.dorukbicer.com");
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, [userData]);

  // Resim URL'i base64'e çevir
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // QR kodu indir
  const downloadQR = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "doruk-bicer-contact.png";
      link.click();
    }
  };

  return (
    <main className="w-full h-dvh flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-96 bg-white overflow-hidden shadow-lg">
        {/* Card Content */}
        <div className="flex flex-col items-center py-12 px-6 text-center gap-6">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <p className="text-xs tracking-widest text-gray-400 uppercase">Studio</p>
            <h1 className="text-lg font-bold font-forma-djr-display tracking-tight">
              <span className="font-light">Studio</span> DORUK BICER
            </h1>
          </div>

          {/* Name */}
          <p className="text-sm font-medium uppercase tracking-wide">
            {userData.name} {userData.surname}
          </p>

          {/* QR Section */}
          <div className="w-full bg-gray-200 p-6 flex flex-col items-center gap-2">
            <div ref={qrRef} className="bg-white p-2">
              <QRCodeCanvas value={qrValue} size={120} level="H" includeMargin />
            </div>
            <p className="text-[11px] text-gray-600 text-center leading-tight max-w-32">Okutulan telefona, kişi bilgilerini aktaran QR</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col text-left gap-2 text-xs w-full">
            <a href={`mailto:${userData.email}`} className="text-blue-500 hover:underline truncate">
              {userData.email}
            </a>
            <a href={`tel:${userData.phone}`} className="text-gray-700">
              {userData.phone}
            </a>
            <p className="text-gray-700">{userData.address}</p>
          </div>

          {/* Photo Display */}
          {userData.photo && (
            <div className="w-20 h-20 relative rounded-lg overflow-hidden">
              <Image src={userData.photo} alt="Profile" fill className="object-cover" />
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-2 w-full pt-4 border-t border-gray-200">
            <label className="text-xs font-medium cursor-pointer bg-gray-100 hover:bg-gray-200 transition py-2 px-3 rounded text-center">
              📸 Resim Yükle
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
            <button
              onClick={downloadVCard}
              className="flex items-center justify-center gap-2 text-xs font-medium bg-black text-white hover:bg-gray-800 transition py-2 px-3 rounded"
            >
              <Download size={14} />
              vCard İndir
            </button>
            <button
              onClick={downloadQR}
              className="flex items-center justify-center gap-2 text-xs font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition py-2 px-3 rounded"
            >
              <Download size={14} />
              QR İndir
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
