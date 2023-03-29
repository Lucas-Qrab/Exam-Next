import { useRouter } from "next/router";
import DeployToday from "./components/DeployToday";
import dayjs from "dayjs";


export default function Deploy() {
    const router = useRouter()
    
    const date = router.query.date?.toString()

    return (
        <main className="main">
            <h1>Deploy on {dayjs(date).format("YYYY/MM/DD")}</h1>
            {date && <DeployToday date={date} />}
        </main> 
    )
}
  
  