import React, { PropsWithChildren, useState } from "react";
import Footer from "./Footer/Footer";
import PaymentOptions from "../UI/PaymentOptions/PaymentOptions";
import Navbar from "./Navbar/Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }: PropsWithChildren) => {

    // const [showModal, setShowModal] = useState(false);

    const { pathname } = useRouter();

    const onAuthPath = pathname === "/SignUp" || pathname === "/LogIn";

    return (
        <>
            {/* {showModal && <PaymentOptions setShowModal={setShowModal} />} */}
            {!onAuthPath && <Navbar />}
            <main>{children}</main>
            {!onAuthPath && <Footer />}
        </>
    )
};

export default Layout;