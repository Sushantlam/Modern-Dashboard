import React,{useState} from 'react';
import './Add.scss';
import { ImCross } from 'react-icons/im';
import { userRows } from '../../data';

interface AddUserProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<UserData[]>>; 
}

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    phone:string;
   // Assuming 'image' is a string, you can adjust the type accordingly
  }
const AddUser: React.FC<AddUserProps> = ({ setOpen, setUser }) => {
  
    const [data,setData]= useState<UserData>({
        firstName:"",
        lastName: "",
        email: "",
        phone: "",
       })
        
  const handleUser=() =>{
  console.log(data);

  setUser(prevUsers => [
    ...prevUsers,
    {
      ...data,
      id: prevUsers.length + 1,
    },
  ]);
  setOpen(false)
  
  }
  function handleChange(e:any){
    const {id, value}= e.target

    setData((prevData) => ({
        ...prevData,
        [id]: value,
      }));

  }
  console.log(data);
  
    return (
    <div className='add'>
      <div className='modal'>
        <ImCross
          className="icon"
          onClick={() => setOpen(false)}
        />
        <div className='input'>
            <input type="text" value={data.firstName} onChange={handleChange} id="firstName" placeholder='Enter your FirstName' required/>
            <input type="text" value={data.lastName} onChange={handleChange} id="lastName" placeholder='Enter your LastName'required/>
            <input type="email" value={data.email} onChange={handleChange}id="email" placeholder='Enter your Email'required/>
            <input  type="tel" onChange={handleChange} value={data.phone}  placeholder="Enter your phone number " id="phone" required/>
            {/* <input type="file" onChange={handleChange} placeholder='img' id="image" /> */}
            <button onClick={handleUser}>Add New</button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
