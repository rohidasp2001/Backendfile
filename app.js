//import route 
//import module
  const express = require('express');

  // Create an Express application
  const app = express();
  const port = 3000;
  
  //  routes for different pages
  
  app.get('/Home',(req, res) => {
    res.send("Welcome to Homepage");
  });
  
//routes for Aboutpage

  app.get('/About',(req, res) => {
    res.send("Welcome to Aboutpage");
  });
  
  //route for Service page

  app.get('/Service',(req, res) => {
    res.send("Welcome to Servicepage");
  });
  
  //route for workpage
  app.get('/Works',(req, res) => {
    res.send("Welcome to Workspage");
  });
  
  //route for Review page

  app.get('/Review',(req, res) => {
    res.send("Welcome to Reviewpage");
  });
  
  //route for  Blogpage
  app.get('/Blog',(req, res) => {
    res.send("Welcome to Blogpage");
  });
  
  //route for hellopage
  app.get('/Hello',(req, res) => {
    res.send("Welcome to Hellopage");
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  