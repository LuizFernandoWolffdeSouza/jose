import saudemodel from "../models/saudemodel.js";

 export async function store (req,res) {
    try {
        const usuario = await saudemodel.create(req.body)
        res.status(200).json(usuario)
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem   })
    }
    
}
export async function usuarioid(req, res) {
     try {
        const usuario = await saudemodel.findById(req.params.id)
        res.status(200).json({ mensagem: "id verificado com sucesso", usuario})
        
     } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
     }
    
}
export async function index (req, res) {
    try {
        const usuario = await saudemodel.find() .exec()
        res.status(200).json({ mensagem : "usuario listado com sucesso"})
    } catch (error) {
        res.status(400).json({mensagem: error.message})
        
    }
}
export async function  update(req , res) {
    try {
        const usuario = await saudemodel.findByIdAndUpdate(req.params.id, req.body  ) .exec()
        res.status(200).json({mensagem: "atualizado "})
        
    } catch (error) {
        res.status(400).json({mensagem : error.message})
        
    }
    
}
export async function destroy(req,res) {
    try {
        const usuario  = await saudemodel.findByIdAndDelete(req.params.id, req.body) .exec()
        res.status(200).json({mensagem: "usuario deletado co sucesso", usuario})
    } catch (error) {
        res.status(400).json({mensagem: error.message})
        
    }
}

