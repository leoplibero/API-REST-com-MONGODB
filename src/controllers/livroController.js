// importação do modelo Livro
// para ser chamado pelo controller
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
   try {
    // controller chama o model Livro através
    // do método livro.find({})
     const listaLivros = await livro.find({});
     res.status(200).json(listaLivros);
   } catch (erro) {
     res
       .status(500)
       .json({ message: `${erro.message} - falha na requisição` });
   }
 }

 static async listarLivroPorId(req, res) {
  try {
    const id = req.id;
    const livroEncontrado = await livro.findById(id);
    res.status(200).json(livroEncontrado);
  } catch (erro) {
    res
      .status(500)
      .json({ message: `${erro.message} - Falha na requisição` });
  }
}

 static async cadastrarLivro (req, res) {
  try {
    const novoLivro = await livro.create(req.body);
    res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
  } catch (erro) {
    res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro` });
  }
}

static async atualizarLivro(req, res) {
  try {
    const id = req.params.id;
    await livro.findByIdAndUpdate(id, req.body);
    res.status(200).json({message: "Livro atualizado"});
  } catch (erro) {
    res
      .status(500)
      .json({ message: `${erro.message} - Falha na atualização` });
  }
}

static async excluirLivro(req, res) {
  try {
    const id = req.params.id;
    await livro.findByIdAndUpdate(id, req.body);
    res.status(200).json({message: "Livro atualizado"});
  } catch (erro) {
    res
      .status(500)
      .json({ message: `${erro.message} - Falha na atualização` });
  }
}
}

export default LivroController;