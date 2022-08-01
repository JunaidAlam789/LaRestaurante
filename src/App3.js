
import './App.css';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic7 from './Pic7.jpg';
import Pic8 from './Pic8.jpg';
import Pic9 from './Pic9.jpg';
import Pic10 from './Pic10.jpg';
import Pic11 from './Pic11.jpg';
import Pic13 from './Pic13.jpg';
import Pic_chef from './chef.jpg';
import Pic_envelop from './envelop.png';
import Pic_receiver from './receiver.png';

function App3() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
 
 // Similar to componentDidMount and componentDidUpdate:
 useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
});

  return (
    <div>
<div>
<nav class="navbar navbar-expand-lg bg-light container">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="https://yourfoodsite.netlify.app/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://yourfoodsite.netlify.app/">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
                
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>





      <h1 class="text-center">La Restaurante</h1>
      <br/>
{/* className="flex-container"  */}
{/* <div class="card" style={{"width": "18rem", "height":"30rem"}} ></div> */}

<div className="flex-container container" >
     
 <div class="row">
<div class="card container col-sm-4"  >
  <img src={Pic7} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mutton Seekh</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://picsum.photos/500" class="btn btn-primary">Go somewhere</a>
    <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>
  Likes <span class="badge bg-secondary">{count}</span>
</button>
  </div>
</div>
<div class="card col-sm-4" >
  <img src={Pic8} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://picsum.photos/500" class="btn btn-primary">Go somewhere</a>
    <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>
  Likes <span class="badge bg-secondary">{count}</span>
</button>
  </div>
</div>
<div class="card col-sm-4" >
  <img src={Pic9} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mutton Seekh Kabab</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://picsum.photos/500" class="btn btn-primary">Go somewhere</a>
    <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>
  Likes <span class="badge bg-secondary">{count}</span>
</button>
  </div>
</div>

<div class="card col-sm-4" >
  <img src={Pic10} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://picsum.photos/500" class="btn btn-primary">Go somewhere</a>
    <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>
  Likes <span class="badge bg-secondary">{count}</span>
</button>
  </div>
</div>
<div class="card col-sm-4" >
  <img src={Pic11} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://picsum.photos/500" class="btn btn-primary">Go somewhere</a>
    <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>
  Likes <span class="badge bg-secondary">{count}</span>
</button>
  </div>
</div>
<div class="card col-sm-4" >
  <img src={Pic13} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Veg Fried Rice</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://picsum.photos/500" class="btn btn-primary">Go somewhere</a>
    <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>
  Likes <span class="badge bg-secondary">{count}</span>
</button>
  </div>
</div>
</div>

</div>  {/*//flex-container-end  */}

{/* <hr id="about"> 
 <img src={Pic_chef} alt="Me" width="800" height="533"/>
*/}
<hr id="about"/>
  {/* <!-- About Section --> */}
  {/* class="row gy-5" */}
  <div class="container text-center" >  
    <h3>About Me, The Food Man</h3><br/>
   
    <img class="container w-50"src={Pic_chef}   alt="..."/>
    <div>
      <h4><b>I am Who I Am!</b></h4>
      <h6><i>With Passion For Real, Good Food</i></h6>
      
      <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      
    </div>
  </div>
  
  {/* <!-- Footer --> */}
  
    <div class="container text-center row">
      <div class="col-6">
          
      <h3>Contact Us</h3>                        
      <img src={Pic_receiver} alt="..."/>
      <p>+12 333 xxx 444</p>
      <p>+12 333 xxx 444</p>
      <img src={Pic_envelop} alt="..."/>
      <p>info@food.com</p>
      <p>Powered by <a href="https://mywebportal.netlify.app/" >mywebportal</a></p>
       </div>
      <div class="col-6 border-dark">
            <h3>POPULAR TAGS</h3>
        <p>
        <span class="bg-secondary mx-1 col-1">BBQ</span>
        <span class="bg-secondary mx-1 col-1">NewYork</span>
        <span class="bg-secondary mx-1 col-1">Dinner</span>
        <span class="bg-secondary mx-1 col-1">Salmon</span>
        </p><p>
        <span class="bg-secondary mx-1 col-1">France</span>
        <span class="bg-secondary mx-1 col-1">Drinks</span>
        <span class="bg-secondary mx-1 col-1">Ideas</span> 
        </p><p>
        <span class="bg-secondary mx-1 col-1">Flavors</span> 
        <span class="bg-secondary mx-1 col-1">Cuisine</span>
        <span class="bg-secondary mx-1 col-1">Chicken</span>
        </p><p>
        <span class="bg-secondary mx-1 col-1">Dressing</span>
        <span class="bg-secondary mx-1 col-1">Fried Fish</span>
        <span class="bg-secondary mx-1 col-1">Mutton</span>
        </p>
    </div>
      </div>
      
    
  
      
    </div>
  );
}

export default App3;
