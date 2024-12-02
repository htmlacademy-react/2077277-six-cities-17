import Logo from '../logo/logo';
import { LogoFooterParams } from '../../const';

function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo params={LogoFooterParams} />
    </footer>
  );
}
export default Footer;
