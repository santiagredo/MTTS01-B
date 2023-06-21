import { Link } from "react-router-dom";



export function Header () {


    const LinkClasses = "text-white mx-auto my-1 hover:text-green-500";

    return (
        <header className="w-full flex justify-center bg-black text-white">
            <Link to="/" className={LinkClasses}>Home</Link>
        </header>
    );
};