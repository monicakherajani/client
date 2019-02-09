import React, { Component } from 'react';
class Sidemenu extends Component {
  render() {
    console.log('sidemenu render');
    return (
//       <style>
// body {
//   margin: 0;
//   font-family: "Lato", sans-serif;
// }

// .sidebar {
//   margin: 0;
//   padding: 0;
//   width: 200px;
//   background-color: #f1f1f1;
//   position: fixed;
//   height: 100%;
//   overflow: auto;
// }

// .sidebar a {
//   display: block;
//   color: black;
//   padding: 16px;
//   text-decoration: none;
// }
 
// .sidebar a.active {
//   background-color: #4CAF50;
//   color: white;
// }

// .sidebar a:hover:not(.active) {
//   background-color: #555;
//   color: white;
// }

// div.content {
//   margin-left: 200px;
//   padding: 1px 16px;
//   height: 1000px;
// }

// @media screen and (max-width: 700px) {
//   .sidebar {
//     width: 100%;
//     height: auto;
//     position: relative;
//   }
//   .sidebar a {float: left;}
//   div.content {margin-left: 0;}
// }

// @media screen and (max-width: 400px) {
//   .sidebar a {
//     text-align: center;
//     float: none;
//   }
// }
// </style>
// </head>

<React.Fragment>
<div class="sidebar">
  <a class="active" href="#home">Home</a>
  <a href="#Courses">Courses</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>

<div class="content">
  <h2>Responsive Sidebar Example</h2>
  <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
  <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
  <h3>Resize the browser window to see the effect.</h3>
</div>
</React.Fragment>
    );

    //   <React.Fragment>
    //     <div className='container'>
    //       {
    //          <div className='row'>
          
          
    //         <button className='btn btn-success'>Home</button>
            
            

    //         <button className='btn btn-success'>Courses</button>
    //         <button className='btn btn-success'>Videos</button>
    //         <button className='btn btn-success'>Discuss</button>
    //         <button className='btn btn-success'>My Profile</button>
            
    //       </div>
    //       }
         
    //     </div>
    //   </React.Fragment>
    // );
  
    
  }
}
export default Sidemenu;
