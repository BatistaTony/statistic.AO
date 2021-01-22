import { getFont } from '@/utils/font';
import styled from 'styled-components';

export const FooterStyled = styled.div`
  width: 100%;
  height: auto;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 30px;
`;

export const FooterMenu = styled.ul`
  width: auto;
  list-style: none;
  padding-left: 20px;
`;

export const FooterMenuItem = styled.li`
  font-size: 11pt;
  ${getFont()};
  color: black;
  cursor: pointer;
`;

export const FooterCpy = styled.p`
  font-size: 11pt;
  ${getFont()};
  color: black;
  width: 100%;
  text-align: center;
`;
