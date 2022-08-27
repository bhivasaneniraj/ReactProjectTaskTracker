import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Style.css'

function ManegarTask() {



    const [val, setval] = useState([])
    const [Serr, setSerr] = useState('none')
    const [omkar, setomkar] = useState()
    const [EmtyInput, setEmtyInput] = useState('none')
    const [demo, setdemo] = useState([])
    const [GoHome, setGoHome] = useState('none')



    const navigate = useNavigate();



    const handleAdd = () => {
        const abc = [...val, []]
        setval(abc)
    }

    const handelChange = (oonChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = oonChangeValue.target.value;
        setval(inputdata)
        setdemo(inputdata)
    }
    const handleDelete = (i) => {
        const deletval = [...val]
        deletval.splice(i, 1)
        setval(deletval)

    }

    // ---------------------- date


    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()

    var FullDate = `${date}/${month}/${year}`

    // ---------------------- submite BTN






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

        // console.log(demo);

        if (a == 0 && demo != '') {
            console.log(val);
            console.log(FullDate);
            setGoHome('block')
        }
    }

















    return (
        <>
            <div className="ManegarTask">


                <div className="manager_Show_err" style={{ display: Serr }}>
                    <h3>Error</h3>
                    <p> Please Fill The Task Details</p>
                    <button onClick={() => setSerr('none')}> OK </button>
                </div>
                {/* <div className="manager_Show_err" style={{ display: EmtyInput }}>
                    <h3>Error</h3>
                    <p> Please delete {omkar}  number text box </p>
                    <button onClick={() => setEmtyInput('none')}> OK </button>
                </div> */}
                <div className="main_ManegarTask">
                    <div className="manager_date">
                        <span> Date: {FullDate} </span>
                    </div>
                    {/* <h2> Welcome Riddhi </h2> */}
                    <div className="managerTask">
                        <label> Add Task- </label>
                        <div className="manager_putTask">
                            <button onClick={() => handleAdd()} className='managerAddTask' > Add Task + </button>
                            <div className="manager_taskInput">
                                {
                                    val.map((data, i) => {
                                        return (
                                            <div className='manager_allTaksInputs' key={i}>
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
                    <div className="Em_Btn" id='niraj'>
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

export default ManegarTask