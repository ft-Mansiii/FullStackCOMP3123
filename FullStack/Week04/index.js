// Mansi . 101512083

//comp3123 lab04
//endpoints: a specific URL (path) + HTTP method on your server that clients can request.
//nodemon: a utility that will monitor for any changes in your source and automatically restart your server.


const express = require('express'); //import the express module
const app = express(); //create an express application
const port = 3000; //define a port number

//middleware to parse JSON request body
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
}); 

app.get('/', (req, res)=>{
    res.send('This is the root endpoint');
});

//endpoint: http://localhost:3000/hello
app.get('/hello', (req, res)=>{
    res.send('Hello World from Express');
});

//endpoint: http://localhost:3000/user?firstName=Pritesh&lastName=Patel
app.get('/user', (req, res)=>{
    const firstName= req.query.firstName || 'Pritesh'; 
    const lastName= req.query.lastName|| 'Patel';
    res.send(`User: ${firstName} ${lastName}`);
});

//endpoint: http://localhost:3000/user/Mansi/Chhillar
app.post('/user/:firstname/:lastname', (req, res)=>{
    const firstName= req.params.firstname;
    const lastName= req.params.lastname;
    res.send(`User: ${firstName} ${lastName}`);

});

//endpoint: http://localhost:3000/users
app.post('/users', (req, res)=>{
    const users= req.body; 
    if(!Array.isArray(users) || users.length===0){
        return res.status(400).json({message: 'Invalid user data'});

    }
    res.json({message: 'Users received', users: users});
});