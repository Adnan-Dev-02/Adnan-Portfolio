import React from 'react'

const Contact = () => {
  return (
    <div className='row container-fluid m-0 w-100 p-5'>
      <div className="col-sm-6 p-lg-5">
        <h2 className='mb-5'>Get in touch</h2>
        <i class="fa-solid fa-phone text-primary me-2"></i>
        <p className='d-inline'>+91 8176072903</p>
      </div>
      <div className="col-sm-6">
        <form action="" className='p-5  card'>
          <h3 className='mb-3'>Send Message</h3>
          <input type="text" name="" id="" placeholder='Name' className='p-2 rounded m-2 border border-2' />
          <input type="email" name="" id="" placeholder='Email' className='p-2 rounded m-2 border border-2' />
          <textarea name="message" id="" cols="30" rows="10" className='p-2 rounded m-2 border border-2' placeholder='Message'></textarea>
          <button className='btn btn-primary m-2'>Send</button>
        </form>
      </div>

    </div>
  )
}

export default Contact