import Header from "../components/Header"

import '../app/globals.css'


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
