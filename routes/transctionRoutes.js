const express = require("express");
const {
  addTransctions,
  getAllTransctions,
  editTransctions,
  deleteTransctions,
} = require("../controllers/transactionController");

//router obj
const router = express.Router();

//routers
//add trans || post
router.post("/add-transaction", addTransctions);

//edit
router.post("/edit-transaction", editTransctions);

//delete
router.post("/delete-transaction", deleteTransctions);

//get trans || get
router.post("/get-transaction", getAllTransctions);

module.exports = router;
