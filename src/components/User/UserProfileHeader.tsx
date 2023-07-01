import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillCamera, AiOutlineHistory } from "react-icons/ai";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";
import profile from "../../assets/Images/profile3.jpg";
import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";

const profileLinks = [
    {
        icon: <IoMdNotifications className="sm:text-deepRed text-xl sm:text-5xl" />,
        text: "Notifications",
        link: "/User/Notifications"
    },
    {
        icon: <MdOutlineAccountCircle className="sm:text-deepRed text-xl sm:text-5xl" />,
        text: "Profile",
        link: "/User"
    },
    {
        icon: <AiOutlineHistory className="sm:text-deepRed text-xl sm:text-5xl" />,
        text: "Order History",
        link: "/User/OrderHistory"
    },
    {
        icon: <IoMdSettings className="sm:text-deepRed text-xl sm:text-5xl" />,
        text: "Settings",
        link: "/User/Settings"
    }
];


const UserProfileHeader = () => {

    const { pathname } = useRouter();
    const llinkStyle = "border-b-2 border-b-lightBlue border-b-solid pb-2 sm:border-0 sm:bg-lightRed";

    return (
        <section className="w-full">
            {/* <h1 className="text-white text-2xl font-thin pl-8">Welcome, Moses Kelvin! 😊</h1> */}
            <div className="w-full grid justify-items-center mt-12">
                <div className="border-2 border-lightBlue border-solid p-2 rounded-full sm:border-deepRed sm:border-[0.4rem]">
                    <Image src={profile} alt="" className="w-36 h-36 rounded-full" />
                    {/* <RiUserAddLine size={100} style={{ color: '#ADD8E6' }} /> */}
                </div>
                <div className="rounded-full bg-lightGray p-2 translate-x-12 -translate-y-8">
                    <AiFillCamera size={25} style={{ color: 'white' }} />
                </div>
                <h1 className="font-bold font-mono text-xl text-lightBlue sm:font-sans sm:text-deepRed">Moses Kelvin</h1>
            </div>
            <div className="grid grid-cols-4 w-3/4 justify-items-center mx-auto mt-8 sm:w-full sm:flex sm:gap-x-4 sm:justify-center">
                {profileLinks.map((link, index) =>
                    <Link href={link.link} key={index}>
                        <div className={` ${pathname === link.link && llinkStyle} flex items-center gap-x-1 text-lightBlue font-bold sm:rounded-full sm:p-2`}>
                            {link.icon}
                            <p className="sm:hidden">{link.text}</p>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    )
};

export default UserProfileHeader;