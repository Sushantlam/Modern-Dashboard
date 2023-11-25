
import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import  './Chart.scss'

type Props= {
   title:string,
   number:number|string,
   percentage:number,
   color:string,
   dataKey:string,
   chartData: object[]
}
const Chart = (props: Props) => {
   
  return (
    <div className='mainChart'> 
        <div className='dataInfo'>
            <h4>{props.title}</h4>
            <h3>{props.number}</h3>
            <span style={{color:props.color}}>View all</span>
        </div>
        <div className='chartInfo'>
            <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
    <LineChart  data={props.chartData} >
        <Tooltip 
         contentStyle={{ background: "transparent", border: "none" }}
         labelStyle={{ display: "none" }}
         position={{ x: 30, y: 80 }}/>
      <Line type="monotone"  dot={false}  dataKey={props.dataKey}  
      stroke={props.color} strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
            </div>
            <div className='text'>
            <span className='percentage' style={{color: props.percentage<0 ? "tomato":  "limegreen"}}>{props.percentage}%</span>
  <h3>this month</h3>
            </div>
       
  
        </div>
        
  </div>
  )
}

export default Chart