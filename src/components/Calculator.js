import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputInterface from "./InputInterface";
import Response from "./Response";


export default function Calculator() {
    const [invested,setInvested] = useState();
    const [time,setTime] = useState();
    const [rate,setRate] = useState();
    const [growth,setGrowth] = useState([0]);
    const [total,setTotal] = useState(0);
    const changeRate = (e) => setRate(e.target.value);
    const changeTime = (e) => setTime(e.target.value);
    const changeInvested = (e) => setInvested(e.target.value);

    useEffect(()=>{
        const res = [0];
        for(let i = 1; i <= time; i++) {
            res.push(Math.round((res[i-1]+12*invested)*(1+rate/100)));
        }
        console.log(res);
        setTotal(res[res.length-1]);
        setGrowth(res);
    },[invested,time,rate]);

    return <Box
        component="div"
        sx={{
            "display": "flex",
            "margin": "auto",
            "flexWrap": "wrap",
            "justify-content": "center"
        }}>
        <InputInterface
            invested={invested}
            time ={time}
            rate={rate}
            total={total}
            changeTime = {changeTime}
            changeRate = {changeRate}
            changeInvested = {changeInvested}
        />
        <Response growth={growth}/>
    </Box>
}