import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { usersDatabase, resetCodes, ResetCodeModel } from "../database";



export function ResetPasswordPage () {
    const navigate = useNavigate();

    const [resetCodeExists, setResetCodeExists] = React.useState<boolean>(false);

    const [resetCode, setResetCode] = React.useState<number>();
    const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResetCode(Number(event.target.value));
    };

    const [newPassword, setNewPassword] = React.useState<string>("");
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    };

    const handleResetCodeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const storedResetCode: ResetCodeModel | undefined = resetCodes.find(ele => ele[0] === resetCode);

        if (storedResetCode) {
            setResetCodeExists(true);
        } else {
            alert("Code doesn't exist");
        };
    };

    const handlePasswordChangeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const storedResetCode: ResetCodeModel | undefined = resetCodes.find(ele => ele[0] === resetCode);

        if (storedResetCode) {
            const index = usersDatabase.findIndex(ele => ele.email === storedResetCode[1].email);

            if (index !== -1) {
                usersDatabase[index].password = newPassword;
                alert("Password successfully changed");
                navigate("/");
            } else {
                alert("Error processing your request");
            };
        } else {
            alert("Error processing your request");
        };
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
                Reset password
            </h2>

            {!resetCodeExists && (
                <form onSubmit={handleResetCodeSubmit}>
                    <p className={pClasses}>
                        Enter the code provided to reset the password associated to your email
                    </p>

                    <div className={sectionContainerClasses}>
                        <div className={inputsContainerClasses}>
                            <label className="text-white">Enter your code</label>
                            <input type="number" placeholder="Type your code" className={inputsClasses} onChange={handleCodeChange}/>
                        </div>

                        <div className={buttonContainerClasses}>
                            <button type="submit" className={buttonClasses}>Submit</button>
                        </div>
                    </div>
                </form>
            )}

            {resetCodeExists && (
                <form onSubmit={handlePasswordChangeSubmit}>
                    <p className={pClasses}>
                        Type your new password, make sure to remember it in the future
                    </p>

                    <div className={sectionContainerClasses}>
                        <div className={inputsContainerClasses}>
                            <label className="text-white">Enter your new password</label>
                            <input type="password" placeholder="Type your new password" className={inputsClasses} onChange={handlePasswordChange}/>
                        </div>

                        <div className={buttonContainerClasses}>
                            <button type="submit" className={buttonClasses}>Submit</button>
                        </div>
                    </div>
                </form>
            )}

            <Link to="/" className={LinkClasses}>
                Return to log in
            </Link>
        </section>
    );
};