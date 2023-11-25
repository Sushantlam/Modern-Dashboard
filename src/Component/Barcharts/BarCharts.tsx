import React from 'react'
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import  './Barcharts.scss'
type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
  };
const BarCharts = (props: Props) => {
    
  return (
    <div  className='barMain'>
        <div className='barHead'>{props.title}</div>
       <div className="barInfo">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer></div></div>

  )
}

export default BarCharts