import React from 'react'

import "./Menu.scss";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const menu = [
  {
    id: 1,
    title: 'main',
    listItems: [
      {
        id: 1,
        title: 'Homepage',
        url: '/',
        icon: <FaHome />,
      },
      {
        id: 2,
        title: 'User',
        url: '/user',
        icon: <FaHome />,
      },
    ],
  },

  
  
];
const Sidebar = () => {
  return (
    <div className='sideBarMain'>
      {menu.map((e)=> (
        
        <div className='leftContent' key={e.id}>
           <div>{e.title}</div>
           {e?.listItems.map((listItem)=>(
            <Link to={listItem.url} className="listItem" key={listItem.id}>
          <div className='' >{listItem.icon}</div>
            <span className="listItemTitle">{listItem.title}</span>
          </Link>
           ))}
        </div>
      ))}
    </div>
  )
}

export default Sidebar