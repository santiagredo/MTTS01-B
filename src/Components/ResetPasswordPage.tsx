import { Link, useNavigate } from "react-router-dom";



export function ResetPasswordPage () {
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
                Reset password
            </h2>

            <form onSubmit={handleSubmit}>
                <p className={pClasses}>
                    Enter the code provided to reset the password associated to your email
                </p>

                <div className={sectionContainerClasses}>
                    <div className={inputsContainerClasses}>
                        <label className="text-white">Enter your code</label>
                        <input type="text" placeholder="Type your code" className={inputsClasses}/>
                    </div>

                    <div className={buttonContainerClasses}>
                        <button type="submit" className={buttonClasses}>Submit</button>
                    </div>
                </div>
            </form>

            <form onSubmit={handleSubmit}>
                <p className={pClasses}>
                    Type your new password, make sure to remember it in the future
                </p>

                <div className={sectionContainerClasses}>
                    <div className={inputsContainerClasses}>
                        <label className="text-white">Enter your new password</label>
                        <input type="password" placeholder="Type your new password" className={inputsClasses}/>
                    </div>

                    <div className={buttonContainerClasses}>
                        <button type="submit" className={buttonClasses}>Submit</button>
                    </div>
                </div>
            </form>

            <Link to="/" className={LinkClasses}>
                Return to log in
            </Link>
        </section>
    );
};