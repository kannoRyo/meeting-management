import React, { useEffect, useContext } from 'react'
import { GroupContext } from './context/groupContext';
import { listenAuth } from './firebase/firebase';
import Router from './Router'

const Auth = ({children}:any)=>{
    const {group} = useContext(GroupContext)

    useEffect(()=>{
        if(group){
            if(group.name === ''){
                listenAuth()
            }
        }
    },[])

    if(group){
        if(group.uid  === '' ){
                return <></>
        }else{
                return children
        }
    }

}

export default Auth