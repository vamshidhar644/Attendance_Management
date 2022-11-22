import React, {useState} from 'react'
import axios from 'axios'

const AddStudentForm = () =>{

  const [user, setUser] = useState({
    StudentId: "",
    Username: "",
    Password: "",
    Firstname: "",
    Lastname: ""
  });
 
  const { StudentId, Username, Password, Firstname, Lastname} = user;
   
  const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
    console.log(JSON.stringify(user))
  };

  const onSubmit = e => {
    e.preventDefault();
    axios({
      url: 'http://localhost:3001/addStudent',
      method: 'POST',
      data: user
    }).then((response) => {
      console.log(response.data.user);
    });
  };


  return (
    <div className='Student-table'>
        <table>
          <tr>
            <td className='labels'>Student Id:</td>
            <td className='inputs'><input type="text" 
              name='StudentId'
              value={StudentId}
              onChange={(e) => onInputChange(e)}/></td>
          </tr>
          <tr>
            <td className='labels'>Username:</td>
            <td className='inputs'><input type="text" 
              name='Username'
              value={Username}
              onChange={(e) => onInputChange(e)}/></td>
          </tr>
          <tr>
            <td className='labels'>Password:</td>
            <td className='inputs'><input type="text" 
              name='Password'
              value={Password}
              onChange={(e) => onInputChange(e)}/></td>
          </tr>
          <tr>
            <td className='labels'>Firstname:</td>
            <td className='inputs'><input type="text"
              name='Firstname'
              value={Firstname}
              onChange={(e) => onInputChange(e)}/></td>
          </tr>
          <tr>
            <td className='labels'>Lastname:</td>
            <td className='inputs'><input type="text"
              name='Lastname'
              value={Lastname}
              onChange={(e) => onInputChange(e)}/></td>
          </tr>
          <tr>
            <td></td>
            <td className='inputs'><input type="submit" value="Add" onClick={e => onSubmit(e)}/></td>
          </tr>
        </table>
        </div>
  )
}

export default AddStudentForm