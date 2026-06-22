import { useState } from 'react';
import { IDCardFront } from './components/IDCardFront';
import { IDCardBack } from './components/IDCardBack';
import { Button } from './components/ui/button';
import { Printer } from 'lucide-react';

function App() {
  const [cardData] = useState({
    name: 'IMAANAA DINU HASSEN',
    position: 'Structural Foreman',
    idNumber: 'SOM-CE-112',
    issueDate: '01 Jan 2025',
    validUntil: '31 Dec 2027',
    photoUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/21f403c5-52d7-47b5-9035-cbfae9c9fe1c/imaanaa-photo-a38f7a42-1782161941577.webp',
    qrValue: 'https://soma-consult.com.et/verify/SOM-CE-112',
    phone1: '+251 911 542 418',
    phone2: '+251 915 370 994',
    email: 'soma.consult.48@gmail.com',
    website: 'https://soma-consult.com.et',
    emergency: '+251 915 370 994',
    signatureUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/21f403c5-52d7-47b5-9035-cbfae9c9fe1c/authorized-signature-ad43c9a9-1782161942154.webp'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="id-card-container">
      <div className="no-print flex flex-col items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">SOMA ID Card Preview</h1>
        <p className="text-gray-600">Professional Identity Management System</p>
        <Button onClick={handlePrint} className="flex items-center gap-2">
          <Printer className="w-4 h-4" />
          Print ID Card
        </Button>
      </div>

      <div className="card-print-wrap">
        <IDCardFront {...cardData} />
        <IDCardBack 
          phone1={cardData.phone1}
          phone2={cardData.phone2}
          email={cardData.email}
          website={cardData.website}
          emergency={cardData.emergency}
          signatureUrl={cardData.signatureUrl}
          qrValue={cardData.qrValue}
        />
      </div>
    </div>
  );
}
export default App;
