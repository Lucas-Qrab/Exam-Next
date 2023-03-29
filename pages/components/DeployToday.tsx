import dayjs from "dayjs";
import React from 'react'
import useSWR from 'swr'

type TodayProps = {
    date: string
}

export default function DeployToday({ date }: TodayProps) {
    const fetcher = (...args: Parameters<typeof fetch>) =>
        fetch(...args).then((res) => res.json());
    const { data, error } = useSWR(
        "/api/icandeploy?date=" + date,
        fetcher,
        { revalidateOnFocus: false }
    );
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    console.log(data);

    if(data.validated === true){
        return (
            <div>
                <h1>Yes you can deploy</h1>
                <p>go go go !!!</p>
            </div>
        );
    }else{
        return (
            <div>
                <h1>Have you seen what day it is???</h1>
                <p>Deploy Later</p>
            </div>
        );
    }
}