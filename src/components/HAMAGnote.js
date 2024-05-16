import '../App.css';
import ESIF_EU_logo from '../assets/ESIF-EU_logo.png';
import ESIF_FI_logo from '../assets/ESIF-FI_logo.png';
import HAMAG_BICRO_logo from '../assets/HAMAG-Bicro_logo.png';

const HAMAGnote = () => {

  return (
    <div className="EU-note">
        <a href="https://european-union.europa.eu/index_hr" target="_blank" rel="noopener noreferrer">
            <div className="image"><img src={ESIF_EU_logo} alt="Zastava Europske unije"/></div>
        </a>
        <a href="https://strukturnifondovi.hr/financijski-instrumenti/" target="_blank" rel="noopener noreferrer">
            <div className="image"><img src={ESIF_FI_logo} alt="Logotip Financijskih instrumenata" /></div>
        </a>
        <a href="https://hamagbicro.hr/" target="_blank" rel="noopener noreferrer">
            <div className="image"><img src={HAMAG_BICRO_logo} alt="Logotip Hrvatske agencije za malo gospodarstvo, inovacije i investicije" /></div>
        </a>
        <div className="text">Krajnji primatelj financijskog instrumenta sufinanciranog iz Europskog fonda za regionalni razvoj u sklopu Operativnog programa „Konkurentnost i kohezija”.</div>
    </div>
  )
}

export default HAMAGnote