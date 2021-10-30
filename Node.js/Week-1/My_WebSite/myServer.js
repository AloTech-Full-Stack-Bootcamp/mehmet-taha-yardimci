const http = require('http');
const fs = require('fs');

//Creating a Server
const server = http.createServer((req, res) => {

    const url = req.url;

    const indexPage = fs.readFileSync('./index.html');
    const aboutPage = fs.readFileSync('./about-me.html');
    const contactPage = fs.readFileSync('./contact.html');

    if (url === '/' || url === '/index.html') {

        res.setHeader('Content-Type', 'text/html');
        res.end(indexPage);

    } else if ( url === '/about-me.html') {

        res.setHeader('Content-Type', 'text/html');
        res.end(aboutPage);

    } else if (url === '/contact.html') {

        res.setHeader('Content-Type', 'text/html');
        res.end(contactPage);

    } else {

        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h2>404 Page is not found.</h2>');
    }
});

const port = 5000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});