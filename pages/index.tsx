import About from '@/components/about';
import ContentStatistic from '@/components/contentStatistic';
import Hero from '@/components/hero';
import Layout from '@/components/layout';
import Footer from '@/components/footer';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ContentStatistic />
      <About />
      <Footer />
    </Layout>
  );
};

export default Index;
