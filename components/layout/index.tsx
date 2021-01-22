import { Layout as AntLayout } from 'antd';
import Head from 'next/head';
import Navbar from '../navbar';
const { Content, Header } = AntLayout;
import { CustomContent } from './style';

export default function Layout({ children }) {
  return (
    <AntLayout>
      <Head>
        <title>Helpkid.AO</title>
      </Head>
      <Header>
        <Navbar />
      </Header>
      <CustomContent>{children}</CustomContent>
    </AntLayout>
  );
}
