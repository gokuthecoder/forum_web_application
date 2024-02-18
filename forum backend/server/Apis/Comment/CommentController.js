const Comment = require("./CommentModel");
const Post = require("../Post/PostModel");

const addComment = async (req,res) => {
    try{
        // getting all important data
        const {_id:userId} = req.user;
        const {comment,postId} = req.body;
        console.log("Checking Comment Cont :: ")
        console.log(comment,postId);
        if(!comment || !postId){
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

        // save comment is in post 
        await Post.findByIdAndUpdate(postId , {
            $push:{
              comments: commentAdded._id  
            }
        });
        
        return res.status(201).json({
            success:true,
            message:"Your comment added successfully.",
            comment:commentAdded
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

const getCommentById = async (req,res) => {
    try{
        // commentId 
        const {commentId} = req.body;

        if(!commentId){
            return res.status(403).json({
                success:false,
                message:"Please Fill Comment Id."
            })
        };

        let getComment = await Comment.findById(commentId).populate("replies");

        let obj = {};

        while (getComment.replies) {
            obj.populate = {
                path:"replies",
            };
            console.log("Obj :: ",obj);
            getComment = await Comment.findById(commentId).populate("replies");
        };
       
        return res.status(201).json({
            success:true,
            message:"Comment Got Finnaly !!",
            comment:getComment
        });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Could'nt get comment.",
        });
    }
}

module.exports = {addComment,getCommentById}