import React from 'react'
import "../css/Defaultlayout.css";
import { Link, useNavigate } from "react-router-dom";


function Defaultlayout(props) {
    const user = JSON.parse(localStorage.getItem("expensetrackeruser"));
  const navigate = useNavigate()
    return (
        
        <div className='layout'>
            <div className="header  d-flex justify-content-between align-items-center "> */ /*
                <div>
                    <h1 className="logo">Expense Tracker</h1>
                </div>
                <div className='username'>
                <h1>Username</h1>
                </div>


            </div>

            <div className="content">
                {
                    props.children
                }

            </div>

        </div>
    )
}

export default Defaultlayout
