import './NavBar.css';
import {
  Header,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Header className="navContainer" aria-label="YakshaKatha">
      <HeaderName href="/" className="navHeader" prefix=" ">
        YakshaKatha
      </HeaderName>
      <div className="divider"></div> 
      <HeaderNavigation aria-label="Navigation">
        <HeaderMenuItem className="navMenuItem">
          <Link to="/predict">Predict</Link>
        </HeaderMenuItem>
        <HeaderMenuItem className="navMenuItem">
          <Link to="/about">About</Link>
        </HeaderMenuItem>
        <HeaderMenuItem className="navMenuItem">
          <Link to="/team">Team</Link>
        </HeaderMenuItem>
      </HeaderNavigation>
    </Header>
  );
};

export default NavBar;
