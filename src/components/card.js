import styled from "styled-components";
import React from 'react'
// import { Link } from "react-router-dom";

// const ButtonMailto = ({ mailto, label }) => {
//     return (
//         <Link
//             to='#'
//             onClick={(e) => {
//                 window.location.href = mailto;
//                 e.preventDefault();
//             }}
//         >
//             {label}
//         </Link>
//     );
// };

// const messageError = document.getElementById('message-error');

// function validateMessage(){
//     let message = document.getElementById('contact-message')
// }

function Card() {
  return (
    <CardStyled>
              <div class="container">
    <form>
      <i class="fas fa-paper-plane"></i>

      <div class="input-group">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" required>
        </input>
      </div>

      <div class="input-group">
        <label>Email Id</label>
        <input type="email" placeholder="Enter Email" required></input>
        <span id="email-error"></span>
      </div>   

      <div class="input-group">
        <label>Your Message</label>
        <textarea rows="5" placeholder="Enter your message"  id="contact-message" onkeyup="validateMessage()" required></textarea>
        <span id="message-error"></span>
      </div>

    <button>Submit</button>
    
   
  </form>
  </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`

.container{
    width: 100%;
    height: 100vh;
    background: #141a34;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container form{
    width: 90%;
    max-width: 500px;
    padding: 50px 30px 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    position: relative;  
}
.input-group{
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    position: relative;
}
.input-group label{
    flex-basis: 28%;
}
.input-group input, .input-group textarea{
    flex-basis: 68%;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 10px 0;
    border-bottom: 1px solid #999;
    color: #333;
    font-size: 16px;
}
::placeholder{
    font-size: 14px;
}

form button{
    background: #141a34;
    color: #fff;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    padding: 10px 40px;
    outline: 0;
    cursor: pointer;
    display: block;
    margin: 30px auto 10px;
}
.input-group span{
    position: absolute;
    bottom: 12px;
    right: 17px;
    font-size:14px;
    color: red;
}

//previous codes
/* .header{
    
    font-size: 2.5rem;
    margin-bottom: 10px;
    margin-top: 10px;
    color: white;
}
input{
    width:350px;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px 10px;
    font-size: 20px;
  

}
textarea{
    width:350px;
    height: 200px;
    border-radius: 10px;
    padding: 10px 10px;
    font-size: 20px;
}
button{
    width: 130px;
    height: 40px;
    border-radius: 30px;
    font-size: 20px;
    margin: 10px auto 5px 110px;
    font-weight: 800;
    outline: none;
    cursor:pointer;
} */
`;

export default Card

