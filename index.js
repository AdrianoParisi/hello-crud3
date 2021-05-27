const express = require("express");
const app = express();
app.use = (express.json());

const port = 3000;

const usuarioAdriano = {
    id:1,
    nome: "Adriano",
    idade:28
}

const usuarios = [usuarioAdriano];

app.get("/usuarios",(req,res)=> {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})

