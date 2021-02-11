import React,{useState, useContext, useEffect} from 'react'
import firebase from 'firebase'
import { GroupContext } from '../context/groupContext'
import { fetchName, signOut, fetchNextDate } from '../firebase/firebase'
import { Group } from '../types/group'
import { MeetingDialog } from '../components/index'
import {Button} from '@material-ui/core'


const Home = ({history}: any)=>{
    const [open, setOpen] = useState(false)
    const [nextMeetingDate, setNextMeetingDate] = useState('')
    const {group, setGroup} = useContext(GroupContext) 

    const groupName = group?.name
    const groupUid = group?.uid

    const handleOpen = () => {
        setOpen(false)
    }

    const fetchGroup = async (uid: string) =>{
        const fetchedGroupName = await fetchName(uid) as Group
        setGroup(fetchedGroupName)
    }
    
    const fetchDate = async ()  => {
        if(groupUid){
            const date: any = await fetchNextDate(groupUid)  
            setNextMeetingDate(date)
        }
    }
    
    const handleNextMeetingDate = (date: string) => {
        setNextMeetingDate(date)
    }

    useEffect(()=>{
        const auth =  firebase.auth().onAuthStateChanged((user: any) => {
            !user ? history.push("signin") 
            : fetchGroup(user.uid)
        })
        return () => auth()
    },[])

    useEffect(()=>{
        fetchDate()
    },[groupUid])
    
	return (
    <div className="home-container" >
        <h2　className="heading">面談記録</h2>
        <h3>次回の面談: {nextMeetingDate}</h3>
        <button　
            onClick={()=> signOut()}
        >ログアウト</button>
        <div>
            <p>name: {groupName}</p>
            <p>uid: {groupUid}</p>
        </div>
        <Button 
            variant="contained" 
            color="primary" 
            onClick={()=>{
                setOpen(true)
            }}
        >
            面談記録を記入する
        </Button>
        <MeetingDialog
            open={open}
            handleNextMeetingDate={(date: string) => handleNextMeetingDate(date)}
            handleClose={()=> handleOpen()}
        />
    </div>
)
}

export default Home