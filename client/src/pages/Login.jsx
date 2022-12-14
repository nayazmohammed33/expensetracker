import React from 'react'
import Input from 'antd/lib/input/Input'
import { Form,message } from 'antd';
import '../css/Register.css'
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const navigate=useNavigate();
    const onFinish = async (values) => {
        try {
            const response = await axios.post("http://localhost:8000/api/login", values)
            localStorage.setItem("expensetrackeruser", JSON.stringify({ ...response.data, password: "" }));
            message.success("Login successful");
            navigate("/");


        } catch (error) {
            message.error("Login failed");

        }

    }


    useEffect(() => {
        if (localStorage.getItem("expensetrackeruser")) {
          navigate("/");
        }
      }, []);


    return (
        <div>

            <div className="register">
                {/* {loading && <Spinner />} */}
                <div className="row justify-content-center align-items-center w-100 h-100">
                    <div className="col-md-4">
                        <Form layout="vertical" onFinish={onFinish}>
                            <h1>Login</h1>


                            <Form.Item label="Email" name="email">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Password" name="password">
                                <Input type="password" />
                            </Form.Item>

                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/register">
                                    Not Registered Yet , Click Here To Register
                                </Link>
                                <button className="secondary" type="submit">
                                    LOGIN
                                </button>
                            </div>
                        </Form>
                    </div>
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
                </div>
            </div>


        </div>
    )
}

export default Login
