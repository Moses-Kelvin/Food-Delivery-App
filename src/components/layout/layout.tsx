import React, { PropsWithChildren } from "react";
import Footer from "./Footer/Footer";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    )
};

export default Layout;