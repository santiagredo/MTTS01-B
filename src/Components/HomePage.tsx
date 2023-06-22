import React from "react";
import { useNavigate } from "react-router-dom";
import { pageContext } from "../PageContext";


export function HomePage () {
    const context = React.useContext(pageContext);
    const navigate = useNavigate();

    
    React.useEffect(() => {
        if (!context.user.email || !context.user.username) {navigate("/")};

    }, [context.user]);

    const sectionClasses = "w-full h-screen flex justify-center flex-col bg-black";
    const h1Classes = "w-11/12 my-6 mx-auto text-center text-3xl text-white font-bold";
    const pClasses = "w-11/12 my-6 mx-auto text-center text-white";

    return (
        <section className={sectionClasses}>
            <h1 className={h1Classes}>
                MTTS01-B
            </h1>

            <p className={pClasses}>
                You made it to the home page! 🥳🥳🥳 
            </p>
        </section>
    );
};