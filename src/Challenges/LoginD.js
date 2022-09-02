import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginD(props) {


     const [errPsw, seterrPsw] = useState('none');
     const [err, seterr] = useState('none');

     const navigate = useNavigate();



    //  var emp = 'NirajBhivasane';
    //  var emp = 'JayendraYadav';
    //  var emp = 'ShubhamRai';
    //  var man ='RiddhiMadhu';
  
    //  var empPsw = 'niraj46';
    //  var manPsw = 'riddhi@123';

//     console.log(response);
// } catch (error) {
//   console.error(error);
// }




    async function loginUser() {
        
        try {
          
          const response = await axios.post('http://localhost:8089/login', {
            "userName": props.num,
            "password": props.Password
        });
if(response.data.authorities[0].authority=='ROLE_EMPLOYEE'){
    navigate('/Employe')
}else if(response.data.authorities[0].authority=='ROLE_MANAGER'){
    navigate('/manegar')
}else{
    navigate('/login')
}
        } catch (error) {
            seterrPsw('block')
          console.error(error);
        }
      }

    // const Submit = () => {
    //     props.setnum('')
    //     props.setPassword('')
    //     if (props.num == emp) {
    //         if (props.Password == empPsw) {
    //             navigate('/Employe')
    //         } else {
    //             seterrPsw('block')
    //         }

    //     } else if (props.num == emp) {
    //         seterr('block')
    //     } else if (props.num == man) {
    //         if (props.Password == manPsw) {
    //             navigate('/manegar')
    //         } else {
    //             seterrPsw('block')
    //         }
    //     } else if (props.num !== emp) {
    //         seterr('block')
    //     }
    // }

    const paw = (e) => {
        var P = e.target.value
        props.setPassword(P)
    }


    return (
        <>
            <div className="loginD">
                <div className="loginD_containar">
                    <div className="images">
                        <img src="images/AL_MULLA.png" className='waveC' alt='wave' />
                        {/* <img src="images/bg.svg" className='phoneimg' alt='bg' /> */}
                    </div>
                    <div className="loginD_from">
                        <img src="images/avatar.svg" alt='avatar' />
                        <h2> Task Tracker </h2>
                        <div className="inputBox">
                            <i class="fa-solid fa-user icon"></i>
                            <input type="text" required onChange={props.number} value={props.num || ''} />
                            <div className="underline"></div>
                            <label> Username</label>
                        </div>
                        <div className="inputBox">
                            <i class="fa-solid fa-lock icon"></i>
                            <input type="password" required onChange={paw} value={props.Password || ''} />
                            <div className="underline"></div>
                            <label> Enter Password </label>
                        </div>
                        <div className="err_msg">
                            {/* <h3 style={{ display: err }}>  Please Enter Correct Username</h3> */}
                            <h3 style={{ display: errPsw }}> Please Enter Valid Credential. </h3>
                        </div>
                        <button onClick={loginUser}>  Submit </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginD