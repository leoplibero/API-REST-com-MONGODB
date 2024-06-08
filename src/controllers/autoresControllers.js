
import {autor} from "../models/Autor.js";

class autorController {

  static async listarAutor(req, res) {
   try {
     const listaAutor = await autor.find({});
     res.status(200).json(listaAutor);
   } catch (erro) {
     res
       .status(500)
       .json({ message: `${erro.message} - falha na requisição` });
   }
 }

 static async listarAutorPorId(req, res) {
  try {
    const id = req.id;
    const autorEncontrado = await autor.findById(id);
    res.status(200).json(autorEncontrado);
  } catch (erro) {
    res
      .status(500)
      .json({ message: `${erro.message} - Falha na requisição` });
  }
}

 static async cadastrarAutor (req, res) {
  try {
    const novoAutor = await autor.create(req.body);
    res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
  } catch (erro) {
    res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro` });
  }
}

static async atualizarAutor(req, res) {
  try {
    const id = req.params.id;
    await autor.findByIdAndUpdate(id, req.body);
    res.status(200).json({message: "Autor atualizado"});
  } catch (erro) {
    res
      .status(500)
      .json({ message: `${erro.message} - Falha na atualização` });
  }
}

static async excluirAutor(req, res) {
  try {
    const id = req.params.id;
    await autor.findByIdAndUpdate(id, req.body);
    res.status(200).json({message: "Autor atualizado"});
  } catch (erro) {
    res
      .status(500)
      .json({ message: `${erro.message} - Falha na atualização` });
  }
}
}

export default autorController;