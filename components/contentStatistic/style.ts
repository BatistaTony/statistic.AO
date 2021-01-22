import { getFont } from '@/utils/font';
import styled from 'styled-components';

export const ContentStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  box-sizing: border-box;
  padding-bottom: 5%;
`;

export const ContentTitle = styled.h1`
  width: 100%;
  font-size: 17pt;
  ${getFont('Medium')};
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;

  @media (max-width: 750px) {
    font-size: 13pt;
  }

  @media (min-width: 1700px) {
    font-size: 25pt;
    width: 75%;
  }
`;
