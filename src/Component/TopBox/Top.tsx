import React from 'react'
import  './Top.scss'
import { topDealUsers } from '../../data'
const Top = () => {
  return (
    <div className='top'>
        <h2>Top Deals</h2>
        <div className="list">
        {topDealUsers.map((element)=>(
            <div className='topDeal' key={element.id}>
                
                <div className='imgUserName'>
                <img src={element.img} alt="" />
                <div className='inside'>
                <span>{element.username}</span>
                <span>{element.email}</span>
                </div>
                
                </div>
               <h2>{element.amount}</h2>

            </div>
        ))
          
        }
</div>
    </div>
  )
}

export default Top