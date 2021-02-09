import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Router from './Router'

const Auth = ({children}:any)=>{
        // const dispatch = useDispatch()
        // const selecotor = useSelector(state=> state)
        // const isSignedIn = getIsSignedIn(selecotor)
        
        // useEffect(()=>{
        //         if(!isSignedIn){
        //                 // dispatch(listenAuthState())
        //         }

        // },[])

        // if(!isSignedIn){
        //         return <></>
        // }else{
        //         return children
        // }

        return(
            children
        )
}

export default Auth