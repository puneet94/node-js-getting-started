

const roomController = {};
 roomController.roomsList = async (req, res, next) =>{
    
    try{
        
        res.status(200).json({"hellow":"word"});
    }
    catch(err){
        next(err)
    }
}

module.exports = roomController;