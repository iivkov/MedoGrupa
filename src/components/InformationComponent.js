import React, { useState, useEffect } from 'react';
import '../App.css';

const InformationComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <h1>Osnovni podatci</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>MEDO GRUPA d.o.o. za građenje, trgovinu i usluge</p>
                <p>Lička 21</p>
                <p>HR-44000 Sisak</p>
                <br />
                <p>Telefon: +385 (0)44 742 614</p>
                <p>Mobitel: +385 (0)98 226 148</p>
                <p>E-pošta: info@medogrupa.hr</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Ključna osoba: Marko Medarić, direktor</p>
                <p>Godina osnutka: 2010.</p>
                <p>Mjerodavni sud: Trgovački sud u Zagrebu</p>
                <p>Pravni oblik: društvo s ograničenom odgovornošću</p>
                <p>MBS: 120011084</p>
                <p>OIB: 09863586313</p>
                <p>Temeljni kapital: 2.654,46 EUR</p>
            </div>
        </div>
    </div>
    );
}

export default InformationComponent;
