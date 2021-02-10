import React,{useContext, useEffect} from 'react'
import firebase from 'firebase'
import { GroupContext } from '../context/groupContext'
import { signOut } from '../firebase/firebase'


const Home = ({history}: any)=>{
    const {group} = useContext(GroupContext) 

    const groupName = group?.name
    const groupUid = group?.uid

    useEffect(()=>{
        const auth =  firebase.auth().onAuthStateChanged((user: any) => {
            !user && history.push("signin")
        })

        return () => auth()
    },[])
    
	return (
    <div>
        <h2>Home</h2>
        <div>
            <p>name: {groupName}</p>
            <p>uid: {groupUid}</p>
        </div>
        <button　
            onClick={()=> signOut()}
        >ログアウト</button>
    </div>
)
}

export default Home