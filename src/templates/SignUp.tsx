import React, {useCallback, useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { TextInput, GreenButton } from '../components/index'
import {GroupContext} from '../context/groupContext'
import {signUp} from '../firebase/firebase'
import {Button} from '@material-ui/core'
import { Group } from '../types/group'

const SignUp = ({history}: any) =>{
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    const {group, setGroup} = useContext(GroupContext)

    console.log(group)

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
            <h2 className="heading" >サインアップ</h2>
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
            <div className="space_small" />
            <TextInput
                fullWidth={true}
                label={"グループ名"}
                multiline={false}
                rows={1}
                value={name}
                onChange={handleName}
            />
            <div className="space_medium" />
            <GreenButton
                text={"サインアップ"}
                onClick={async ()=>{
                    const newGroup = await signUp(email, password, name) as Group
                    setGroup(newGroup)
                    history.push("/")
                }}
            />
            <div className="space_large" />
            <div>
                <Button variant="outlined" color="primary"  >
                    <Link to="signIn" className="link-element"  >ログインはこちら</Link>
                </Button>
            </div>
        </div>
    )
}

export default SignUp