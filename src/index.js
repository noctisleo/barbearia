const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const usuario_route = require("./routes/usuario.js")
const app = express()
const port = 5600

app.use(express.json())

app.use((req, res, next) => {
    console.log("middleware 2")
    next()
})

app.post("/barbearia", (req, res, next) => {
    console.log("middleware 3")
    next()
}, cep_endereco, (req, res) => {
    console.log("POST barbearia")
    res.json(req.body)
})

app.get("/agenda", (req, res) => {
    console.log("GET agenda")
    res.json()
})

app.use("/usuario", usuario_route)

app.listen(port, () => {
    console.log("Server is running in " + port + " port")
})