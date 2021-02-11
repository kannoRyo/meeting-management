import React,{useState, useEffect, useContext} from 'react'
import { FormControl, InputLabel, makeStyles, MenuItem } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { DatePicker } from './index'
import Select from '@material-ui/core/Select';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MeetingCard from './MeetingCard'
import { addMeeting } from '../firebase/firebase'
import { GroupContext } from '../context/groupContext';

type Props = {
    open: boolean,
    handleClose: () => void,
    handleNextMeetingDate: (date: string) => void
}

const useStyle = makeStyles({    
    head:{
        display: 'flex',
        justifyContent: 'center',
    },
    numSelect:{
        width: 85,
        margin: '0 13px'
    }
})

const initialCard = {
    name: '' ,
    courseNum: '',
    description: ''
}

const MeetingDialog = ({handleClose, open, handleNextMeetingDate}:Props)=>{
    const classes = useStyle()
    const [thisDate, setThisDate] = useState('')
    const [nextDate, setNextDate] = useState('')
    const [num, setNum] = useState<number>(0)
    const {group} = useContext(GroupContext) 

    const groupUid = group?.uid
    
    const [card1, setCard1] = useState(initialCard)
    const [card2, setCard2] = useState(initialCard)
    const [card3, setCard3] = useState(initialCard)
    const [card4, setCard4] = useState(initialCard)

    const handleThisDate = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setThisDate(e.target.value)
    }

    const handleNextDate = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNextDate(e.target.value)
    }
    
    const handleNum = (e: React.ChangeEvent<{ value: unknown }>) => {
        setNum(e.target.value as number)
    }

    const handleName = (e:React.ChangeEvent<{ value: unknown }>, i: number) => {
        const setCard = eval(`setCard${i+1}`)
        setCard((prevState: any)=>{
            return{
                ...prevState,
                name: e.target.value 
            }
        })
    }

    const handleCourseNum = (e:React.ChangeEvent<{ value: unknown }>, i: number) => {
        const setCard = eval(`setCard${i+1}`)
        setCard((prevState: any)=>{
            return{
                ...prevState,
                courseNum: e.target.value 
            }
        })
    }
    
    const handleDescription = (e:React.ChangeEvent<{ value: unknown }>, i: number) => {
        const setCard = eval(`setCard${i+1}`)
        setCard((prevState: any)=>{
            return{
                ...prevState,
                description: e.target.value 
            }
        })
    }

    const submit = () =>{
        const submitCard: any[] = []
        cardsArray.map((_, i)=>{
            const card = eval(`card${ i+1 }`)
            if(card !== initialCard){
                submitCard.push(card)
            }
        })
        console.log(submitCard)
        addMeeting(submitCard, thisDate, nextDate, groupUid)
    }
    
    const cardsArray = Array(num).fill(0)

	return (
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} style={{width: '700px', margin: '0 auto'}}  >
                <DialogTitle id="customized-dialog-title" >
                    面談記録
                </DialogTitle>
                <DialogContent>
                    <div style={{textAlign: 'center'}}　className={classes.head}　>
                        <DatePicker
                            date={thisDate}
                            label="面談日"
                            handleDate={(e :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleThisDate(e)}
                        />
                        <FormControl className={classes.numSelect} >
                            <InputLabel id="demo-simple-select-label">人数</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={num}
                                onChange={handleNum}
                            >
                                <MenuItem value={1}>1人</MenuItem>
                                <MenuItem value={2}>2人</MenuItem>
                                <MenuItem value={3}>3人</MenuItem>
                                <MenuItem value={4}>4人</MenuItem>
                            </Select>
                        </FormControl>
                        <DatePicker
                            date={nextDate}
                            label="次回の面談日"
                            handleDate={(e :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleNextDate(e)}
                        />
                    </div>
                    <div className="space_medium" />
                    <div>
                        {   
                            cardsArray.map((_: any, i: number)=>{
                                const content = eval(`card${i+1}`)
                                return   (
                                    <>
                                        <MeetingCard 
                                            content={content}  
                                            handleName={(e:React.ChangeEvent<{ value: unknown }>)=>handleName(e ,i)} 
                                            handleCourseNum={(e:React.ChangeEvent<{ value: unknown }>)=>handleCourseNum(e ,i)} 
                                            handleDescription={(e:React.ChangeEvent<{ value: unknown }>)=>handleDescription(e ,i)} 
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                <Button  onClick={ () => {
                    handleNextMeetingDate(nextDate)
                    handleClose()   
                    submit()
                    setCard1(initialCard)
                    setCard2(initialCard)
                    setCard3(initialCard)
                    setCard4(initialCard)
                    setThisDate('')
                    setNextDate('')
                    setNum(0)
                }} color="primary" disabled={!thisDate || !nextDate || !card1.name }>
                    記録する
                </Button>
                </DialogActions>
            </Dialog>
)
}

export default MeetingDialog