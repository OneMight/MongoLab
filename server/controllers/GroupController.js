const Group = require('../models/Group.js')

class GroupController{

    async getGroup(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        try {
            const data = await Group.find().skip(skip).limit(limit);
            const total = await Group.countDocuments();
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
    async createGroup(req,res){
        try{
            const {groupName, desciption, imageGroup} = req.body
            const data = await Group.create({
              
                groupName: groupName,
                desciption: desciption,
                imageGroup: imageGroup
            })
            return res.status(200).json(data)
        }catch(err){
            return res.status(500).json({ message: 'internal server error ', err });
        }
    }
    async deleteGroup(req,res){
        const id = req.params.id;
        try{
            
           const data = await Group.findByIdAndDelete(id);
           console.log(data)
           if(!data){
             return res.status(404).json({message: 'group not found'});
           }
            return res.status(200).json({message: 'data has been deleted'})
        }catch(err){
            console.error(err)
            return res.status(500).json({message: 'internal server error ', err})
        }
    }
    async search(req, res) {
        try {
            const { query } = req.query;
    
            
            if (!query) {
                const  data = await Group.find({});
                return res.json(data);
            }
    
            const data = await Group.find({
                $or: [
                    { teamName: { $regex: query, $options: 'i' } },
                ],
            });
    
            return res.json(data);
        } catch (error) {
            console.error('Ошибка при поиске группы:', error);
            return res.status(500).json({ message: 'Ошибка при поиске группы' });
        }
    }
}

module.exports = new GroupController;