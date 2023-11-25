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
                        {/* <iframe title="Lokacija" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5587.351886069733!2d18.68716246586954!3d45.55684407655209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7b9c3d3213d%3A0x43b5fc47f7e90641!2sFaculty%20of%20Electrical%20Engineering%2C%20Computer%20Science%20and%20Information%20Technology%20Osijek%20(FERIT%20Osijek)%20-%20Kneza%20Trpimira%202B!5e0!3m2!1shr!2shr!4v1698771443271!5m2!1shr!2shr" width="500" height="400" style={{border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe> */}
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
