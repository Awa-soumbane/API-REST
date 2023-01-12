const express = require('express');
const Model = require('../model/user');
const router = express.Router();
module.exports = router;


 



/* /methode post/ */
router.post('/post',   async(req, res) => {

  const { genre, age, prenom, nom} = req.body;
  
  const utilisateur = [];
  
  const newUser = Model({
      
      prenom, 
      nom, 
      genre, 
      age,
  });
  
  try {
  
     
      utilisateur.push(newUser);
      // res.json(newUser);
      await newUser.save();
  
      res.status(201).json(newUser);
  
  } catch(error) {
      res.status(400).json({message: error.message})
  }
  
  })

/*     obtenir pluisieur document */
router.get('/getAll', async(req, res) => {
    try{        
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
/* /GET BY id/ au niveau du postman/pour recuper un seul document*/

router.get('/getOne/:id', async(req, res) => {
    const data = await Model.findById(req.params.id);
    res.json(data)
    })

/* / methode modification au niveau du postman/ */

/* update by id methode */
router.patch('/update/:id', async (req, res) => {
    try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
  
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
  
       return res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
    })
    
 
    