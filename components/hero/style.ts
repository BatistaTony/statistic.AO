import { getFont } from '@/utils/font';
import styled from 'styled-components';

export const HeroStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
  background-size: cover;

  @media (max-height: 550px) {
    height: auto;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;

export const BigTitle = styled.h1`
  ${getFont('SemiBold')};
  font-size: 30pt;
  width: 75%;
  text-align: center;
  color: white;

  span:nth-child(1) {
    color: yellow;
  }

  span:nth-child(2) {
    color: red;
  }

  span:nth-child(3) {
    color: black;
  }

  @media (max-width: 1300px) {
    font-size: 25pt;
    width: 80%;
  }

  @media (max-width: 1000px) {
    font-size: 20pt;
  }

  @media (max-width: 750px) {
    font-size: 17pt;
    width: 90%;
  }

  @media (min-width: 1700px) {
    font-size: 35pt;
    width: 75%;
  }
`;

export const Text = styled.p`
  ${getFont()};
  font-size: 14pt;
  text-align: center;
  width: 70%;
  margin-top: 20px;
  color: white;

  @media (max-width: 1300px) {
    font-size: 13pt;
    width: 80%;
  }

  @media (max-width: 1000px) {
    font-size: 12pt;
  }

  @media (max-width: 750px) {
    font-size: 11pt;
    width: 90%;
  }

  @media (min-width: 1700px) {
    font-size: 17pt;
    margin-top: 30px;
  }

  @media (min-width: 2400px) {
    font-size: 22pt;
  }

  @media (min-width: 3000px) {
    font-size: 27pt;
  }
`;

export const Button = styled.button`
  padding: 10px 30px 10px 30px;
  ${getFont()};
  font-size: 13pt;
  border: none;
  outline: none;
  margin-top: 50px;
  cursor: pointer;
  color: white;
  background-color: cornflowerblue;

  @media (min-width: 1700px) {
    font-size: 17pt;
    margin-top: 60px;
    padding: 20px 40px 20px 40px;
  }

  @media (min-width: 2400px) {
    font-size: 22pt;
    padding: 20px 50px 20px 50px;
  }

  @media (min-width: 3000px) {
    font-size: 27pt;
  }
`;
