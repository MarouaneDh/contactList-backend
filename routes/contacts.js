const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const controllers = require("../controllers/contact.controllers");

//test routing
router.get("/hello", (req, res) => {
  res.send("hello routing");
});

//post contact
//get all contacts
//get contact by id
//delete contact
//update a contact

//POST
//contact posting
//PATH: http://localhost:5000/api/contact/
//params Body
router.post("/", controllers.postContact);

//GET
//getting all contacts
//PATH:http://localhost:5000/api/contact/
router.get("/", controllers.getAllContacts);

//GET
//getting contact by id
//PATH:http://localhost:5000/api/contact/:id
//params id
router.get("/:id", controllers.getContact);

//DELETE
//deleting a contact by id
//PATH:http://localhost:5000/api/contact/:id
//params id
router.delete("/:id", controllers.deleteContact);

//PUT
//updating a contact by id
//PATH:http://localhost:5000/api/contact/:id
//params id body
router.put("/:id", controllers.putContact);

module.exports = router;
