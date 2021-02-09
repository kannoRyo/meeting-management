import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    button:{
        backgroundColor: '#87e96d',
        width:　256,
        fontWeight: 'bold',
        fontSize: '16px',
        padding:'8px',
        '&:hover':{
            backgroundColor: '#87e96d',
            opacity: 0.7
        }
    }
})

type Props = {
    text: string,
    onClick: () => void
}   

const GreenButton = ({text, onClick}: Props)=>{
    const classes = useStyles()
	return (
	<Button
        className={classes.button}
        variant={"contained"}
        onClick={onClick}
    >
        {text}
    </Button>
)
}

export default GreenButton