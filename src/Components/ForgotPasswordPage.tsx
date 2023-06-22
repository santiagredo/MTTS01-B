import { Link, useNavigate } from "react-router-dom";
import { usersDatabase } from "../database";


export function ForgotPasswordPage () {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/resetPassword");
    };

    const sectionClasses = "w-full flex justify-center flex-col h-screen bg-black";
    const h2Classes = "w-11/12 my-6 mx-auto text-center text-3xl text-white font-bold";
    const pClasses = "w-11/12 my-6 mx-auto text-center text-white";

    const sectionContainerClasses = "max-w-sm mx-auto";
    const inputsContainerClasses = "flex justify-center flex-col w-11/12 mx-auto mb-4";
    const inputsClasses = "w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2";

    const buttonContainerClasses ="flex justify-center flex-col w-11/12 mx-auto my-6";
    const buttonClasses = "bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-s transform hover:scale-105";

    const LinkClasses = "mx-1 text-green-500 mx-auto my-1 hover:underline";

    return (
        <section className={sectionClasses}>
            <h2 className={h2Classes}>
                Did you forget your password?
            </h2>

            <p className={pClasses}>
                Type your email address, we'll provide you with a code to reset your password
            </p>

            <form onSubmit={handleSubmit}>
                <div className={sectionContainerClasses}>
                    <div className={inputsContainerClasses}>
                        <label className="text-white">Type your email address</label>
                        <input type="email" placeholder="Type your email address" className={inputsClasses}/>
                    </div>

                    <div className={buttonContainerClasses}>
                        <button type="submit" className={buttonClasses}>Send</button>
                    </div>
                </div>
            </form>

            <Link to="/" className={LinkClasses}>
                Return to log in
            </Link>
        </section>

    );
};