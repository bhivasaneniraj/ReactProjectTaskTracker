import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import axios from 'axios';

function EmployeBTN() {
  const [Serr, setSerr] = useState("none");
  const [GoHome, setGoHome] = useState("none");
  const [Data, setData] = useState();

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  var FullDate = `${date}/${month}/${year}`;

//  async function Submittask () {

 

    //    try {
    //     const url = "localhost:8089/user/12345"
    //     const data = { 'taskDetails': 'Hello My Name is Shubham' };
    //     const options = {
    //       method: 'POST',
    //       headers: { 'content-type': 'application/json' } ,
    //       data,
    //       url,
    //     };
    //     const response = await axios(options);
    //      console.log(response);
    //    } catch (error) {
    //      console.error(error);
    //    }
    //  }
    // async function Submittask () {
    // axios.post('https://localhost:8089/user/12345').then(
    //   (res) => {
    //     console.log('Axios:',res);
    //     console.log('Axios data:',res.data);
    //   }).catch((err) => { console.log('Axios Error:', err); })
    // axios.create(
    //   {
    //           baseURL: "https://localhost:8089/user/12345",
    //           withCredentials: false,
    //           headers: {
    //             'Access-Control-Allow-Origin' : '*',
    //             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    //         }
    //     })  
  // }
  async function handleSubmit() {
    const headers = {
      'Authorization': 'Basic TklSQUogQkhJVkFTQU5FOk5JUkFKNjUxMg=='
    }
    try {
    const data = {"taskDetails" : "Hello My Name is rajan"}
    const response = await axios.post('https://localhost:8089/user/12345',data, {headers})
    console.log(response)
    }
    catch(e) {
     console.log(e) 
    }
}
  const sunmit = () => {
    if (Data === undefined || Data === '' ) {
      setSerr("block");
    } else {
      console.log(Data);
      setGoHome("block");
      handleSubmit();
}
};

  const valChange = (e) => {
    setData(e.target.value);
  };

  const navigate = useNavigate();
  
 

  return (
    <>
      <div className="employeBTN">
        <div className="Show_err" style={{ display: Serr }}>
          <h3>Error</h3>
          <p>Please Fill The Task Details</p>
          <button onClick={() => setSerr("none")}> OK </button>
        </div>

        <div className="empoly">
          <div className="date">
            <span> Date: {FullDate} </span>
          </div>
          '<div className="welcom_page">{/* <h3> Welcome Niraj </h3> */}</div>
          <div className="EmployTask">
            <label> Add Task- </label>
            <div className="putTask">
              <textarea
                className="itstextarea"
                cols="30"
                rows="10"
                onChange={valChange}
              />
              
            </div>
          </div>
          <div className="Em_Btn">
            <button className="Em-Btn1" onClick={sunmit} >
              Submit Task <i class="fa-solid fa-arrow-right-long arrowI2"></i>{" "}
            </button>
            
          </div>
        </div>
      </div>
      <div className="After_Submit" style={{ display: GoHome }}>
        <div className="employe_Submit_box">
          <div className="After_Submit_box">
            <h1>
              {" "}
              You Successfully Added <br /> The Task{" "}
            </h1>
            <button onClick={() => navigate("/")}> OK </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeBTN;
