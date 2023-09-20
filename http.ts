import http, {ServerResponse , IncomingMessage} from "http"

const port: number = 1889

const Server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
    res.write(200)
    res.write("server is up and running using typescript")
    res.end()
})

Server.listen(port , ()=>{
    console.log(`listening on port : ${port}`)
})


// import http, {ServerResponse, IncomingMessage} from "http"

// const port: number = 2000

// const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>=>{
//     res.writeHead(200)
//     res.write("serving is up and running using typescript")
//     res.end()
// })

// Server.listen(port , ()=>{
//     console.log(`listening on port : ${port}`)
// })
























