import React from "react";

function Contact(){
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
                <form>
                    <label htmlFor="name">your name/business</label>
                    <input type="text" id="name" placeholder="e.g. Bill Gates (CEO at Windows)"/>
                    <br/>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your message"></textarea>
                    <button type="Submit">Submit</button>
                </form>
            </article>
        </section>
  );
}

export default Contact