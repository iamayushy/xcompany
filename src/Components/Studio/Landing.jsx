import land from './lan.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, userAuth } from '../../FirebaseConfig'
import {collection, addDoc} from 'firebase/firestore'


import { useRef } from 'react'
import { async, contains } from '@firebase/util'
const Landing = () => {
    const emailref = useRef()
    const passwordref = useRef()
    const userRef = useRef()

    const addUserName = async(name, email) => {
        try{
            const docRef = await addDoc(collection(db, "users"), {
                name: name,
                email: email
            });
        }catch(e){
            console.log("Error In Data")
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(userAuth, emailref.current.value, passwordref.current.value)
        .then((userCred) => {
            const user = userCred.user
            addUserName(userRef.current.value, emailref.current.value)
            user.displayName = userRef.current.value
            console.log(user)
        })
        .catch((error) => {
            console.log(error.message)
        })

    }
    console.log(userAuth)

    return(
        <div className={land.bg}>
            <h1>Welcome To God Mode</h1>
            <form onSubmit={handleSubmit}>
                <input ref={userRef} required  name='name' type='text' placeholder="legendary name ?"/>
                <input required ref={emailref} name='email' type='email' placeholder='email to be updated'/>
                <input required ref={passwordref} name='password' type='password' placeholder='lengendary password'/>
                <input type="submit" value="Enter Into God Mode" />
            </form>
        </div>
    )
}
export {Landing}
