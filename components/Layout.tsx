import Navbar from "./Navbar";
import Footer from "./Footer";
import { NextComponentType, NextPageContext } from "next/types";

type ComponentWithChildProps = React.PropsWithChildren<{
  children?:
    | string
    | React.ReactElement
    | NextComponentType<NextPageContext, any, any>;
}>;

const Layout = ({ children }: ComponentWithChildProps) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
