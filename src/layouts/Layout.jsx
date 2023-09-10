import { Container } from '@chakra-ui/react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxW="1280px">
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
