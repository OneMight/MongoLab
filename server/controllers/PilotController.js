const Pilot = require('../models/Pilot.js')

class PilotController{

    async getPilot(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        try {
            const data = await Pilot.find().skip(skip).limit(limit);
            const total = await Pilot.countDocuments();
            res.status(200).json({
                total,
                page,
                data
            });
        } catch (error) {
            console.error('Error fetching recipes with pagination:', error);
            res.status(500).json({
                message: 'Error fetching recipes',
                error: error.message
            });
        }
    }
    async createPilot(req,res){
        try{
            const {PilotName, Age, Biography} = req.body
            const data = await Pilot.create({
              
                PilotName: PilotName,
                Age: Age,
                Biography: Biography
            })
            return res.status(200).json({message:`data is writen ${data}`})
        }catch(err){
            return res.status(500).json({message: 'internal server error ', err})
        }
    }
    async deletePilot(req,res){
        const id = req.params.id
        try{
            
            const data = await Pilot.findByIdAndDelete(id);
            if(!data){
                return res.status(404).json({message: 'pilot not found'});
            }
            return res.status(200).json({message: 'data has been deleted'})
        }catch(err){
            console.error(err)
            return res.status(500).json({message: 'internal server error ', err})
        }
    }
}
module.exports = new PilotController;