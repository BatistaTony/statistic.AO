import { Fragment, useState } from 'react';
import { ButtonMobile, DivMenuMobile, MenuItem } from './style';

const MenuMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      {showMenu && (
        <DivMenuMobile>
          <div className="simpleWrapper">
            <MenuItem>Inicio</MenuItem>
            <MenuItem>Sobre</MenuItem>
          </div>
        </DivMenuMobile>
      )}
      <ButtonMobile
        className="iconMenu"
        onClick={() => setShowMenu(!showMenu)}
        isShowMenu={showMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </ButtonMobile>
    </Fragment>
  );
};

export default MenuMobile;
