import React from 'react'
import "./About.css"
const About = ({ about }) => {
  return (
   <div className="container">
  <input type="checkbox" id="switch" />
  <div className="outer">
    <div className="contentt">
      <label htmlFor="switch">
        <span className="toggle">
          <span className="circle" />
        </span>
      </label>
      <div className="image-box">
      <img src={about.avatar.url}alt />
      </div>
      <div className="details">
      <div className="name">{about.name} </div>
        <div className="name">{about.title}</div>
        <div className="job">{about.subtitle}</div>
        <div className="buttons">
        <p>{about.description}</p>
          <button>Read More</button>
        </div>
      </div>
      <div className="media-icons">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-linkedin-in" />
      </div>
    </div>
  </div>
</div>

    

  )
}

export default About