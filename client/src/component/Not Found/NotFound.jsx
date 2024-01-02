import React from 'react'
import "./NotFound.css"
const NotFound = () => {
  return (
    <section class="page_404">
    <div class="container">
      <div class="row">	
      <div class="col-sm-12 ">
      <div class="col-sm-10 col-sm-offset-1  text-center">
      <div class="four_zero_four_bg">
        <h1 class="text-center" style={{ color: 'black' }}>404</h1>
      
      
      </div>
      
      <div class="contant_box_404">
      <h3 class="h2">
      Look like You're Lost
      </h3>
      
      <p>The Page You Are Looking for Is Not Available!</p>
      
      <a href="/" class="link_404" >Go To Home</a>
    </div>
      </div>
      </div>
      </div>
    </div>
  </section>
  )
}

export default NotFound