import React, {useState} from 'react'
import axios from 'axios'

const UpdateFacultyForm = () => {
  const [user, setUser] = useState({
    FacultyId: "",
    Username: "",
    Password: "",
    Firstname: "",
    Lastname: ""
  });
 
  const { FacultyId, Username, Password, Firstname, Lastname} = user;
   
  const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
    console.log(JSON.stringify(user))
  };

  const onSubmit = e => {
    e.preventDefault();
    axios({
      url: 'http://localhost:3001/updateFaculty',
      method: 'POST',
      data: user
    }).then((response) => {
      console.log(response.data.user);
    });
  };

  return (
    <div className='faculty-table'>
        <table>
          <tbody>
          <tr>
            <td className='labels'>Faculty Id:</td>
            <td className='inputs'>
              <input type="text"
              name='FacultyId'
              value={FacultyId}
              onChange={(e) => onInputChange(e)}
              /></td>
          </tr>
          <tr>
            <td className='labels'>Username:</td>
            <td className='inputs'>
              <input type="text"
              name='Username'
              value={Username}
              onChange={(e) => onInputChange(e)}
              /></td>
          </tr>
          <tr>
            <td className='labels'>Password:</td>
            <td className='inputs'>
              <input type="text"
              name='Password'
              value={Password}
              onChange={(e) => onInputChange(e)}
              /></td>
          </tr>
          <tr>
            <td className='labels'>Firstname:</td>
            <td className='inputs'>
              <input type="text"
              name='Firstname'
              value={Firstname}
              onChange={(e) => onInputChange(e)}
              /></td>
          </tr>
          <tr>
            <td className='labels'>Lastname:</td>
            <td className='inputs'>
              <input type="text"
              name='Lastname'
              value={Lastname}
              onChange={(e) => onInputChange(e)}
              /></td>
          </tr>
          <tr>
            <td></td>
            <td className='inputs'><input type="submit" value="Update" onClick={e => onSubmit(e)}/></td>
          </tr>
          </tbody>
        </table>
        </div>
  )
}

export default UpdateFacultyForm