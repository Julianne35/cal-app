// IN USE
const mongoose = require("mongoose");
const CalData = mongoose.model("calander");

// get all
exports.getData = async (req, res) => {
  const data = await CalData
    // .find({ company: "Company Title 2" }); filters db by certin value
    .find(req.query);
  res.json(data);
};

//create info
exports.postData = async (req, res) => {
  // console.log(req.body);
  let CalD = new CalData({
    contactName: req.body.contactName,
    eventName: req.body.eventName,
    contactPhone: req.body.contactPhone,
    contactEmail: req.body.contactEmail,
    eventAddress: req.body.eventAddress,
    eventTime: req.body.eventTime,
    eventDate: req.body.eventDate,
    eventDescription: req.body.eventDescription,
    image: req.body.image,
    isLiked: req.body.isLiked,
    isOverlaped: req.body.isOverlaped,
    isApproved: req.body.isApproved,
    eventLink: req.body.eventLink,
  });
  console.log("created-snapshot:", CalD);
  await CalD.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "snapshot" + CalD + "was not created",
      });
    } else {
      res.status(200).json({
        message: "Created" + CalD + "successfuly!",
        data,
      });
    }
  });
};