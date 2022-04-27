import React, {useEffect, useState} from "react";
import { TextField, Box, FormLabel, InputAdornment, Tooltip} from "@mui/material";

export default function InputInterface({time,invested,rate,changeTime,changeInvested,changeRate,total}) {
    const [validInputs,setValidInputs] = useState(false);

    useEffect(()=>{
        if(time==null || rate==null || invested==null || time <= 0 || time > 100 || rate <= 0 || rate > 100 || invested <= 0 || invested > 1000000) {
            setValidInputs(false);
        } else {
            setValidInputs(true);
        }
    },[time,invested,rate])

    return (
    <Box
    component="form"
    sx={{
        'border': '1px black solid',
        'margin': '10px',
        'padding': '20px',
        'width': 'auto',
        'position': 'relative',
        '& > div': {
            'margin': '10px auto'
        }
    }}
    noValidate
    autoComplete="off"
    > 
        <FormLabel>Inputs</FormLabel>
        <div><TextField 
            error={invested<0 || invested>1000000}
            label="Invested Monthly" 
            variant="outlined" 
            value={invested} 
            onChange={changeInvested}
            helperText={invested<0 || invested>1000000 ? "Amount must be between $1 and $1,000,000." : ""}
            InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
        /></div>
        <div><TextField 
            label="Time Investing" 
            variant="outlined" 
            value={time} 
            onChange={changeTime}
            InputProps={{
                endAdornment: <InputAdornment position="end">Years</InputAdornment>,
              }}
        /></div>
        <div>
            <Tooltip title="The S&P500 has historically returned 10%." placement="right">
            <TextField 
            label="Rate of Return" 
            variant="outlined" 
            value={rate} 
            onChange={changeRate}
            InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
        /></Tooltip></div>
        {validInputs && <div>
            <h1 style={{textAlign: 'center'}}>${String(total).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</h1>
            <p style={{maxWidth:"300px"}}>After investing ${invested} a month for {time} years growing at {rate}% per year, you'll have saved ${String(total).replace(/(.)(?=(\d{3})+$)/g,'$1,')}.</p>
        </div>}
    </Box>);
}