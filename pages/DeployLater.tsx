import { Select, Button } from '@chakra-ui/react'
import dayjs from 'dayjs';
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function DeployLater() {
    const [selectedOption, setSelectedOption] = useState("")
    const tableDate = [""];
    const router = useRouter()


    const now = dayjs();

    for (let i = 7; i < 14; i++) {
        const date = now.add(i, 'day').format('YYYY/MM/DD');
        tableDate.push(date)
    }
    
    function handleClick() {
        for (let i = 1; i <= tableDate.length; i++) {
            if (selectedOption === `option${i}`) {
                router.push('/Deploy?date=' + dayjs(tableDate[i]).toISOString())
            }
        }
        
    }

    return (
        <main className="main">
            <h1>When do you want to deploy ? </h1>
            <div className="container">
                <Select placeholder="Select a date" onChange={(event:any) => setSelectedOption(event.target.value)}>
                    <option value="option1">{tableDate[1]}</option>
                    <option value="option2">{tableDate[2]}</option>
                    <option value="option3">{tableDate[3]}</option>
                    <option value="option4">{tableDate[4]}</option>
                    <option value="option5">{tableDate[5]}</option>
                    <option value="option6">{tableDate[6]}</option> 
                    <option value="option7">{tableDate[7]}</option> 
                </Select>
                <Button 
                    onClick={ handleClick }
                    variant="solid"
                >Submit</Button>
            </div>
        </main>
    )
}