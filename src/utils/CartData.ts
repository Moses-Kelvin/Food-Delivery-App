import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpg";
import img3 from "../assets/Images/img3.jpg";
import img4 from "../assets/Images/img4.jpg";
import img5 from "../assets/Images/img5.jpg";
import img6 from "../assets/Images/img6.jpg";
import img7 from "../assets/Images/img7.jpg";
import img8 from "../assets/Images/img8.jpg";
import img9 from "../assets/Images/img9.jpg";
import img10 from "../assets/Images/img10.jpg";
import { StaticImageData } from "next/image";



interface mealData {
    name: string;
    price: number;
    imgUrl: StaticImageData;
    id: string;
}

export const cartData: mealData[] = [
    {
        name: "Rice",
        price: 50,
        imgUrl: img1,
        id: "m1"
    },
    {
        name: "Noodles",
        price: 30,
        imgUrl: img2,
        id: "m2"
    },
    {
        name: "yam",
        price: 20,
        imgUrl: img3,
        id: "m3"
    },
    {
        name: "Potatoes",
        price: 30,
        imgUrl: img4,
        id: "m4"
    },
    {
        name: "Spaghetti",
        price: 50,
        imgUrl: img5,
        id: "m5"
    },
    {
        name: "moi moi",
        price: 40,
        imgUrl: img6,
        id: "m6"
    },
    {
        name: "Jollof Rice",
        price: 50,
        imgUrl: img7,
        id: "m7"
    },
    {
        name: "Swallow",
        price: 25,
        imgUrl: img8,
        id: "m8"
    },
    {
        name: "Egg sause",
        price: 50,
        imgUrl: img9,
        id: "m9"
    },
    {
        name: "Beans",
        price: 35,
        imgUrl: img10,
        id: "m10"
    }
];