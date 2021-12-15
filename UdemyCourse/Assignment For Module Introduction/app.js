const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<form action="/create-user" method="post"><input type="text" name="username"><button type="submit">Create</button></form>');
    res.write('</html>');
    res.end();
  }
  if (url === "/users") {
    res.write(
      "<html><head><title>First Assignment</title></head><body><ul><li>User 1</li></ul></body></html>"
    );
    res.end();
  }
  if (url === "/create-user") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
});

server.listen(3000);
