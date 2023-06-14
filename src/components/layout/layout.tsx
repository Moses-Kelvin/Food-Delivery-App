import React, { PropsWithChildren, useState } from "react";
import Footer from "./Footer/Footer";
import { PaymentOptions } from "../UI/PaymentOptions/PaymentOptions";
import ChatBox from "../UI/Chat/ChatBox";

const Layout = ({ children }: PropsWithChildren) => {

    const [showModal, setShowModal] = useState(true);

    return (
        <>
           <ChatBox />
           {showModal && <PaymentOptions setShowModal={setShowModal} />}
            <main>{children}</main>
            <Footer />
        </>
    )
};

export default Layout;