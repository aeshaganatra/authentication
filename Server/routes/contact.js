const { render } = require('ejs');
let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
//const { response } = require('../Config/app');
let passport = require("passport");
//connect route to contact model
let Contact = require("../Models/contact")

let contactController=  require("../Controller/contact.js")


// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
//read operation-- read contact model
router.get("/",requireAuth,contactController.displayContactList);

/* GET route for contact list page-- Create Operation*/

router.get('/add',requireAuth, contactController.displayAddPage);

/* POST route for contact list page-- Create Operation*/
router.post('/add',requireAuth,contactController.processAddPage); 

/* GET route for contact list page-- Update Operation*/

router.get("/edit/:id",requireAuth, contactController.displayEditPage)
/* POST route for contact list page-- Update Operation*/

router.post("/edit/:id",requireAuth,contactController.processEditPage);
/* GET route for contact list page-- Delete Operation*/

router.get("/delete/:id",requireAuth,contactController.performDelete);
module.exports = router;