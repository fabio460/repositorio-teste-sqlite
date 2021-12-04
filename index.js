const express = require('express')
const app = express()
app.use(express.json())
const Sequelize = require('sequelize')
//const sequelize = new Sequelize({
  //dialect:'sqlite',
  //storage:'./bancoDeDados.db'
//})




//const modelPessoa = sequelize.define('pessoa',{
 // nome:{type:Sequelize.STRING},
 // idade:{type:Sequelize.STRING}
//})
//modelPessoa.sync({force:true})




app.get('/',async (req,res)=>{
  //const pessoa = await modelPessoa.findAll()
  //console.log(pessoa)
    res.json('pessoa')
})

require('dotenv').config()
const porta = process.env.porta || 3001
app.listen(porta)