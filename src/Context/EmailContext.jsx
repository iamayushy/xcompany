import { createContext, useState } from "react";

const createUser = createContext()

const CreateUserContext = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [userDetail, setUserDetail] = useState({
        name: '',
        email: ''
    })
    console.log(userDetail, isAuth)
    return(
        <createUser.Provider value={{
            userDetail, isAuth, setIsAuth, setUserDetail
        }}>
        {children}
        </createUser.Provider>
    )
}
export {createUser, CreateUserContext}
