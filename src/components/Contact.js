// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ data }) => {

    const { name, phone, email, photo } = data;

    return (
        <>
            <div className="box-content">
                <div className="image">
                    <img src={photo} alt={name} />
                </div>
                <div className="description">
                    <div className='wrap-description'>
                        <p> <strong> {name} </strong> </p>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;