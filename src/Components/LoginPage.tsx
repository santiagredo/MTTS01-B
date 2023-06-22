import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { pageContext } from "../PageContext";
import { usersDatabase } from "../database";


export function LoginPage () {
    const context = React.useContext(pageContext);
    const navigate = useNavigate();

    const [formUser, setFormUser] = React.useState("");
    const handleFormUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormUser(event.target.value);
    };

    const [formPassword, setFormPassword] = React.useState("");
    const handleFormPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userExists = usersDatabase.find(ele => ele.email === formUser || ele.username === formUser);

        if (userExists) {
            if (userExists.password === formPassword) {
                context.setUser(userExists);
                navigate("/home");
            } else {
                alert("User exists, password is NOT correct");
            };
        } else {
            alert("User doesn't exist");
        };
    };

    React.useEffect(() => {
        if (context.user.email || context.user.username) {navigate("/home")};

    }, [])

    const mainClasses = "w-full flex justify-center flex-col h-screen bg-black";
    const h1Classes = "my-6 text-center text-5xl text-white font-bold";
    const pClasses = "my-6 text-center text-white font-semibold";

    const mainContainerClasses = "max-w-sm mx-auto";
    const inputsContainerClasses = "flex justify-center flex-col w-11/12 mx-auto mb-4";
    const inputsClasses = "w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2";

    const buttonContainerClasses ="flex justify-center flex-col w-11/12 mx-auto my-6";
    const buttonClasses = "bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-s transform hover:scale-105";

    const LinkClasses = "text-white mx-auto my-1 hover:text-green-500";

    return (
        <main className={mainClasses}>
            <h1 className={h1Classes}>
                MTTS01-B
            </h1>

            <p className={pClasses}>
                Log in to continue using the app
            </p>

            <form onSubmit={handleSubmit}>
                <div className={mainContainerClasses}>
                    <div className={inputsContainerClasses}>
                        <label className="text-white">Email address or username</label>
                        <input type="text" placeholder="Email address or username" className={inputsClasses} onChange={handleFormUserChange}/>
                    </div>

                    <div className={inputsContainerClasses}>
                        <label className="text-white">Password</label>
                        <input type="password" placeholder="Password" className={inputsClasses} onChange={handleFormPasswordChange}/>
                    </div>

                    <div className={buttonContainerClasses}>
                        <button type="submit" className={buttonClasses}>Log in</button>
                    </div>
                </div>
            </form>

            <Link to="/signup" className={LinkClasses}>Sign up page</Link>
            <Link to="forgotPassword" className={LinkClasses}>Forgot your password?</Link>
        </main>
    );
};