import { FooterStyled, FooterCpy, FooterMenu, FooterMenuItem } from './style';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterMenu>
        <FooterMenuItem>+244941551087</FooterMenuItem>
        <FooterMenuItem>batistatomeoliveira96@gmail.com</FooterMenuItem>
      </FooterMenu>
      <FooterCpy>Andromeda Labs &copy; {new Date().getFullYear()}</FooterCpy>{' '}
    </FooterStyled>
  );
};

export default Footer;
