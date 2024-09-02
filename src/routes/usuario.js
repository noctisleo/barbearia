const express = require("express")
const router = express.Router()

//definindo rotas

const usuario_controller = require("../controllers/usuario.js")

router.post("/", (req, res) => {
    const code = usuario_controller.store(req.body)
    res.status(code).json()
})

router.get("/", (req, res) => {
    res.json(usuario_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(usuario_controller.show(req.params.id))
})

router.put("/:id", (req, res) => {
    const code = usuario_controller.update(req.params.id, req.body)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    const code = usuario_controller.destroy(req.params.id)
    res.status(code).json()
})

//definindo rotas

module.exports = router
