
import './footer.scss';



export const Footer = () => {

  return (
    <div className="footer">
        <ul className="footer-list">
            <li className="footer-item">Copyright @2021</li>
            <li className="footer-item">ShootingVision</li>
            <li className="footer-item"><a to="/">Contact</a></li>
        </ul>
    </div>
  );
};

export default Footer;