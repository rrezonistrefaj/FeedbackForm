import styled from "styled-components";
import React, { useState, useLayoutEffect } from 'react'




function Card() {
    const initialValues = { username: "", email: "", feedback: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [setIsSubmit] = useState(false);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

  useLayoutEffect(() => {
    console.log(formErrors);
    setFormErrors(validate(formValues));
  }, [formValues]);
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Full Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.feedback) {
      errors.feedback = "Feedback is required!";
    } else if (values.feedback.length < 10) {
      errors.feedback = "Feedback must be more than 10 characters";
    }
    return errors;
  };

  const url = new URLSearchParams(); url.append('subject', `from ${formValues.username}`);

  url.append('bcc', formValues.email);
  url.append('body', `${formValues.feedback} \n from ${formValues.email}`);

  const mailTo = `mailto:xoni-pr@hotmail.com`;

  const href = `${mailTo}?${url.toString()}`;
  return (
    <CardStyled>
      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>
            <input type="text" name="username" placeholder="Enter your name" value={formValues.username} onChange={handleChange}/>
           
          </div>
          <p>{formErrors.username}</p>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter Email" value={formValues.email} onChange={handleChange}/>

          </div>
          <p>{formErrors.email}</p>
          <div className="input-group">
            <label>Your Message</label>
            <textarea name="feedback"
              rows="5"
              placeholder="Enter your message"
              value={formValues.feedback}
              onChange={handleChange}>

            </textarea>
          </div>
          <p>{formErrors.feedback}</p>

          <a className='btn' href={href} disabled={Object.values(validate(formValues)).length}>Submit</a>   



        </form>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
p{
    color: red;
    display: flex;
    align-items: right;
}
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

.btn{
    background: #141a34;
align-items:center;
    color: #fff;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    padding: 10px 40px;
    outline: 0;
    cursor: pointer;
    display: block;
    margin: 30px 150px 10px 150px;
}
.input-group span{
    position: absolute;
    bottom: 12px;
    right: 17px;
    font-size:14px;
    color: red;
}

`;

export default Card