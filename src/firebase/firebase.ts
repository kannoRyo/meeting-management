import {firebaseConfig} from './config'
import firebase from 'firebase'
import 'firebase/firebase'

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()

export const signIn = async (email: string, password: string) => { 
    const userCredential = await auth.signInWithEmailAndPassword(email, password)
    const {uid}: any = userCredential.user

    return db.collection('groups').doc(uid).get()
        .then((snapshot)=>{
            const user = snapshot.data()
            if(user){
                const name = user.name
    
                return {
                    uid: uid,
                    name: name
                }
            }
        })

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

export const fetchName = async (uid: string) => {
    return db.collection('groups').doc(uid).get()
        .then((snapshot)=>{
            const user = snapshot.data()
            if(user){
                const name = user.name
                return {
                    uid: uid,
                    name: name
                }
            }
        })
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

export const addMeeting = async (contents: any, thisDate: string, nextDate: string, groupUid: string | undefined) => {
    const meetingRef = db.collection('meetings').doc(thisDate).collection('meeting')

    await db.collection('meetings').doc(thisDate).set({
        nextDate: nextDate,
        groupUid: groupUid
    })

    contents.map(async (content: any)=>{
        const meeting = {
            ...content,
            created_ad: thisDate,
        }
        await meetingRef.add(meeting)
    })

}

export const fetchNextDate = async (groupUid: string | undefined) => {
    return await db.collection('meetings')
      .where( "groupUid" , "==" , groupUid )
      .orderBy("nextDate", "desc")
      .limit(1)
      .get()
      .then( async (snapshot)=>{
            const date = await snapshot.docs[0].data().nextDate
            return date
      }).catch(()=>[
          
      ])
}