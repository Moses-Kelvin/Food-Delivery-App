import React, { PropsWithChildren } from "react";
import Header from "../Header/Header";
import Footer from "./Footer/Footer";
import DropDown from "../UI/DropDown/DropDownl";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            {/* <DropDown /> */}
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
};

export default Layout;