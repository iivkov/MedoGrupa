import React from 'react';
import '../App.css';
import anigif from '../assets/anigif.gif';

const AboutComponent = () => {
    return (
        <div className="main_content">
                <h1>O nama</h1>
                <div className="container">
                    {/* <div> */}
                    <div className="box">
                        <p>Medo grupa d.o.o. građevinska je tvrtka s višegodišnjim iskustvom u izgradnji objekata prije svega niskogradnje, ali i visokogradnje. 
                            Osim izgradnje novih prometnica, bavimo se također održavanjem i sanacijom postojećih prometnica te ostalih asfaltiranih površina.</p>
                        <p>Svoje višegodišnje iskustvo i kvalitetu stekli smo izvodeći građevinske radove na području Grada Siska, Grada Petrinje, Grada Ivanić-Grada te Općine Križ. 
                            Također, surađivali smo s tvrtkama Swietelsky, Lagermax, Građenje, Centar za vozila Hrvatske i dr.</p>
                    </div>
                {/* <div className="spacer"></div> */}
                    <div className="box">
                        <img src={anigif} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
    );
}

export default AboutComponent;