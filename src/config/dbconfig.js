import mongoose from "mongoose";

const conexao = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/saudemental", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Aumenta o tempo de espera para seleção do servidor
      family: 4, // Força uso de IPv4
    });
    console.log("Conexão com o MongoDB realizada com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

export default conexao;
