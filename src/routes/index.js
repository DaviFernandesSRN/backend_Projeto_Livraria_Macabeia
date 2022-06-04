import express from "express";
import livros from "../routes/livroRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Mensagem: " API 2.0 Livraria Macabéa 📚" })
 });

app.use(
    express.json(),

    livros,
   
    
)
}


export default routes;

