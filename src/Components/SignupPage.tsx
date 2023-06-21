import { Link } from "react-router-dom";



export function SignupPage () {
    const sectionClasses = "w-full flex justify-center flex-col h-screen bg-black";
    const h2Classes = "my-6 text-center text-3xl text-white font-bold";

    const sectionContainerClasses = "max-w-sm mx-auto";
    const inputsContainerClasses = "flex justify-center flex-col w-11/12 mx-auto mb-4";
    const inputsClasses = "w-full rounded px-2 h-10 max-w-s bg-gray-900 hover:border hover:border-solid hover:border-white text-white focus:border-2";

    const buttonContainerClasses ="flex justify-center flex-col w-11/12 mx-auto my-6";
    const buttonClasses = "bg-green-500 text-white mx-auto rounded-3xl w-full h-10 font-bold max-w-s transform hover:scale-105";

    const spanClasses = "my-6 text-center text-white font-semibold";
    const LinkClasses = "mx-1.5 text-green-500 mx-auto my-1 hover:underline";

    return (
        <section className={sectionClasses}>
            <h2 className={h2Classes}>
                Create a new account
            </h2>

            <form>
                <div className={sectionContainerClasses}>
                    <div className={inputsContainerClasses}>
                        <label className="text-white">What is your email address?</label>
                        <input type="email" placeholder="Type your email address" className={inputsClasses}/>
                    </div>

                    <div className={inputsContainerClasses}>
                        <label className="text-white">Create a password</label>
                        <input type="password" placeholder="Type your password" className={inputsClasses}/>
                    </div>

                    <div className={inputsContainerClasses}>
                        <label className="text-white">Create a username</label>
                        <input type="text" placeholder="Type your clever username" className={inputsClasses}/>
                    </div>

                    <div className={buttonContainerClasses}>
                        <button type="submit" className={buttonClasses}>Sign up</button>
                    </div>
                </div>
            </form>

            <span className={spanClasses}>
                Already have an account? 
                <Link to="/" className={LinkClasses}>
                    Log in
                </Link>
            </span>
            
        </section>
    );
};