import React from 'react'
import './AddFaculty.css'
import AddFacultyForm from './AddFacultyForm'

class AddFaculty extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
    this.callAPI = this.callAPI.bind(this)
    this.callAPI();
  }
  callAPI(){
    fetch("http://localhost:3001/loginFaculty/").then(
      (response) => response.json()
    ).then((data) => {
      console.log(data)
      this.setState({
        list:data.data
      })
    })
  }
  render() {
  let tb_data = this.state.list.map((item) => {
    return (
      <tr key={item.Id}>
        <td>{item.FacultyId}</td>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.Firstname}</td>
        <td>{item.Lastname}</td>
      </tr>
    )
    })
  return (
    <div className='AddFaculty-main-container'>
      <div className='admin-work'>
        <h4 className='header'>| Add new Faculty |</h4>
        <AddFacultyForm/>
      </div>
      <div className='admin-view'>
        <div className='table table-striped'>
          <table>
            <thead>
              <th>Faculty Id</th>
              <th>Username</th>
              <th>Password</th>
              <th>Firstname</th>
              <th>Lastname</th>
            </thead>
            <tbody>
              {tb_data}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
}
export default AddFaculty