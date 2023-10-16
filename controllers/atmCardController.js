const AtmCard = require('../models/atmCard');

const createAtm = async (req, res)=>{
    try{
        const atmCardDb = await AtmCard.create(req.body);
        res.status(201).json({"message" : "Created ATM Card Successfully"});
    }catch(err){
        console.log(err.message);
        res.status(501).json({'message' : `Failed to create ATM card due to ${err.message}`});
    }
}

module.exports = {createAtm}
