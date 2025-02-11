import { Outlet } from 'react-router-dom';
import Header from '@/layouts/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;