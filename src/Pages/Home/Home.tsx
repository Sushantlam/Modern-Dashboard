import React from 'react'
import  './Home.scss'
import Top from '../../Component/TopBox/Top'
import Chart from '../../Component/ChartBox/Chart'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import BarCharts from '../../Component/Barcharts/BarCharts'
import Piechart from '../../Component/Piechart/Piechart'
import Flowchart from '../../Component/flowChart/Flowchart'
const Home = () => {
  return (
    <div className='home'>
        <div className="box box1"><Top /></div>
        <div className="box box2"><Chart {...chartBoxUser}/></div>
        <div className="box box3"><Chart {...chartBoxProduct}/></div>
        <div className="box box4"><Piechart/></div>
        <div className="box box5"><Chart {...chartBoxRevenue}/></div>
        <div className="box box6"><Chart {...chartBoxConversion}/></div>
        <div className="box box7"><Flowchart/></div>
        <div className="box box8"><BarCharts {...barChartBoxVisit}/></div>
        <div className="box box9"><BarCharts {...barChartBoxRevenue}/></div>

    </div>
  )
}

export default Home