import { useState, useEffect } from 'react';
import bgDesktop from './assets/bg.png';
import bgMobile from './assets/mobilebg.png';
import pkfIcon from './assets/icon.png';
import androidIcon from './assets/android.svg';
import iosIcon from './assets/ios.svg';
import apkFile from './assets/PKFmaroc.apk';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = apkFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  
  const handleWebVisit = () => {
    window.open('https://mypkf.app/', '_blank');
  };

  return (
    <div style={{
      minHeight: '100vh',
      height: isMobile ? '100vh' : 'auto',
      width: '100vw',
      backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      justifyContent: isMobile ? 'center' : 'flex-end',
      padding: isMobile ? '0 0 0 0' : '40px 8vw 40px 40px',
      overflow: isMobile ? 'hidden' : 'auto',
      margin: 0,
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <div style={{
        background: 'white',
        borderRadius: isMobile ? '0' : '24px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
        padding: '10px 10vw',
        width:  '100vw',
        maxWidth: isMobile ? '80vw' : '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}>
        <img 
          src={pkfIcon} 
          alt="PKF" 
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
        
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '26px',
            fontWeight: 600,
            color: '#1f2937',
            margin: 0,
            fontFamily: 'Segoe UI, sans-serif'
          }}>
            PKF Maroc
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: '4px 0 0 0',
            fontFamily: 'Segoe UI, sans-serif'
          }}>
            Version 3.0
          </p>
        </div>

        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <button
            onClick={handleDownload}
            style={{
              width: '100%',
              padding: '16px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Segoe UI, sans-serif',
              transition: 'background 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1d4ed8'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#2563eb'}
          >
            <img src={androidIcon} alt="Android" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
            Télécharger pour Android
          </button>
          
          <button
            onClick={handleWebVisit}
            style={{
              width: '100%',
              padding: '16px',
              background: 'white',
              color: '#2563eb',
              border: '2px solid #2563eb',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Segoe UI, sans-serif',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#2563eb';
            }}
          >
            <img src={iosIcon} alt="iOS" style={{ width: '24px', height: '24px' }} />
            Ouvrir Web & iOS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;