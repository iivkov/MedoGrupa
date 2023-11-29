import React, { useState } from 'react';
import { ReactComponent as AccessibilityLogo } from '../assets/facebook_logo.svg'

const AccessibilityMenu = ({
    // increaseFontSize,
    // decreaseFontSize,
    resetFontSize,
    toggleGrayscale,
    toggleHighContrast,
    grayscale,
    highContrast,
}) => {
    
    const [showAccessibility, setShowAccessibility] = useState(false)
    
    const handleShowAccessibility = () => {
        setShowAccessibility(!showAccessibility)
    }

    return (
    <div className={`accessibility-menu ${showAccessibility ? 'active' : ''}`}>
        <div className="accessibility-icon" onClick={handleShowAccessibility}>
            <AccessibilityLogo />
        </div>
        <div className='accessibility-buttons'>
            {/* <button onClick={increaseFontSize}>Povećaj tekst</button>
            <button onClick={decreaseFontSize}>Smanji tekst</button> */}
            <button onClick={toggleGrayscale}>
                {grayscale ? 'Isključi grayscale' : 'Uključi grayscale'}
            </button>
            <button onClick={toggleHighContrast}>
                {highContrast ? 'Isključi visoki kontrast' : 'Uključi visoki kontrast'}
            </button>
            <button onClick={resetFontSize}>Vrati početne postavke</button>
        </div>
    </div>
  );
};

export default AccessibilityMenu;
