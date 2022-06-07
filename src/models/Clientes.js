import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
            id: {type: String},
            "nome": {type: String, required: true},
            'senha': {type: String, required: true},
            "email":{type: String, required: true},
            "cpf": {type: Number},
            "endereco": {type: String, required: true},
            "data_de_aniversario":{type: Number}
            
        
    }
);

const clientes= mongoose.model('cliente', clienteSchema);

export default clientes;