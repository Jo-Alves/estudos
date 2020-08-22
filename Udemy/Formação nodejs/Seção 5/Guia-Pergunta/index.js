const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const connection = require("./model/database")
const pergunta = require("./model/Pergunta")
// database
connection
	.authenticate()
	.then(() => {
		console.log("conexão feita com o banco de dados!")
	})
	.catch(msgErro => {
		console.log(msgErro)
	})
	

app.set("view engine", 'ejs')
app.use(express.static("public"))

// body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// router
app.get("/", (req, res) => {
	// seleciona todas as linhas da tabela
	pergunta.findAll({raw: true})
		.then(perguntas => {
			res.render('index', {
				perguntas
			})
		})
})

app.get("/perguntar", (req, res) => {
	res.render("perguntas")
})

app.post("/salvarpergunta", (req, res) => {
	let titulo = req.body.title
	let descricao = req.body.description
	// insere dados no banco de dados
	pergunta.create({
		titulo,
		descricao
	})
	.then(() => {
		res.redirect("/")
	})
	.catch(error => {
		res.send("Desculpe, houve um erro no banco de dados. " + error)
	})
})

app.get("/pergunta/:id", (req, res) => {
	let id = req.params.id
	pergunta.findOne({
		where: {id}
	})
	.then(pergunta =>  {
		if(pergunta)
			res.render('pergunta')
		else
			res.redirect("/")
	})
})

app.listen(8080, () => {
	console.log("App rodando!")
})