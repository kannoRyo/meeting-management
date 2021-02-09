import React, {useCallback, useState, useContext} from 'react'
import { TextInput, GreenButton } from '../components/index'
import {UserContext} from '../context/userContext'

const SignIn = () =>{
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {user} = useContext(UserContext)

    const handleEmail = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setEmail(e.target.value)
    },[setEmail])

    const handlePassword = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setPassword(e.target.value)
    },[setPassword])

    return(
        <div className="auth-container">
            <h2 className="heading" >サインイン</h2>
            <div className="space_small" />
            <TextInput
                fullWidth={true}
                label={"メールアドレス"}
                multiline={false}
                rows={1}
                value={email}
                onChange={handleEmail}
            />
            <div className="space_medium" />
            <TextInput
                fullWidth={true}
                label={"パスワード"}
                multiline={false}
                rows={1}
                value={password}
                onChange={handlePassword}
            />
            <div className="space_medium" />
            <GreenButton
                text={"ログイン"}
                onClick={()=>{}}
            />
        </div>
    )
}

export default SignIn