import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './Style.css'

function TaskDatail() {

  const TodayDate = new Date()

  const [data, setdata] = useState([
    {
      id: 1,
      Name: 'Niraj Bhivasane',
      task: ['Today i m Creating A Frontend Project With Reactjs ,Task2'],
      Date: '27/8/2022'
    },
    {
      id: 2,
      Name: 'Shubham Rai',
      task: ['Today i Creating Api  '],
      Date: '27/8/2022'
    },
    {
      id: 3,
      Name: 'Jayendra Yadav',
      task: ['Today I creating Database Table in OracleDB'],
      Date: '27/8/2022'
    },
    {
      id: 4,
      Name: 'SuryPraksah Verma',
      task: ['Today Im Creating City Api',],
      Date: '27/8/2022'
    },
    {
      id: 5,
      Name: 'Vaibhav Jadhav',
      task: ['Creating Api Code Validation For Complaint Module'],
      Date: '27/8/2022'
    },
    {
      id: 6,
      Name: 'Shubham Sawant',
      task: ['Creating Api Code Validation For Complaint Module'],
      Date: '27/8/2022'
    },

  ])
  const [selectedDate, setselectedDate] = useState(TodayDate)

 
  return (
    <>




      <div className="TakeDetail">
        <div className="tables">

          <div className="taskdetails_date">
            <label> Pick Date </label>
            <DatePicker
              selected={selectedDate}
              onChange={date => setselectedDate(date)}
              dateFormat='dd/MM/yyyy'
              showYearDropdown
              scrollableYearDropdown
            >

            </DatePicker>
          </div>

          <div className="Task_detail_table">
            <table>
              <tr>
                <th> No. </th>
                <th> Name </th>
                <th> Task </th>
                <th> Date </th>
              </tr>
              {
                data.map((val) => {
                  return <>
                    <tbody>
                      <tr>
                        <td> {val.id} </td>
                        <td> {val.Name}  </td>
                        <td className='zero' style={{width:'60%'}} >
                          {
                            val.task.map((elem, i) => {
                              return <>
                                <div className="Each_task">
                                  <h6> {i + 1}: {elem}  </h6>
                                </div>
                              </>
                            })
                          }
                        </td>
                        <td> {val.Date}  </td>
                      </tr>
                    </tbody>
                  </>
                })
              }
            </table>
          </div>
        </div>
      </div >
    </>
  )
}

export default TaskDatail