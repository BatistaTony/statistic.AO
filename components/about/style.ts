import { getFont } from '@/utils/font';
import styled from 'styled-components';

export const AboutStyled = styled.div`
  width: 100%;
  padding: 3%;
  box-sizing: border-box;
  background: cornflowerblue;
`;

export const ListStep = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  box-sizing: border-box;
  padding: 5%;
  padding-top: 7%;
  padding-bottom: 6%;

  @media (max-width: 1050px) {
    padding: 3%;
  }
`;

export const StepStyled = styled.li`
  margin: 20px;
  width: 25%;
  height: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-radius: 5px;

  @media (max-width: 1050px) {
    width: 40%;
  }

  @media (max-width: 1050px) {
    width: 90%;
    height: 250px;
  }
`;

export const StepTitle = styled.h1`
  ${getFont('Medium')};
  font-size: 14pt;
`;

export const StepIlustration = styled.div`
  img {
    width: 6rem;
  }
`;

export const StepText = styled.p`
  ${getFont()};
  width: 90%;
  font-size: 11pt;
  text-align: justify;
`;
