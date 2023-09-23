const transactionModel = require("../models/transactionModel");
const moment = require("moment");

const getAllTransctions = async (req, res) => {
  try {
    const { Frequency, selectedDate, type } = req.body;
    const transactions = await transactionModel.find({
      ...(Frequency !== "custom"
        ? {
            date: { $gt: moment().subtract(Number(Frequency), "d").toDate() },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userId: req.body.userId,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transactions);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const editTransctions = async (req, res) => {
  try {
    await transactionModel.findByIdAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.status(200).send('Edit Successfully');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTransctions = async (req, res) => {
  try {
    const newTransction = new transactionModel(req.body);
    await newTransction.save();
    res.status(201).send("Transaction created");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deleteTransctions = async(req, res) => {
    try {
        await transactionModel.findOneAndDelete({_id:req.body.transactionId})
        res.status(200).send('Transaction deleted')
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = { getAllTransctions, addTransctions, editTransctions, deleteTransctions };
