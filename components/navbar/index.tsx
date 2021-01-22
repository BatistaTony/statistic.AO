import MenuMobile from './menuMobile';
import { NavbarStyled, Menu, MenuItem, Logo, ButtonMobile, DivMenuMobile } from './style';

const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo>
        HelpKid.<span>A</span>
        <span>O</span>
      </Logo>

      <Menu>
        <MenuItem>Inicio</MenuItem>
        <MenuItem>Sobre</MenuItem>
      </Menu>

      <MenuMobile />
    </NavbarStyled>
  );
};

export default Navbar;
