import React from "react";
import { Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function Response({growth}) {
    return <Box
    component="div"
    sx={{
        'border': '1px black solid',
        'margin': '10px',
        'padding': '20px',
        'min-width': '70%',
        'float': 'left',
        '& > div': {
            'margin': '10px auto'
        }
    }}
    >   
        
        <Bar
            data={{
              labels: growth.slice(1).map((e,i)=>i+1+" years"),
              datasets: [
                  {
                      label: "$ Invested",
                      data: growth.slice(1),
                  }
              ]  
            }}
        ></Bar>
    </Box>;
}