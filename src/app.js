import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js"

const conexao = await conectaNaDatabase();

conexao.on("error", (error) =>{
    console.error("Erro de conexão!", erro);//metodo para imprimir erro no log
})

conexao.once("open", () =>{
    console.log("Conexão com banco efetuada com sucesso! ")
})

const app = express();
app.use(express.json());// Middleware para parsear JSON


app.delete("/livros/:id", (req, res) =>{
    const index=buscaLivro (req.params.id);
    livros.splice(index, 1);//deletar 1 elemento id
    res.status(200).send("Livro Removido com Sucesso");
})

export default app;