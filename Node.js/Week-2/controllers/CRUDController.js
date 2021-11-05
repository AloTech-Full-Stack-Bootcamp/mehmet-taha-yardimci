const application = require('../models/App')

exports.GETAllBlogPosts = async (req,res) => 
{
    const page = req.query.page || 1;
    const postPerPage = 4;

    const numberofPost = await application.find().countDocuments();
    const posts = await application.find({}).sort('-dateCreated').skip((page-1)*postPerPage).limit(postPerPage);
    res.render("index",
    {
        posts : posts,
        current: page,
        pages: Math.ceil(numberofPost/postPerPage)
    });
}

exports.GETBlogPost = async (req,res) => 
{
    const post = await application.findById(req.params.id);
    res.render("post",
    {
        post
    });
}

exports.PUTBlogPost = async (req,res) => 
{
    const post = await application.findOne({_id: req.params.id});
    res.render("edit",
    {
        post
    });
}

exports.POSTBlogPost = async (req,res) => 
{
    await application.create(req.body);
    res.redirect("/");
}

exports.PUTBlogPost = async (req,res) => 
{
    const post = await application.findOne({_id:req.params.id})
    post.title = req.body.title;
    post.message = req.body.message;
    post.save();
    res.redirect(`/posts/${req.params.id}`);
}

exports.DELETEBlogPost = async (req,res) => 
{
    await application.findByIdAndRemove(req.params.id)
    res.redirect("/");
    
}