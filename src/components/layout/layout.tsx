import React, { PropsWithChildren, useState } from "react";
import Footer from "./Footer/Footer";
import PaymentOptions from "../UI/PaymentOptions/PaymentOptions";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: PropsWithChildren) => {

    const [showModal, setShowModal] = useState(true);

    return (
        <>
            {showModal && <PaymentOptions setShowModal={setShowModal} />}
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
};

export default Layout;