import '../App.css';
import { ReactComponent as FacebookLogo } from '../assets/facebook_logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
  <div className="footer">
    <div className='copyright'>
      <p className="p-footer">
        <a href="https://www.facebook.com/medogrupa" className="fb-icon" target="_blank" rel="noopener noreferrer">
          <FacebookLogo />
        </a>
      </p>
      <p className="p-footer">&copy; {year} Medo grupa d.o.o.</p>
      <p className="p-footer">+385 (0)44 742 614 | info@medogrupa.hr</p>
      <p className="p-footer">Sadržaj internetske stranice isključiva je odgovornost Medo grupe d.o.o.</p>
    </div>
  </div>
  )
}

export default Footer