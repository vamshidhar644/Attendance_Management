import React from 'react'
import './PostAttendance.css'

class PostAttendance extends React.Component { 
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
      this.setState({
        list:data.data
      })
    })
  }

  render() {
    let tb_data = this.state.list.map((item) => {
      var name = 1;
      return (
        <tr key={item.StudentId}>
          <td>{item.StudentId}</td>
          <td>{item.Firstname + " "+item.Lastname}</td> 
          <td className="attend-col"><input type="checkbox" className={name} onClick={showChecked}/></td>
        </tr>
      )
      })

      function showChecked(){
        document.getElementById("missed-col").textContent = document.querySelectorAll("input:checked").length;
      }
      document.querySelectorAll("input[name='name']").forEach(i=>{
      i.onclick = function(){
        showChecked();

      }
      });

  return (
    <div className='att-container'>
      <div className='contain-1'>
        <h5>Set today date here</h5>
        <input type="date" className='todaydate'/><br/><br/>
        <h5>Select the class</h5>
        <select id='class'>
          <option value="space"></option>
          <option value="CSE3002">CSE3002</option>
        </select>
      </div>
      <div>
      <table className='attnd-table'>
      <thead>
        <tr>
          <th className='attnd-table stu-id'>Student Id</th>
          <th class="attnd-table name-col">Student Name</th>
          <th className='attnd-table head'>Check if present</th>
        </tr>
      </thead>
      <tbody>
        {tb_data}
        <tr>      
          <td colSpan={2} class="missed-col">Students Attended</td>    
          <td className="missed-col" id="missed-col">0</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  )
  
}
}
export default PostAttendance