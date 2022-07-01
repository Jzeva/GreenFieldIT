import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const ContactFrom = () => {
    const { register, errors } = useForm({
        mode: "onBlur"
    });
    const sendEmail=(e) =>{
        e.preventDefault();
    
        emailjs.sendForm('service_q75tv8p', 'template_5acqkj4', e.target, 'user_rZ6NNM9Kqsx9IgWFaj6rf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    
          e.target.reset();
          alert("Thank you for contacting us and we will reply you soon!")
      }
    return (
        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
            {/* <form action="https://getform.io/f/a17a2715-d7ee-4ac4-8fcb-12f1eed43b2c" method="POST"> */}
            <form onSubmit={sendEmail}>
                <div className="row mb-n6">
                    <div className="col-md-6 col-12 mb-6">
                        <input type="text" placeholder="Your Name *" name="name" ref={register({ required: 'Name is required' })} />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className="col-md-6 col-12 mb-6">
                        <input type="email" placeholder="Email *" name="email" ref={register({
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address"
                            }
                        })} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="col-md-12 col-12 mb-6">
                        <input type="text" placeholder="Subject *" name="subject" ref={register({ required: 'Subject is required' })} />
                        {errors.subject && <p>{errors.subject.message}</p>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea name="message" placeholder="Message" ref={register({ required: 'Message is required' })}></textarea>
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                    <div className="col-12 text-center mb-6">
                        <button type="submit" className="btn btn-primary btn-hover-secondary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactFrom;
