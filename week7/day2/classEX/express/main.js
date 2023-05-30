const express = require('express');
const app = express();

// Middleware to retrieve today's date and current time
app.use('/products', express.json({ limit: 100 }))
app.use((req, res, next) => {
  req.currentDateTime = new Date();
  next();
});

// Route 1: Middleware called before this route
app.get('/', (req, res) => {
  res.send(`Today's date and time: ${req.currentDateTime}`);
});

// Route 2: Middleware called before this route
app.get('/second-route', (req, res) => {
  res.send(`Today's date and time: ${req.currentDateTime}`);
});

// post method route
app.post('/login',function(res,req){
    console.log("POST request")
    console.log(req.body.email.req.body.password);
    email = req.body.email;
    password=req.body.password;
    if(email=="test@example.com" && password=="password"){
        res.send("Login Successful");
        }
        else{
            res.send("Login Failed");
            }

})

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

