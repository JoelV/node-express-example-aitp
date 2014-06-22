### Simple Static Server using Node and Express

- Install Node (http://nodejs.org)

Once you have node js installed. Type the following commands in the the command line console

```
mkdir aitp                //makes a directory called aitp
cd aitp                   //got the aitp directory
npm install express       //installs express module (docs at http://expressjs.com)
touch server.js           //create server.js file
```

Now open server.js is your favorite text editor and put the following lines of code.

```
var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/public'));

app.listen(1337);

console.log('listening on port 1337');
```

Now lets create some files for the server to 'serve' :D

In the command line console type

```
mkdir public
touch public/index.html
```

Now open index.html in your favorite text editor and put the following lines of code

```
<!DOCTYPE html>
<html>
<head>
  <title>Practice</title>
</head>
<body>
  <h1>This file just got served by this simple node express server :D</h1>
</body>
</html>
```

Now to run your server type the following in your command line

```
node server.js
```

Open your browser to http://localhost:1337 and you should see the page.

Note when going to http://localhost:1337 express will automatically serve index.html.

For example if you make a users.html file in the public directory and went to http://localhost:1337/users.html, you would see users.html in the browser.

For those that where there to see me code this live on Saturday I've simplified this example.

Learn by doing