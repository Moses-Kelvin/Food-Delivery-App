import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import payment from "../../../assets/Images/payment.png";
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaPaypal } from "react-icons/fa";
import { GiCash } from "react-icons/gi";

interface PortalProps {
    children: React.ReactNode;
    selector: string;
}

const Portal: React.FC<PortalProps> = ({ children, selector }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
        };
    }, []);

    if (!mounted) {
        return null;
    }

    const portalRoot = document.querySelector(selector);
    return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
};

export default Portal;


interface modalProps {
    setShowModal: (val: boolean) => void;
}


export const PaymentOptions = ({ setShowModal }: modalProps) => {
    return (
        <Portal selector="#portal-container">
            <div className="fixed w-full h-full backdrop z-[1000]">
                <div className="w-[35%] bg-deepRed h-fit rounded-lg m-auto mt-8 pb-8 sm:w-[90%] sm:mt-4 sm:max-h-[95%]">
                    <h1 className="font-thin font-lighter font-sans tracking-wider text-goldColor pb-6 pl-8 pt-8 text-xl sm:text-lg sm:pl-0 sm:text-center">CHOOSE YOUR PAYMENT METHOD</h1>
                    <Image src={payment} alt="" className="w-44 h-36 m-auto sm:h-32" />
                    <ul className="grid gap-6 md:grid-cols-2">
                        <li className="w-4/5 m-auto">
                            <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
                            <label htmlFor="hosting-small" className="inline-flex items-center w-full justify-between p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <div className="w-full text-lg text-black font-semibold">Visa/Master Card</div>
                                    <div className="w-full">Pay with your visa or master card.</div>
                                </div>
                                <BsFillCreditCardFill size={20} fill="black" />
                            </label>
                        </li>
                        <li className="w-4/5 m-auto">
                            <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
                            <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <div className="w-full text-lg text-black font-semibold">PayPal</div>
                                    <div className="w-full">Pay with paypal.</div>
                                </div>
                                <FaPaypal size={20} fill="black" />
                            </label>
                        </li>
                        <li className="w-4/5 m-auto">
                            <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
                            <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <div className="w-full text-lg text-black font-semibold">Cash</div>
                                    <div className="w-full">Pay cash on delivery.</div>
                                </div>
                                <GiCash size={20} fill="black" />
                            </label>
                        </li>
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