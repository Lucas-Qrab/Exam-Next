import Head from 'next/head'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import DeployToday from './components/DeployToday'
import { useState } from 'react'
import { SWRConfig } from 'swr'
import dayjs from 'dayjs'



export default function Home() {
  const [date, setDate] = useState("")
  const router = useRouter()

  function handleClickToday() {
    setDate(dayjs().toISOString())
    console.log(date)
  }

  const handleClickLater = () => {
    router.push('/DeployLater')
  }
  return (
    <>
      <Head>
        <title>Exam App Sould I Deploy</title>
        <meta name="description" content="Can you deploy today ?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>
        <h1>Sould I Deploy ?</h1>
        <div className='container'>
          <Button
            onClick={handleClickToday}
            variant="solid"
          >Today ?</Button>
          <Button
            onClick={handleClickLater}
            variant="solid"
          >Later ? </Button>
          
        </div>
        <div>
          {date && <DeployToday date={date} />}
        </div>
      </main>
    </>
  )
}
