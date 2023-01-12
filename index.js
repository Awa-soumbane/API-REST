const express = require('express');/*  /pour recuperer la variable express dans la boite express/ */
const mongoose = require('mongoose') /* /pour recuperer la variable mongoose dans mongoose/ */
require('dotenv').config();

const routes = require('./routes/routes') ;
/* var cors = require ('cors')  *//* /recuperer le variable cors/ */
const databaseLink = "mongodb+srv://AwaSoumbane:soumbane1997@cluster0.y6nz4sg.mongodb.net/?retryWrites=true&w=majority"/*  / permet de recuperer le lien du base de données/ */

const app = express();/* /permet d'ecouter les ports pour excuter et envoye les données/ */
/* app.use(cors({origin: '*'})); */ /* le cors gere les requtes http par rapport à leur origine */ 

mongoose.connect(databaseLink); /* /permet d'avoir  accer a  la connection du base de données/ */
const database = mongoose.connection /* / recupere les données/ */

app.use(express.json());
  /* /afficher les fichiers sous format json / */

app.use('/api', routes);


database.on('erreur', (erreur) => {
console.log(erreur);
}) 

database.once('connected', () => {
    console.log('Database connected');
})

app.listen(3001, () => {
    console.log('awa soumbane');
})