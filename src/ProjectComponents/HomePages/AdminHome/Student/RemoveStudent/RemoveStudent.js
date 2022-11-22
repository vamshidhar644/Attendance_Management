import React from 'react'
import RemoveStudentForm from './RemoveStudentForm'

class RemoveStudent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
    this.callAPI = this.callAPI.bind(this)
    this.callAPI();
  }
  callAPI(){
    fetch("http://localhost:3001/loginStudent/").then(
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
      <tr key={item.StudentId}>
        <td>{item.StudentId}</td>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.Firstname}</td>
        <td>{item.Lastname}</td>
      </tr>
    )
    })
  return (
    <div className='AddStudent-main-container'>
      <div className='Student-work'>
        <h4 className='header'>| Remove Student |</h4>
        <RemoveStudentForm/>
      </div>
      <div className='Student-view'>
        <div className='table table-striped'>
            <table>
              <thead>
                <th>Student Id</th>
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
export default RemoveStudent