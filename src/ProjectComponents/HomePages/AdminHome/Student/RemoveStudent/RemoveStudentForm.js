import React, {useState} from 'react'
import axios from 'axios'

const RemoveStudentForm = () => {
  const [user, setUser] = useState({
    StudentId: ""
  });
 
  const { StudentId } = user;
   
  const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
    console.log(JSON.stringify(user))
  };

  const onSubmit = e => {
    e.preventDefault();
    axios({
      url: 'http://localhost:3001/removeStudent',
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
            <td></td>
            <td className='inputs'><input type="submit" value="Remove" onClick={e => onSubmit(e)}/></td>
          </tr>
        </table>
    </div>
  )
}

export default RemoveStudentForm