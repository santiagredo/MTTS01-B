import { Link } from "react-router-dom";



export function LoginPage () {
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

            <form>
                <div className={mainContainerClasses}>
                    <div className={inputsContainerClasses}>
                        <label className="text-white">Email address or username</label>
                        <input type="text" placeholder="Email address" className={inputsClasses}/>
                    </div>

                    <div className={inputsContainerClasses}>
                        <label className="text-white">Password</label>
                        <input type="password" placeholder="Password" className={inputsClasses}/>
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