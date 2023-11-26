import React from 'react';
import '../App.css';
import EU from '../assets/EU.png';
import EU_fondovi from '../assets/EU_fondovi.png';
import OPKK from '../assets/OPKK.png';
import slika from '../assets/SPORTSKA DVORANA_27.JPG';

const HomeComponent = () => {
    return (
        <div>
            <div className="EU-note">
                <a href="https://european-union.europa.eu/index_hr" target="_blank" rel="noopener noreferrer">
                    <div class="image"><img src={EU} alt="Zastava Europske unije"/></div>
                </a>
                <a href="https://strukturnifondovi.hr/" target="_blank" rel="noopener noreferrer">
                    <div class="image"><img src={EU_fondovi} alt="Logotip Europskih strukturnih i investicijskih fondova" /></div>
                </a>
                <a href="https://opzo-opkk.hr/" target="_blank" rel="noopener noreferrer">
                    <div class="image"><img src={OPKK} alt="Logotip Operativnog programa Konkurentnost i kohezija" /></div>
                </a>
                <div class="text">Izrada internetske stranice sufinancirana je sredstvima tehničke pomoći Operativnog programa „Konkurentnost i kohezija“ iz Europskog fonda za regionalni razvoj.</div>
            </div>
            <div className="main_content">
                <h1>Dobrodošli!</h1>
                <div className="container">
                    {/* <div> */}
                    <div className="box">
                        <img src={slika} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} />
                    </div>
                {/* <div className="spacer"></div> */}
                    <div className="box">
                        <p>Medo grupa d.o.o. osnovana je 2010. godine kao tvrtka za upravljanje športskim objektima te pružanje športske rekreacije, a danas obavlja poslove na izgradnji objekata niskogradnje i visokogradnje kao i usluge iznajmljivanja strojeva i opreme za građevinarstvo.
                            Bavimo se inovativnim načinom sanacije asfaltiranih površina infratehnologijom te klasičnim načinom asfaltiranja i održavanja asfaltiranih površina u gradovima, općinama i ostalim površinama poslovnih subjekata, kao što su tvornički krugovi, parkirališta i ostale površine.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;
