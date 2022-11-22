import React, {useState} from 'react'
import axios from 'axios'

const RemoveFacultyForm = () => {
  const [user, setUser] = useState({
    FacultyId: ""
  });
 
  const { FacultyId } = user;
   
  const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
    console.log(JSON.stringify(user))
  };

  const onSubmit = e => {
    e.preventDefault();
    axios({
      url: 'http://localhost:3001/removeFaculty',
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
            <td></td>
            <td className='inputs'><input type="submit" value="Remove" onClick={e => onSubmit(e)}/></td>
          </tr>
          </tbody>
        </table>
        </div>
  )
}

export default RemoveFacultyForm