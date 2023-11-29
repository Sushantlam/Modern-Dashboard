import React, { useEffect, useState } from 'react'
import { userRows } from '../../data'
import "./User.scss";
import { log } from 'console';
import Adduser from '../../Component/AddUser/Adduser';



type Props ={
  id:number,
  img:string,
  lastname:string,
  email:string,
  phone:number,

}
const User = () => {
  const [openModel, setOpenModel] = useState<boolean>(false)
  const [open,setOpen]= useState<boolean>(false)
  const [isCheck, setIsCheck] = useState<any[]>([]);
  const [user,setUser]= useState<any[]>(userRows);
  const [order,setOrder]= useState<string>("ASC");
 


  // useEffect(() => {
  //   setUsers(userRows);
  // }, []);

 

 
  
  const handleChange = (e:any) => {
     const {name, checked, value}= e.target
     console.log("selectAll", value);
     
    
      
      setIsCheck(checked?[...isCheck,parseInt(value)]: isCheck.filter((item:any)=>item!==parseInt(value)))
    
  }

  const checkAll=(e:any)=>{
    if(e.target.name="selectAll"){
      setIsCheck(e.target.checked ? userRows.map((click:any)=> click.id):[])
    }
  }
// console.log(isCheck);

const handleDelete=()=>{
  // console.log(user);
  const unCheck = user.filter((item:any)=>!isCheck.includes(item.id))
  setUser(unCheck)
  
}

//individual delete 
const individualDelete=(id:any)=>{
  // console.log(user);
  const filteredData = user.filter((item:any)=> item.id!==id)
  setUser(filteredData)
  
  
}
//searching function
const searchChange = (e: any) => {
  const searchTerm = e.target.value.toLowerCase();

  // If the search term is empty, reset to the original userRows
  if (searchTerm === "") {
    setUser(userRows);
  } else {
    // Use filter to find items that match the search term
    const filteredUsers = userRows.filter(
      (item: any) => item.firstName.toLowerCase().includes(searchTerm)
    );
    setUser(filteredUsers);
  }
};

//sorting element
const sorting=(col:string)=>{
  console.log(col);
  if(order==="ASC"){
    const sorted=[...user].sort((a,b)=>
   
    
    a[col].toLowerCase() > b[col].toLowerCase()? 1:-1)
    setUser(sorted)

    console.log(sorted);
setOrder("DSC")
    
  }
  if(order==="DSC"){
    const sorted=[...user].sort((a,b)=>
   
    
    a[col].toLowerCase() <b[col].toLowerCase()? 1:-1)
    setUser(sorted)

    console.log(sorted);
setOrder("ASC")
  }
  

}

//addUser
const addUser=()=>{
setOpen(!open)
}
 

  // console.log(isChecked);
  return (
    <div style={{position:'relative', height:'100%' }}>
      <div className='btnSearch'>
        <div className='btnDelete'>
       <button onClick={handleDelete}>Delete All</button>
      <button onClick={addUser} >Add New User</button>
     
      </div>
      <input type="text" onChange={searchChange}/>
      </div>
    <table className="custom-table" style={{ minWidth: 1000 }}>
     
      <thead>
        <tr>
          <th>
            <input type="checkbox" name="selectAll" style={{ width: 20 }}  checked={isCheck.length === userRows.length}   onChange={checkAll}  />
          </th>
          <th>Id</th>
          <th>Image</th>
          <th onClick={()=>sorting("firstName")}>First-Name</th>
          <th onClick={()=>sorting("lastName")}>Last-Name</th>
          <th onClick={()=>sorting("email")}>Email</th>
          <th>Phone</th>
          <th>Action</th>
         
        </tr>

      </thead>
     
      <tbody>
        {user.map((e:any) => (
          <tr key={e.id}>
            <td>
              <input type="checkbox" value={e.id}  checked={isCheck.includes(e.id)||false} name={e.id.toString()} onChange={handleChange} style={{ width: 20 }} />
            </td>
            <td>{e.id}</td>
            <td><img className='image' src={e.img||"https://www.medianama.com/wp-content/uploads/2018/04/Facebook-shadow.jpg.jpg" } alt="" /></td>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.email}</td>
            <td>{e.phone}</td>
            <td className='action'><button>Edit</button><button onClick={()=>individualDelete(e.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    {open && <Adduser setUser={setUser} setOpen={setOpen}/>}
  </div>
  )
}

export default User