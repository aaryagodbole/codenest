const express = require('express');
const router = express.Router();

const {createModule , getAllModules , deleteModule, getModule} = require("../controllers/moduleController");

const {isAuthenticated , isAdmin} = require("../middlewares/auth");


router.post('/admin/createModule' , isAuthenticated , isAdmin , createModule);
router.get('/getModules' , isAuthenticated , getAllModules);
router.get('/getModule/:id' , isAuthenticated , getModule)
router.delete('/admin/deleteModule/:id' , isAuthenticated , isAdmin , deleteModule);
//pending : routes for liking the blog and commenting on it


module.exports = router;