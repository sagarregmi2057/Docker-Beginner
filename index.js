const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express server!' });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






// To run this code, you need to have Node.js and Express installed.// You can create a Dockerfile to containerize this application.
// REPOSITORY   TAG       IMAGE ID       CREATED              SIZE
// my-app       latest    b90602cc5013   About a minute ago   1.64GB
// node         latest    d2b6b5aedb5b   4 days ago           1.63GB

// You can build the Docker image using the following command:

// docker build -t my-node-app .
// This command builds a Docker image named `my-node-app` using the Dockerfile in the
// docker build -t my-app .
// And run it using:
// docker run -p 3000:3000 my-app
// the first port is the host port and the second port is the container port.
// You can then access the application at http://localhost:3000
// for example we have host port 2000 and container port 3000
// docker run -p 2000:3000 my-app we will acess the application at http://localhost:2000
// You can also use Docker Compose to manage the application and its dependencies.


// Inside the container, your Node.js app is running on port 8000, but you want to expose it to your host machine on 3000.
// You do that when starting the container with the -p flag:

// docker run -p 3000:8000 my-node-app



// 👉 Syntax:

// -p <hostPort>:<containerPort>


// So in this case:

// 8000 = the port your Node.js app listens to inside the container.

// 3000 = the port you’ll hit in your browser on your laptop.

// Example:
// If your app is running at http://localhost:8000 inside the container, you’ll now access it on your machine at:

// http://localhost:3000