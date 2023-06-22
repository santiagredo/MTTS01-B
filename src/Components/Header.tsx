import React from "react";
import { Link } from "react-router-dom";
import { pageContext } from "../PageContext";
import { defaultUser } from "../database";

export function Header () {
    const context = React.useContext(pageContext);

    const [logoutModal, setLogoutModal] = React.useState<boolean>(false);

    const openLogout = () => {
        setLogoutModal(true);
    };

    const closeLogout = () => {
        setLogoutModal(false);
    };

    const closeSession = () => {
        context.setUser(defaultUser);
        setLogoutModal(false);
    };

    const headerClasses = "w-full flex justify-center bg-black text-white";

    const LinkClasses = "text-white mx-auto my-1 hover:text-green-500 hover:cursor-pointer";
    
    const navClasses = "text-center";
    const pClasses = "";
    const divClasses = "flex justify-between";
    const buttonClasses = "my-2 w-20 border-2 border-green-500 text-white rounded-md transform hover:scale-105";

    return (
        <header className={headerClasses}>
            {!context.user.email && (
                <Link to="/" className={LinkClasses}>
                    Go Home
                </Link>
            )}

            {!logoutModal && context.user.email && (
                <a onClick={openLogout} className={LinkClasses}>
                    Log out
                </a>
            )}

            {logoutModal && context.user.email && (
                <nav className={navClasses}>
                    <p className={pClasses}>
                        Do you want to log out?
                    </p>

                    <div className={divClasses}>
                        <button onClick={closeLogout} className={buttonClasses}>
                            Cancel
                        </button>

                        <button onClick={closeSession} className={buttonClasses}>
                            Log out
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
};