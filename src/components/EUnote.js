import '../App.css'
import EU from '../assets/EU.png';
import EU_fondovi from '../assets/EU_fondovi.png';
import OPKK from '../assets/OPKK.png';

const EUnote = () => {

  return (
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
  )
}

export default EUnote