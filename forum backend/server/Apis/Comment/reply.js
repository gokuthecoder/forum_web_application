const Comment = require("./CommentModel");

const addReply = async(req,res) => {
    try{
   // getting all important data
   const {_id:userId} = req.user;
   const {comment,commentId} = req.body;
   if(!comment || !commentId){
       return res.status(403).json({
           success:false,
           message:"All field is required."
       });
   };

   const commentAdded = new Comment({
       userId:userId,
       comment:comment
   });

   await commentAdded.save();


   const newComment = await Comment.findByIdAndUpdate(commentId , {
     $push:{
        replies:commentAdded._id
     }
   },{new:true});
   
   return res.status(201).json({
       success:true,
       message:"Your reply added successfully.",
       comment:newComment
   });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Could'nt able to add comment.",
            err:err.message
        });
    }
};

module.exports  = addReply;