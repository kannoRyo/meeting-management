import React from 'react'
import {TextField} from '@material-ui/core'

type Props = {
    fullWidth: boolean,
    label: string,
    multiline: boolean,
    rows: number,
    value: string,
    onChange: (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const TextInput = ({fullWidth, label, multiline, rows, value, onChange}: Props)=>{

	return (
    <TextField 
        fullWidth={fullWidth}
        label={label}
        multiline={multiline}
        rows={rows}
        value={value}
        onChange={(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onChange(e)} 
    />
)
}

export default TextInput
