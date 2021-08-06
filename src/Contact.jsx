import React from 'react'
import { useState } from 'react'



const Contact = () => {
    const [data, setData] = useState({
        fname: '',
        email: '',
        phone: '',
        comment: ''
    })

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value
            }
        })
    }
    const Submit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fname}. My Email id is ${data.email}. My Phone Number is ${data.phone}. My Comment is ${data.comment}`)
        
    }


    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contact Us </h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={Submit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name='fname' onChange={inputEvent} value={data.fname} placeholder="Write Name Here..." required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' onChange={inputEvent} value={data.email} placeholder="name@example.com" required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' onChange={inputEvent} value={data.phone} placeholder="write phone number.." required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Comment</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='comment' onChange={inputEvent} value={data.comment} placeholder='Write Comment here...' required></textarea>
                                <button className='btn btn-primary mt-3' type='submit'> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact