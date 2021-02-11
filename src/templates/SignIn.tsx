import React, {useCallback, useState, useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { TextInput, GreenButton } from '../components/index'
import {GroupContext} from '../context/groupContext'
import {signIn} from '../firebase/firebase'
import {Button} from '@material-ui/core'
import { Group } from '../types/group'

const SignIn = ({history}:any) =>{
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    const {group, setGroup} = useContext(GroupContext)

    const handleEmail = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setEmail(e.target.value)
    },[setEmail])

    const handlePassword = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setPassword(e.target.value)
    },[setPassword])

    const handleName = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setName(e.target.value)
    },[setName])

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
            <div className="space_small" />
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
                onClick={async ()=>{
                    const newGroup = await signIn(email, password) as Group
                    setGroup(newGroup)
                    history.push("/")
                }}
            />
            <div className="space_large" />
            <div>
                <Button variant="outlined" color="primary" >
                    <Link to="signUp" className="link-element" >新しいグループを作る</Link>
                </Button>
            </div>
        </div>
    )
}

export default SignIn