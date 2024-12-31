const Team = require('../models/Team')

class TeamController{
    async getTeam(req, res) {
        const page = parseInt(req.query.page) || 2;
        const limit = parseInt(req.query.limit) || 2;
        const skip = (page - 1) * limit;

        try {
            const data = await Team.find().skip(skip).limit(limit);
            const total = await Team.countDocuments();
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
    async createTeam(req,res){
        try{
            const {teamName, desciption, photoTeam} = req.body
            const data = await Team.create({
              
                teamName: teamName,
                desciption: desciption,
                photoTeam: photoTeam
            })
            return res.status(200).json({message:`data is writen ${data}`})
        }catch(err){
            console.error(err)
            return res.status(500).json({message: 'internal server error ', err})
        }
    }
    async deleteTeam(req,res){
        const id = req.params.id
        try{
            const data = await Team.findByIdAndDelete(id);
            if(!data){
                return res.status(404).json({message: 'team not found'});
            }
            return res.status(200).json({message: 'data has been deleted'})
        }catch(err){
            console.error(err)
            return res.status(500).json({message: 'internal server error ', err})
        }
    }
}
module.exports = new TeamController;