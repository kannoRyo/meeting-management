import React from 'react'
import {TextField} from '@material-ui/core'

type Props = {
    date: string,
    label: string,
    handleDate: (e :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const DatePicker = ({date,label,handleDate}: Props)=>{

	return (
        <>
            <TextField
                id="date"
                label={label}
                type="date"
                value={date}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleDate(e)}
            />
      </>
)
}

export default DatePicker