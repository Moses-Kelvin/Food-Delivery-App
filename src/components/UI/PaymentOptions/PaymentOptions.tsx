import React, { useState } from "react";
import Image from 'next/image';
import payment from "../../../assets/Images/payment.png";
import Portal from '@src/components/Portal/Portal';
import Options from './Options';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaPaypal } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';


interface modalProps {
    setShowModal: (val: boolean) => void;
}

const PaymentOptionsData = [
    {
        id: "p1",
        name: "Credit/Debit Card.",
        des: "Pay with debit or credit card.",
        icon: <BsFillCreditCardFill size={20} fill="white" style={{ marginRight: '1rem' }} />
    },
    {
        id: "p2",
        name: "PayPal",
        des: "Pay with paypal.",
        icon: <FaPaypal size={20} fill="white" style={{ marginRight: '1rem' }} />
    },
    {
        id: "p3",
        name: "Cash.",
        des: "Pay cash on delivery.",
        icon: <GiCash size={20} fill="white" style={{ marginRight: '1rem' }} />
    }
];



const PaymentOptions = ({ setShowModal }: modalProps) => {
    const [optionId, setOptionId] = useState("");

    return (
        <Portal selector="#portal-container">
            <div className="fixed w-full h-full backdrop z-[1000]">
                <div className="w-[35%] bg-deepRed h-fit rounded-lg m-auto mt-12 pb-8 sm:w-[90%]">
                    <h1 className="font-thin font-lighter font-sans tracking-wider text-goldColor pb-6 pl-8 pt-8 text-xl sm:text-lg sm:pl-0 sm:text-center">CHOOSE YOUR PAYMENT METHOD</h1>
                    <Image src={payment} alt="" className="w-44 h-36 m-auto sm:h-32" />
                    <ul className="grid justify-items-center gap-y-4">
                        {PaymentOptionsData.map((data) =>
                            <Options key={data.id} data={data} setOptionId={setOptionId} optionId={optionId} />
                        )}
                    </ul>
                    <div className="flex gap-x-8 mt-6 justify-center">
                        <button onClick={() => setShowModal(false)} className="relative inline-block px-12 py-2 tracking-widest text-white font-lg font-lighter shadow-lg hover:bg-white hover:text-goldColor">
                            <span className="absolute inset-0 w-full h-full border-2 border-white group-hover:bg-deepRed"></span>
                            <span className="relativegroup-hover:text-white">BACK</span>
                        </button>
                        <button className="relative inline-block px-12 py-2 tracking-widest text-goldColor font-lg font-lighter shadow-lg hover:bg-goldColor hover:text-white">
                            <span className="absolute inset-0 w-full h-full border-2 border-goldColor group-hover:bg-deepRed"></span>
                            <span className="relativegroup-hover:text-white">NEXT</span>
                        </button>
                    </div>
                </div>
            </div>
        </Portal>
    )
};

export default PaymentOptions;