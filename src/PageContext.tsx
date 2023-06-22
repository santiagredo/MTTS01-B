import React from "react";
import { UserModel, defaultUser } from "./database";

interface ContextModel {
    user: UserModel,
    setUser: React.Dispatch<React.SetStateAction<UserModel>>;
};

export const pageContext = React.createContext<ContextModel>({
    user: defaultUser,
    setUser: () => {}
});

interface ContextProps {
    children: JSX.Element | React.ReactNode;
};

export function PageContextProvider ({ children }: ContextProps) {
    const [user, setUser] = React.useState<UserModel>(defaultUser);

    return (
        <pageContext.Provider value={{
            user,
            setUser
        }}
        >
            {children}
        </pageContext.Provider>
    );
};