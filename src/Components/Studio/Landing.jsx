import land from './lan.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, userAuth } from '../../FirebaseConfig'
import {collection, addDoc} from 'firebase/firestore'
import { useContext, useRef } from 'react'
import { createUser } from '../../Context/EmailContext'
import { Button, Text } from "@mantine/core"
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const Landing = () => {
    const emailref = useRef()
    const passwordref = useRef()
    const userRef = useRef()

    const {setIsAuth, setUserDetail} = useContext(createUser)

    const provider = new GoogleAuthProvider()

    const handleAuth = () => {
       signInWithPopup(userAuth, provider)
       .then((result) => {
        const crediential = GoogleAuthProvider.credentialFromResult(result)
        const token = crediential.accessToken

        const user = result.user
        console.log(user)
       })
       .catch((error) => {
        const crediential  = GoogleAuthProvider.credentialFromError(error)
        console.log(crediential)
       })
    }



    const handleSubmit = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(userAuth, emailref.current.value, passwordref.current.value)
        .then((userCred) => {
            const user = userCred.user
            user.displayName = userRef.current.value
            console.log(user.displayName, user.email)
            setIsAuth(true)
            setUserDetail({
                name: user.displayName,
                email: user.email
            })
        })
        .catch((error) => {
            console.log(error.message)
        })

    }


    return(
        <div className={land.bg}>
            <h1>Welcome To God Mode</h1>
            <form onSubmit={handleSubmit}>
                <input ref={userRef} required  name='name' type='text' placeholder="legendary name ?"/>
                <input required ref={emailref} name='email' type='email' placeholder='email to be updated'/>
                <input required ref={passwordref} name='password' type='password' placeholder='lengendary password'/>
                <input type="submit" value="Enter Into God Mode" />
            </form>
            <Button onClick={handleAuth}  size="xl"  leftIcon={<FcGoogle size={24}/>} variant="outline">Sign In With Google</Button>

        </div>
    )
}
export {Landing}
