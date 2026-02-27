import http from "http";

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log("url:", url);
    const method = req.method;
    console.log("method:", method);

    if (url === "/home") {
        res.end("Home Page Content");
    }

    if (url === "/systemconfig") {
        const freeMemory = `Available RAM: ${OS.freemem/(1024 * 1024 * 1024)}`;
        console.log("freeMemory:", freeMemory);
        res.end(freeMemory);
    }

    if (url === "/aboutus") {
        res.end("Welcome to About Page");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("Now I am feeling better");
    console.log("Server is also called as Instance");
    console.log("DSA is more important for placements");
    
    
    
});
