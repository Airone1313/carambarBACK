const Blague = require("../models/blagues");


const getRandomBlague = (array) => {

    const random = Math.floor(Math.random()*array.length);
    
    return array[random]

}


const controllerBlague = {
    random:async(req, res) => {
        const data = await Blague.findAll();
        console.log(data);
        const randomBlague = getRandomBlague(data);
        res.status(200).json({ carambar : randomBlague });
    },
    create: async (req, res) => {
        console.log(req.body);
        const data = await Blague.create(req.body);
        console.log(data);
        res.status(201).json({ message: "blague marrante ajoutée", data: req.body });

    },
    findAll :  async (req, res) =>{
        const data = await Blague.findAll();
        res.status(200).json({blagues : data});

    }





}
module.exports=controllerBlague