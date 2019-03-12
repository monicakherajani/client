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
         
       
        <div className='topmenu'>
          <div id='brand'>Learning Platform</div>
          <div className='sidebar'>
                      {/* <a className='active' href='/'>
              Home
            </a>
            <a href='./StudentCourse'>Courses</a>
            <a href='./StudentCourse'>Resources</a>
            <a href='./Downloads'>Downloads</a>
            <a href='./Register'>Register</a>

            <a href='#contact'>Contact</a>
            <a href='#about'>About</a> */}
            <a href='./StudentLogin'>Student Login</a>
            <a href='./StudentLogin'>Tutor Login</a>
          </div>
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
