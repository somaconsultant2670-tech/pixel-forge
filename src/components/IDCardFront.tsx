import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface IDCardFrontProps {
  name: string;
  position: string;
  idNumber: string;
  issueDate: string;
  validUntil: string;
  photoUrl: string;
  qrValue: string;
}

export const IDCardFront: React.FC<IDCardFrontProps> = ({
  name,
  position,
  idNumber,
  issueDate,
  validUntil,
  photoUrl,
  qrValue,
}) => {
  return (
    <div className="id-card">
      <div className="card-front">
        <div className="guilloche"></div>
        <div className="kinegram"></div>
        <div className="uv-layer"></div>
        <div className="uv-text">SOMA SECURED</div>
        <div className="micro-ring"></div>
        <div className="holo-foil"></div>
        
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 text-[15px] font-black text-[#D4AF37] tracking-[7px] z-10" style={{ textShadow: '2px 2px 4px #000, -1px -1px 2px rgba(255,255,255,0.53)' }}>
          SOMA
        </div>

        <div className="absolute top-1 left-2.5 text-[29px] font-bold text-[#D4AF37] z-10">
          SOMA
        </div>
        <div className="absolute top-[26px] left-2.5 text-[7.5px] text-[#D4AF37] tracking-[1.5px] z-10">
          CIVIL ENGINEERING & ARCHITECTURAL CONSULTANT
        </div>

        <img 
          src={photoUrl} 
          className="w-[28mm] h-[36mm] object-cover border-[3px] border-[#D4AF37] rounded-[6px] absolute left-2 top-2 z-10"
          alt="Profile"
        />
        <img 
          src={photoUrl} 
          className="absolute left-2 bottom-2 w-[24mm] opacity-[0.12] z-[1]"
          alt="Ghost"
        />

        <div className="absolute left-[38mm] top-[9mm] text-[13.5px] font-bold text-[#D4AF37] z-10 uppercase">
          {name}
        </div>
        <div className="absolute left-[38mm] top-[18mm] text-[10px] text-white z-10">
          {position}
        </div>
        
        <div className="absolute left-[38mm] bottom-2.5 text-[8.8px] leading-[1.35] text-white z-10">
          ID No: <strong>{idNumber}</strong><br />
          Issue: {issueDate}
        </div>
        
        <div className="absolute right-2.5 bottom-2.5 text-[9px] text-right text-[#D4AF37] z-10">
          Valid Until<br />
          <strong>{validUntil}</strong>
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
