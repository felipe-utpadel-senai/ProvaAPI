const express = require('express');

const cors = require('cors');

const server = express();

server.use(express);
server.use(cors());


let users = [];
let products = [];

server.post('/users', (req, res) =>{

    const nomeUsuario = req.body.nomeUsuario;
    const cpfUsuario = req.body.cpfUsuario;
    const emailUsuario = req.body.emailUsuario;

    let insertSql = 'INSERT INTO users (nomeUsuario, cpfUsuario, emailUsuario) VALUES (';
    insertSql = insertSql.concat("nomeUsuario", ",");
    insertSql = insertSql.concat("'","cpfUsuario", "'");
    insertSql = insertSql.concat("'", "emailusuario", ";");

    conexao.query(insertSql);

    if(nomeUsuario.lenght <= 3){
        res.status(404).send("Nome' deve conter no mínimo 3 caracteres");
    };
    if(nomeUsuario.lenght >=150){
        res.status(404).send("Nome' deve conter no máximo 150 caracteres");
    };
    if(cpfUsuario.lenght !== 11){
        res.status(404).send("Cpf' deve conter 11 caracteres");
    };
    if(emailUsuario.lenght <= 3){
        res.status(404).send("Email' deve conter no mínimo 3 caracteres");
    }
    if(emailUsuario.lenght >= 150){
        res.status(404).send("'Email' deve conter no máximo 100 caracteres")
    }


    
});

server.put('/users', (req,res) =>{
    const nomeUsuario = req.params.nomeUsuario;
    const novoNomeUsuario = req.body.nomeUsuario;
    const cpfUsuario = req.body.cpfUsuario;
    const emailUsuario = req.body.emailUsuario;

    let updateSql = 'UPDATE INTO users (nomeUsuario, cpfUsuario, emailUsuario) WHERE nomeUsuario = ?';

    conexao.query(updateSql)
});

server.delete('/users/:id', (req, res) => {
    const id =  (req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.delete(index, 1);     
      res.json(users);
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  });

  
  server.get ('/users', (req, res) => {
    res.json(users);
  });

  server.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.body.id );
    if (user) {
      res.json(user);
    } else {
      res.status(404).json("Usúario não encontrado");
    }
  });

  server.post('/products', (req, res) =>{

    const codigoProduto = req.body.codigoProduto;
    const nomeProduto = req.body.nomeProduto;
    const precoProduto = req.body.precoProduto;

    let insertSql = 'INSERT INTO products (codigoProduto, nomeProduto, precoProduto) VALUES (';
    insertSql = insertSql.concat("codigoProduto", ",");
    insertSql = insertSql.concat("'","nomeProduto", "'");
    insertSql = insertSql.concat("'", "precoProduto", ";");

    conexao.query(insertSql);

    if(nomeProduto.lenght <= 3){
        res.status(404).json("'Nome' deve conter no mínimo 3 caracteres");
    };
    if(nomeProduto.lenght >=100){
        res.status(404).json("'Nome' deve conter no máximo 100 caracteres");
    }


  })
  server.put('/products', (req,res) => {
    const codigoProduto = req.params.codigoProduto;
    const novoCodigoProduto = req.body.codigoProdutoo;
    const novoNomeProduto = req.body.nomeProduto;
    const novoPrecoProduto = req.body.precoProduto;

    let updateSql = 'UPDATE INTO users (nomeUsuario, cpfUsuario, emailUsuario) WHERE nomeUsuario = ?';

    conexao.query(updateSql)
  })

  server.get ('/products', (req, res) => {
    res.json(products);
  });

 

server.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.body.id );
    if (product) {
      res.json(product);
    } else {
      res.status(404).json("produto não encontrado");
    }
  });

server.delete('/products/:id', (req, res) => {
    const id =  (req.params.idProduto);
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products.delete(index, 1);     
      res.json(products);
    } else {
      res.status(404).send("Produto não encontrado");
    }
  });


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });