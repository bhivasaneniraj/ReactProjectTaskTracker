import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Style.css'

function EmployeBTN() {


  const [val, setval] = useState([])
  const [Serr, setSerr] = useState('none')
  const [omkar, setomkar] = useState()
  const [EmtyInput, setEmtyInput] = useState('none')
  const [demo, setdemo] = useState([])
  const [GoHome, setGoHome] = useState('none')


  const handleAdd = () => {
    const abc = [...val, []]
    setval(abc)
  }


  const handelChange = (onChangeValue, i) => {
    var inputData = [...val]
    inputData[i] = onChangeValue.target.value;
    setval(inputData)
    setdemo(inputData)
  }




  const handleDelete = (i) => {
    const deleteVal = [...val]
    deleteVal.splice(i, 1)
    setval(deleteVal)
  }

  var date = new Date().getDate()
  var month = new Date().getMonth() + 1
  var year = new Date().getFullYear()

  var FullDate = `${date}/${month}/${year}`




  const sunmit = () => {
    if (demo == '') {
      setSerr('block')
    }

    var a = []
    for (let i = 0; i < val.length; i++) {
      if (val[i].length === 0) {
        a.push(i + 1)
        setEmtyInput('block')
      }
    }

    setomkar(a.toString())



    
     if (a == 0 && demo != '') {
      console.log(val);
      console.log(FullDate);
      setGoHome('block')
    }
  }

  const navigate = useNavigate();
  


  return (
    <>
      <div className="employeBTN">

        <div className="Show_err" style={{ display: Serr }}>
          <h3>Error</h3>
          <p>Please  Fill  The Task Details</p>
          <button onClick={() => setSerr('none')}> OK </button>
        </div>

        {/* <div className="Show_err" style={{ display: EmtyInput }}>
          <h3>Error</h3>
          <p> Please delete {omkar}  number text box </p>
          <button onClick={() => setEmtyInput('none')}> OK </button>
        </div> */}

        <div className="empoly">
          <div className="date">
            <span> Date: {FullDate} </span>
          </div>'
          <div className="welcom_page">
            {/* <h3> Welcome Niraj </h3> */}
          </div>
          <div className="EmployTask">
            <label> Add Task- </label>
            <div className="putTask">
              <button onClick={() => handleAdd()}> Add Task + </button>
              <div className="taskInput">
                {
                  val.map((data, i) => {
                    return (
                      <div className='allTaksInputs' key={i}>
                        <p> {i + 1}: </p>
                        <input value={data} type="text" placeholder='Enter Task' onChange={e => handelChange(e, i)} />
                        <button onClick={() => handleDelete(i)}> delete </button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="Em_Btn">
            <button className='Em-Btn1' onClick={sunmit}  > Submit Task  <i class="fa-solid fa-arrow-right-long arrowI2"></i> </button>
          </div>
        </div>
      </div>
      <div className="After_Submit" style={{ display: GoHome }}>
        <div className="employe_Submit_box">
          <div className="After_Submit_box">
            <h1> You Successfully Added  <br /> The Task </h1>
            <button onClick={() => navigate('/')}> OK </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeBTN