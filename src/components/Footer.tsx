import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cds--footer">
        <div className="cds--footer__copyright">
          <p>© {currentYear} YakshaKatha. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
