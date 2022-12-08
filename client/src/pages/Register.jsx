import React from 'react'
import { useEffect } from 'react';
import Input from 'antd/lib/input/Input'
import {Form, message} from 'antd';
import '../css/Register.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
  const navigate=useNavigate();

    const onfinish= async(values)=>{

      try{
        await axios.post('http://localhost:8000/api/register',values)
        message.success("Registration Successfull");

      }catch(error){
        message.success("Something went wrong ");

      }
        

    }


    useEffect(() => {
      if (localStorage.getItem("expensetrackeruser")) {
        navigate("/");
      }
    }, []);



    return (
        <div className="register">
      {/* {loading && <Spinner />} */}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onfinish} >
            <h1>REGISTER</h1>
           
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered , Click Here To Login</Link>
              <button className="secondary" type="submit">
                REGISTER
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    )
}

export default Register
