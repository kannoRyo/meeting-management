import {firebaseConfig} from './config'
import firebase from 'firebase'
import 'firebase/firebase'

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()

export const signIn = async (email: string, password: string, name: string) => { 
    const userCredential = await auth.signInWithEmailAndPassword(email, password)
    const {uid}: any = userCredential.user

    const group = {
        name: name,
        uid: uid,
    }

    console.log(group)

    db.collection('groups').doc(uid).set(group)

    return group
}

export const signUp = async (email: string, password: string, name: string)=>{
    const userCredential = await auth.createUserWithEmailAndPassword(email, password)
    const user = userCredential.user
    if(user){
        const uid = user.uid
        
        const group = {
            name: name,
            uid: uid
        }
    
        return await db.collection('groups').doc(uid).set(group)
            .then(()=>{
                return group
        })
    }

}

export const listenAuth = async () =>{
    await auth.onAuthStateChanged((user:any)=>{
        if(user){
            const uid = user.uid
                db.collection('groups').doc(uid).get()
                    .then((snapshot)=>{
                        const data = snapshot.data()
                        return data
                })
        }else{
            return
        }
    })
}

export const signOut = async () =>{
    auth.signOut()
}