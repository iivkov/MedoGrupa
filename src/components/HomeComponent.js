import React, { useState, useEffect } from 'react';
import '../App.css';
import slika from '../assets/SPORTSKA DVORANA_27.JPG';
import EUnoteSite from './EUnoteSite';

const HomeComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <EUnoteSite/>
        <h1>Dobrodošli!</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <img src={slika} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="spacer"></div>
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Medo grupa d.o.o. osnovana je 2010. godine kao tvrtka za upravljanje športskim objektima te pružanje športske rekreacije, a danas obavlja poslove na izgradnji objekata niskogradnje i visokogradnje kao i usluge iznajmljivanja strojeva i opreme za građevinarstvo.
                    Bavimo se inovativnim načinom sanacije asfaltiranih površina infratehnologijom te klasičnim načinom asfaltiranja i održavanja asfaltiranih površina u gradovima, općinama i ostalim površinama poslovnih subjekata, kao što su tvornički krugovi, parkirališta i ostale površine.</p>
            </div>
        </div>
    </div>
    );
}

export default HomeComponent;
