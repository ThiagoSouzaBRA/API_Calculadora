const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.json({
        "Operações":{
            "Soma" : '/soma',
            "Subtração" : '/subtracao',
            "Multiplicação" : '/multiplicacao',
            "Divisão" : '/divisao'
        }
    });
});

app.get('/:op', (req, res)=>{
    if(typeof req.body.a !== 'undefined' && typeof req.body.b !== 'undefined'){
        let _resultado;
        switch(req.params.op){
            case 'soma':
                _resultado = (req.body.a + req.body.b)
                break;
            case 'subtracao':
                _resultado = (req.body.a - req.body.b)
                break;
            case 'multiplicacao':
                _resultado = (req.body.a * req.body.b)   
                break;
            case 'divisao':
                _resultado = (req.body.a / req.body.b)
                break;
        }

        res.json({
            resultado: _resultado
        });

    }else{
        res.status(400).send("[ERRO] - Não foi possivel realizar a operação.");
    }


})

app.listen(3000, ()=>{
    console.log("Servidor ligado.");
})