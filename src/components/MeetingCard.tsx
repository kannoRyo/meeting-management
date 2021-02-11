import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Divider, TextField } from '@material-ui/core';
import TextInput from './TextInput';

const useStyle = makeStyles({
    card:{
        display: 'flex',
        textAlign: 'center',
        paddingTop: '20px',
        paddingBottom: '20px',
        borderTop: '1px solid #ccc'
    },
    left:{
        margin: '0 30px 0 100px' 
    },
    right:{
        width: '240px'
    }
})

const MeetingCard = ({content, handleName, handleCourseNum, handleDescription}: any)=>{
    const classes = useStyle()

    const name = content.name
    const courseNum = content.courseNum
    const description = content.description

	return (
    <div className={classes.card} >
        <div className={classes.left} >  
            <TextInput
                fullWidth={false}
                label={"氏名"}
                multiline={false}
                rows={1}
                value={name}
                onChange={handleName}            
            />
            <br/>
            <div style={{marginBottom: '46px'}} />
            <TextInput
                fullWidth={false}
                label={"講座数 / (週)"}
                multiline={false}
                rows={1}
                value={courseNum}
                onChange={handleCourseNum}            
            />
        </div>
        <div>
            <TextInput
                fullWidth={false}
                label={"内容"}
                multiline={true}
                rows={6}
                value={description}
                onChange={handleDescription}      
            />
        </div>
    </div>
)
}

export default MeetingCard