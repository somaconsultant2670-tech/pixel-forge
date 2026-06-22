import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface IDCardBackProps {
  phone1: string;
  phone2: string;
  email: string;
  website: string;
  emergency: string;
  signatureUrl: string;
  qrValue: string;
}

export const IDCardBack: React.FC<IDCardBackProps> = ({
  phone1,
  phone2,
  email,
  website,
  emergency,
  signatureUrl,
  qrValue,
}) => {
  return (
    <div className="id-card back">
      <div className="card-back">
        <div className="absolute top-[6px] left-2 text-[29px] font-bold text-[#D4AF37]">
          SOMA
        </div>
        <div className="ml-[38px] mt-1 text-[7px] text-[#D4AF37]">
          Civil Engineering & Architectural Consultant
        </div>

        <div className="mx-2 mt-6.5 text-[7.2px] leading-[1.45]">
          Tel: {phone1} | {phone2}<br />
          Email: {email}<br />
          Web: <strong>{website}</strong><br /><br />
          <strong className="text-[#D4AF37]">Emergency: {emergency}</strong>
        </div>

        <div className="absolute bottom-9 left-3 w-[58mm] text-center z-10">
          <img 
            src={signatureUrl} 
            className="h-[22mm] object-contain mb-[3px] mix-blend-multiply"
            alt="Signature"
          />
          <div className="text-[8px] text-[#0A1F3D] font-bold tracking-[1px]">
            AUTHORIZED SIGNATURE
          </div>
        </div>

        <div className="absolute right-2 bottom-2 z-10 bg-white p-[1px] rounded-[1px]">
          <QRCodeSVG value={qrValue} size={70} />
        </div>
        
        <div className="absolute right-3 top-2 text-[#D4AF37] text-[28px] opacity-90 z-10" style={{ fontFamily: 'Segoe UI Symbol, sans-serif' }}>
          NFC
        </div>
      </div>
    </div>
  );
};
