import React, {useState} from "react";
import {validateEmail} from '../../utils/validateEmail.js'

function Contact(){
  const[formState, setFormState] = useState({name:'', email:'', message:''})
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  

  function handleSubmit(e){
    e.preventDefault();
    if(!errorMessage){
      console.log(formState)
    }
  }

  function handleChange(e){
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if(!isValid){
        setErrorMessage('Your email is invalid.');
      }else{
        setErrorMessage('');
        setFormState({...formState, [e.target.name]: e.target.value })
      }  
    }else{
      if(!e.target.value.length){
        console.log(e.target.name)
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
        setFormState({...formState, [e.target.name]: e.target.value })
      }
    }
  }

  return (
    <section className="contact-cont">
            <article className="contact-info">
                <article className="contact-link">
                    <img src={require("../../assets/email_icon.png").default} alt="email"/>
                    <div>
                        <h4>
                            <strong>Email:</strong> <a href="mailto:allenharborth9835@gmail.com">allenharborth9835@gmail.com</a>
                        </h4>
                        <p>
                            this is the fastest way to get a hold of me. Feel free to send me an email to get in contact!
                        </p>
                    </div>
                </article>
                <article className="contact-link">
                    <img src={require("../../assets/25231.png").default} alt="github"/>
                    <div>
                    <h4>
                        <strong>Github:</strong> <a href="https://github.com/allenharborth9835">allenharborth9835</a>
                    </h4>
                    <p>
                        this is where I store all of my Repo on projects. check it out from time to time to see what I am currently working on!
                    </p>
                    </div>
                </article>
                <article className="contact-link">
                    <img src={require("../../assets/linkedin.jpg").default} alt="linkedin"/>
                    <div>
                    <h4>
                        <strong>LinkedIn:</strong> <a href="www.linkedin.com/in/allen-harborth">www.linkedin.com/in/allen-harborth</a>
                    </h4>
                    <p>
                        here is where you will see all of my career progression. check this out to see all of my accomplishments! 
                    </p>
                    </div>
                </article>
            </article>
            <article className="contact-me">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">your name/business</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                    <br/>
                    <label htmlFor="email">your email</label>
                    <br/>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                    <br/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange}/>
                    <button type="Submit">Submit</button>
                    {errorMessage &&(
                      <div>
                        <p className="whiteText">{errorMessage}</p>
                      </div>
                    )}
                </form>
            </article>
        </section>
  );
}

export default Contact;