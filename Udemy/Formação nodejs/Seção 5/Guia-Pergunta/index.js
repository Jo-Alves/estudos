const express = require("express")
const app = express();
const bodyParser = require('body-parser')

app.set("view engine", 'ejs')
app.use(express.static("public"))

// body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// router
app.get("/", (req, res) => {
	res.render('index')
})

app.get("/perguntar", (req, res) => {
	res.render("perguntas")
})

app.post("/salvarpergunta", (req, res) => {
	let title = req.body.title
	let description = req.body.description
	res.send(`<strong>Título: </strong> <mark>${title}</mark> <strong>Pergunta: </strong> <mark>${description}</mark> `)
})
app.listen(8080, () => {
	console.log("App rodando!")
})