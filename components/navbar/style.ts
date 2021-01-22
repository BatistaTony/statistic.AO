import { getFont } from '@/utils/font';
import styled from 'styled-components';

export const NavbarStyled = styled.div`
  width: 100%;
  height: 100px;
  background-color: cornflowerblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;

  @media (max-width: 700px) {
    padding-left: 3%;
    padding-right: 3%;
  }

  @media (min-width: 1500px) {
    height: 150px;
  }

  @media (min-width: 2000px) {
    height: 200px;
  }

  @media (min-width: 3000px) {
    width: 1600px;
  }
`;

export const Logo = styled.h1`
  font-size: 17pt;
  ${getFont('Bold')};
  color: yellow;

  span:first-child {
    color: red;
  }

  span:last-child {
    color: black;
  }

  @media (min-width: 1500px) {
    font-size: 30pt;
  }

  @media (min-width: 2000px) {
    font-size: 40pt;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  font-size: 11pt;
  margin-left: 20px;
  width: 100px;
  text-align: center;
  padding-top: 7px;
  padding-bottom: 7px;
  cursor: pointer;
  transition: 0.5s;
  background: white;
  color: black;
  ${getFont()};

  @media (max-width: 700px) {
    font-size: 10.5pt;
    width: 80px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: transparent;
    color: white;
    font-size: 12pt;
  }

  @media (min-width: 1500px) {
    font-size: 15pt;
    width: 150px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  @media (min-width: 2000px) {
    font-size: 20pt;
    width: 200px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonMobile = styled.div`
  width: 35px;
  height: 30px;
  border: 1px solid white;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  position: ${({ isShowMenu }: any) => (isShowMenu ? 'fixed' : 'relative')};
  right: ${({ isShowMenu }: any) => (isShowMenu ? '3%' : 'none')};

  @media (max-width: 700px) {
    display: flex;
  }

  .line {
    width: 30px;
    height: 3px;
    background-color: white;
    margin-top: 2px;
    margin-bottom: 2px;
    border-radius: 10px;
    transition: 0.5s;

    &:nth-child(1) {
      transform: ${({ isShowMenu }: any) =>
        isShowMenu ? ' rotate(45deg) translate(4px, 5px) ' : ' '};
    }

    &:nth-child(2) {
      opacity: ${({ isShowMenu }: any) => (isShowMenu ? '0 ' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ isShowMenu }: any) =>
        isShowMenu ? ' rotate(-45deg) translate(5px, -5px) ' : ' '};
    }
  }
`;

export const DivMenuMobile = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
  }

  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);

  .simpleWrapper {
    width: 70%;
    height: 100vh;
    background-color: cornflowerblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
  }
`;
