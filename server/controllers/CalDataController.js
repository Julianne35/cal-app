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
    contactname: req.body.contactname,
    eventname: req.body.eventname,
    contactphone: req.body.contactphone,
    contactemail: req.body.contactemail,
    eventaddress: req.body.eventaddress,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    eventtime: req.body.eventtime,
    eventdate: req.body.eventdate,
    eventdescription: req.body.eventdescription,
    eventimage: req.body.eventimage,
    image: req.body.image,
    refid: req.body.refid,
    isliked: req.body.isliked,
    isoverlaped: req.body.isoverlaped,
    isapproved: req.body.isapproved,
    eventlink: req.body.eventlink,
  });
  console.log("created-snapshot:", CalD);
  await CalD.save((err, data) => {
    if (err) {
      console.log("DATA", CalD);
      res.status(500).json({
        message: "error data was not created",
      });
    } else {
      console.log("DATA-", data);
      res.status(200).json({
        message: "Created" + CalD + "successfuly!",
        data,
      });
    }
  });
};

//get post by id
//NOTE: removed await - caused error in cloned query (in updated mongdb version)
// query: http://localhost:3001/getid/637d99b47f1c7878ad6f8679
exports.getCalId = (req, res) => {
  let getUniqueId = req.params.calId;
  CalData.findById({ _id: getUniqueId }, (err, data) => {
    if (err) {
      console.log(data);
      res.status(500).json({
        message: "Profile not found",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "Post found",
        data,
      });
    }
  });
};

//update post
//NOTE: make sure on Postman you select JSON not text
//http://localhost:3001/update/637d99b47f1c7878ad6f8679
exports.updatePost = (req, res) => {
  CalData.findOneAndUpdate(
    { _id: req.params.calId },
    { $set: req.body },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "error data was not updated",
        });
      } else {
        res.status(200).json({
          message: "Post Updated",
          data,
        });
      }
    }
  );
};