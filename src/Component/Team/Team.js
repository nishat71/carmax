import React from 'react';
import "./Team.css"


export default function Team() {
  return (
    <section className="team-area" id="team">
    <div className="team-container">
        <div className="section-title">
            <h4>What we do</h4>
            <h2>Team Member</h2>
        </div>
        <div className="team shadow team-img">
            <div className="single-team img-thumbnail">
                <img src="https://i.ibb.co/5cvW1FK/IMG-20211031-032110.jpg" alt="" />
                <div className="team-content">
                    <h4>Mahfujur Rahman Khaled<span>Web Devoloper</span></h4>
                 
                </div>
            </div>
            <div className="single-team img-thumbnail" >
             
                {/* <img className='img-fluid' src="https://i.ibb.co/2NkMNVG/nishat-pic.jpg" alt="" /> */}
                {/* <img className='img-fluid' src="https://i.ibb.co/0hw3dkN/IMG-20220410-WA0107.jpg" alt="" /> */}
                {/* <img className='img-fluid' src="https://i.ibb.co/8PRhLpN/IMG-20210827-WA0048.jpg" alt="" /> */}
                {/* <img className='img-fluid' src="https://i.ibb.co/0f0vBRb/IMG-20220615-WA0008.jpg" alt="" /> */}
                {/* <img className='img-fluid' src="https://i.ibb.co/ZHfsMX3/IMG-20191204-WA0060.jpg" alt="" /> */}
                {/* <img className='img-fluid' src="https://i.ibb.co/fN5zgJW/IMG-20200213-164141.jpg" alt="" /> */}
                <img className='img-fluid' src="https://i.ibb.co/v4Wfzxt/IMG-20220410-WA0105.jpg" alt="" />
                {/* <img className='img-fluid' src="https://i.ibb.co/smY5P5K/me.jpg" alt="" /> */}
                <div className="team-content">
                    <h4>Humaira Akila Nishat <span>Web Devoloper</span></h4>
                </div>
            </div>
            <div className="single-team img-thumbnail">
          
            <img className='img-fluid' src="https://i.ibb.co/dm9kHKW/IMG-6644-removebg-preview.jpg?fbclid=IwAR1XsrirdfrSUHCD4Vof9DAx4Pt71AdX5TZVZNi4XGiMLsatHhQAkTNywQI" alt="" />
                <div className="team-content">
                    <h4>Omar Faruk <span>Web Devoloper</span></h4>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}