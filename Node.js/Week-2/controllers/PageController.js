const putOperation = require('../models/App');

exports.GETAboutPage = (req,res) => 
{
    res.render("about");
}

exports.GETAddPage = (req,res) => 
{
    res.render("add");
}

exports.GETEditPage = async (req, res) => 
{
    const allp = await putOperation.findOne({ _id: req.params.id });
    res.render('edit', 
    {
      allp,
    });
  };