const express = require('express')
const app = express()
app.use(express.json())
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect:'sqlite',
  storage:'./bancoDeDados.db'
})

  sequelize.authenticate().then(function(){
      console.log('conectado com sucesso')
  }).catch(function(erro){
      console.log('falha ao se conectar: '+erro)
  })


const modelPessoa = sequelize.define('pessoa',{
  nome:{type:Sequelize.STRING},
  idade:{type:Sequelize.STRING}
})
//modelPessoa.sync({force:true})
const inserirPessoa = ()=>{
  modelPessoa.create({
    nome:"fabio",
    idade:"39 anos"
  })
}
if(inserirPessoa){
  console.log('pessoa criada com sucesso')
}else{
  console.log('falha ao criar')
}

inserirPessoa()
app.get('/',async (req,res)=>{
  const pessoa = await modelPessoa.findAll()
  console.log(pessoa)
    res.json(pessoa)
})


app.listen(3001)