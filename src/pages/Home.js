import React from 'react'
import vector from './images/vector.webp'
import netflix from './images/netflix.png'
import newsindia from './images/newsindia.png'
import webdev from './images/webdev.jpg'
import mobileapp from './images/mobileapp.jpg'
import digitalm from './images/digitalm.jpg'
import seo from './images/seo.jpeg'
import { ReactTyped } from 'react-typed';

import promotion from './images/promotion.jpeg'
import Footer from './Footer'

function Home() {
  return (
    <>
      <div className='p-3 p-lg-5 container-fluid m-0 row '>


        <div className='col-sm-6 p-2'>
          <h1>Hello I am Adnan</h1>
          <ReactTyped
            strings={[
              'A Passionate Full-Stack Web Developer',
              'A Passionate Programmer',
              'Search for categories',
              'Search for brands'
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          >
            <h2 className='d-inline'></h2>
          </ReactTyped>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ipsa voluptate doloremque corrupti ducimus doloribus eius placeat culpa alias nostrum, excepturi consectetur rem, accusantium deleniti esse nihil architecto omnis fugit.</p>
          <a class="btn btn-outline-primary m-1"
            href="https://drive.google.com/file/d/1ll3GyQdHEVn__kzzKbyLxrl36Cs5Y5tZ/view?usp=sharing">Download
            Resume</a>
          <a class="btn btn-outline-dark m-1" href="https://github.com/Adnan-Dev-02">Github Profile</a>
        </div>
        <div className='col-sm-6 p-2'>
          <img src={vector} alt="" width="100%" />
        </div>
        <div className='p-2'>
          <hr />
          <h2>Skills</h2>
          <i class="fa-brands m-2 fs-1 fa-html5"></i>
          <i class="fa-brands m-2 fs-1 fa-css3-alt"></i>
          <i class="fa-brands m-2 fs-1 fa-js"></i>
          <i class="fa-brands m-2 fs-1 fa-bootstrap"></i>
          <i class="fa-brands m-2 fs-1 fa-react"></i>
          <i class="fa-brands m-2 fs-1 fa-node"></i>
          <hr />
        </div>
        <div className='p-2'>
          <h2 className='mb-3'>Projects</h2>
          <div className="row container-fluid m-0 mb-3">
            <div className="col-sm-4">
              <div class="card">
                <img class="card-img-top" src={netflix} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Netflix Clone</h5>
                  <p class="card-text">This is a clone of the front page of Netflix website.</p>
                  <p>Technologies used - HTML, CSS</p>
                  <a href="https://adnan-dev-02.github.io/Netflix-Clone/" class="btn btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card">
                <img class="card-img-top" src={newsindia} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">News INDIA</h5>
                  <p class="card-text">This is a responsive and dynamic News Portal website.</p>
                  <p>Technologies used - HTML, CSS, Bootstrap, Python with Django  </p>
                  <a href="" class="btn btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card">
                <img class="card-img-top" src={newsindia} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Portfolio</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="row">
          <h2 className='mb-3'>My Services</h2>
          <div className="row container-fluid m-0 justify-content-around">
            <div className='col-lg-2 col-md-4'>
              <div class="card">
                <img class="card-img-top" src={webdev} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Web Development</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4'>
              <div class="card">
                <img class="card-img-top" src={mobileapp} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Mobile App Development</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4'>
              <div class="card">
                <img class="card-img-top" src={digitalm} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Digital Marketing</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4'>
              <div class="card">
                <img class="card-img-top" src={seo} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">SEO</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4'>
              <div class="card">
                <img class="card-img-top" src={promotion} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Brand Promotion</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home