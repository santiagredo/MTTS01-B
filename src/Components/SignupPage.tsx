import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { pageContext } from "../PageContext";
import { usersDatabase, UserModel } from "../database";

export function SignupPage () {
    const context = React.useContext(pageContext);
    const navigate = useNavigate();

    const [formEmail, setFormEmail] = React.useState("");
    const handleFormEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormEmail(event.target.value);
    };

    const [formPassword, setFormPassword] = React.useState("");
    const handleFormPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormPassword(event.target.value);
    };

    const [formUser, setFormUser] = React.useState("");
    const handleFormUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormUser(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const newUser: UserModel = {
            email: formEmail,
            password: formPassword,
            username: formUser
        };
    
        usersDatabase.push(newUser);
        context.setUser(newUser);
    };

    React.useEffect(() => {
        if (context.user.email || context.user.username) {navigate("/home")};
    }, [context.user]);

    const sectionClasses = "w-full flex justify-center flex-col h-screen bg-black";
    const h2Classes = "my-6 text-center text-3xl text-white font-bold";

    const sectionContainerClasses = "max-w-sm mx-auto";
    const inputsContainerClasses = "flex justify-center flex-col w-11/12 mx-auto mb-4";
    const inputsClasses = "w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2";

    const buttonContainerClasses ="flex justify-center flex-col w-11/12 mx-auto my-6";
    const isButtonDisabled = formUser.length < 1 || formPassword.length < 1 || formEmail.length < 1;
    const buttonClasses = `bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-s transform hover:scale-105 ${isButtonDisabled && "opacity-60"}`;

    const spanClasses = "my-6 text-center text-white font-semibold";
    const LinkClasses = "text-green-500 mx-auto my-1 hover:underline";

    return (
        <section className={sectionClasses}>
            <h2 className={h2Classes}>
                Create a new account
            </h2>

            <form onSubmit={handleSubmit}>
                <div className={sectionContainerClasses}>
                    <div className={inputsContainerClasses}>
                        <label className="text-white">What is your email address?</label>
                        <input type="email" placeholder="Type your email address" className={inputsClasses} onChange={handleFormEmailChange}/>
                    </div>

                    <div className={inputsContainerClasses}>
                        <label className="text-white">Create a password</label>
                        <input type="password" placeholder="Type your password" className={inputsClasses} onChange={handleFormPasswordChange}/>
                    </div>

                    <div className={inputsContainerClasses}>
                        <label className="text-white">Create a username</label>
                        <input type="text" placeholder="Type your clever username" className={inputsClasses} onChange={handleFormUserChange}/>
                    </div>

                    <div className={buttonContainerClasses}>
                        <button type="submit" className={buttonClasses} disabled={isButtonDisabled}>Sign up</button>
                    </div>
                </div>
            </form>

            <div className={spanClasses}>
                <p>Already have an account? </p>
                <Link to="/" className={LinkClasses}>
                    Log in
                </Link>
            </div>
            
        </section>
    );
};