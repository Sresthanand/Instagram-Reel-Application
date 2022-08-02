import React, { useEffect, useContext, useState } from "react";
import UploadFile from './UploadFile'
import { AuthContext } from "../Context/AuthContext";
import { database } from '../firebase'
import Posts from "./Posts"
import Navbar from "./Navbar"

export default function Feed() {
    const { user, logout } = useContext(AuthContext)
    const [userData, setUserData] = useState('')
    useEffect(() => {
        const unsub = database.users.doc(user.uid).onSnapshot((snapshot) => {
            setUserData(snapshot.data())
        })
        return () => { unsub() }
    }, [user])

    return (
        <div>
                <Navbar userData={userData}/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop:'8%' }}>
                {/* <div className="comp" style={{ width: '50%' }}>
                    <h1>Welcome to feed </h1>
                    <button onClick={logout}>Log out</button>
                </div> */}
                <UploadFile user={userData} />
                <Posts userData={userData} />
            </div>
        </div>
    )
}


