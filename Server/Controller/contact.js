const { render } = require('ejs');
let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
//const { response } = require('../Config/app');

//connect route to contact model
let Contact = require("../Models/contact")

module.exports.displayContactList = (req,res,next)=>{
    Contact.find((err,contactList)=>{
        if(err){
            return console.error(err);
        }
        else{
            //console.log(contactList);
          res.render( "../views/contact",{title: "Contact List",ContactList:contactList,displayName: req.user ? req.user.displayName : ''})
        }
    }).sort({ name: 1 });
}

module.exports.displayAddPage =function(req, res, next) {
    res.render("../views/pages/add",{title: "Add a Contact",displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage =(req,res,next)=>{
    let newContact= Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });
    Contact.create(newContact,(err,Contact)=>{
        if(err){
            console.log(err);
            res.end(err);
            }
            else{
                res.redirect("/contact-list")
            }
        });
}
module.exports.displayEditPage =(req,res,next)=>{
    let id = req.params.id;

    Contact.findById(id,(err,contactToEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render("../views/pages/edit",{title:"Edit Contacts",contact:contactToEdit, displayName: req.user ? req.user.displayName : ''})
        }
    });
}
module.exports.processEditPage =(req,res,next)=>{
    let id = req.params.id;
    let updatedContact= Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });
    Contact.updateOne({_id:id},updatedContact,(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect("/contact-list");
        }
    });
}
module.exports.performDelete =(req,res,next)=>{
    let id = req.params.id;
    Contact.remove({_id:id},(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect("/contact-list");
        }
    });
}