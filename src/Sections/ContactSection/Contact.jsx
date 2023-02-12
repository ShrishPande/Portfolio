import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { UilUser } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [done,setDone]=useState(false);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4g1heid', 'template_74zg04t', form.current, 'EIGBGZRUCkjeq_1FD')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className={styles.contact} id="Contact">
      <div className={styles.title}>
        <h2>Contact me</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div>
            <h3>Get in Touch</h3>
            <p>
              Contact me on the email provided below or You can fill the contact
              form , If you want to contact me for work or information or if you
              would like to give me some suggestion, Contact me through the
              given means.
            </p>
          </div>
          <div>
            <div className={styles.options}>
              <UilUser />
              <div>
                <p>
                  {" "}
                  <span>Name</span>
                  <br />
                  Shrish Pandey
                </p>
              </div>
            </div>
            <div className={styles.options}>
              <UilLocationPoint />
              <div>
                <p>
                  {" "}
                  <span>Address</span>
                  <br />
                  GLA University, Mathura
                </p>
              </div>
            </div>
            <div className={styles.options}>
              <UilEnvelope />
              <div>
                <p>
                  {" "}
                  <span>Email</span>
                  <br />
                  clashwithshrishpandey@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <h3>Message me</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div class={styles.fields}>
              <div className={`${styles.field} ${styles.name}`}>
                <input type="text" placeholder="Name" name="from_name" required />
              </div>
              <div className={`${styles.field} ${styles.email}`}>
                <input type="email" placeholder="Email" name="from_email" required />
              </div>
            </div>
            <div className={styles.field}>
              <input type="text" placeholder="Subject" name="from_subject" required />
            </div>
            <div class={`${styles.field} ${styles.textArea}`}>
              <textarea
              name="message"
                cols="30"
                rows="10"
                placeholder="Message.."
                required
              ></textarea>
            </div>
            
              <button type="submit">Send message</button>

          </form>
          {done && <span style={{color:"white"}}>Thanks for contacting me!</span>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
