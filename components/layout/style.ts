import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

export const CustomContent: typeof Content = styled(Content)`
  width: 100%;

  @media (min-width: 2000px) {
    width: 1700px;
  }
`;
