const Report = require("../models/reportModel");
const fs = require("fs");
const path = require("path");
const User = require("../models/userModel");
const Student = require("../models/studentProfile");

/*ADD REPORT */
const addReport = async (req, res) => {
  try {
    const { title, description, receiver } = req.body;

    let reportPhoto;

    if (req.file) {
      reportPhoto = req.file.filename;
    }
    const student = await Student.findOne({ email: req.user.email });

    const reportDoc = await Report.create({
      title,
      description,
      author: student._id,
      photo: reportPhoto,
      receiver,
    });

    if (reportDoc) {
      return res
        .status(200)
        .json({ message: "Report edded successfully", reportDoc });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `Error occured ${error}` });
  }
};

/* STUDENT CAN GET OWN REPORT */
const getReport = async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.user.email });
    const reportDoc = await Report.find({ author: student._id });
    if (reportDoc) {
      return res.status(200).json(reportDoc);
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* MANAGER AND ACCOUNTANT CAN SEE STUDENT'S REPORT */
const getReports = async (req, res) => {
  try {
    // console.log(req.user);
    const reports = await Report.find({ receiver: req.user.role }).populate(
      "author"
    );
    return res.status(200).json(reports);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

const markedAsReadReport = async (req, res) => {
  try {
    const { id } = req.params;
    const reportDoc = await Report.findById(id);
    if (!reportDoc) {
      return res.status(404).json({ message: "Report not found" });
    }

    if (reportDoc.receiver !== req.user.role) {
      return res.status(401).json({ message: "Authorization failed" });
    }

    reportDoc.isMarkedRead = true;
    reportDoc.save();

    return res.status(200).json({ message: "Report marked as read" });
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* MANAGER AND ACCOUNTANT CAN MARK AS READ STUDENT'S REPORT */
const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    const reportDoc = await Report.findById(id);
    if (!reportDoc) {
      return res.status(404).json({ message: "Report not found" });
    }

    if (reportDoc.receiver !== req.user.role) {
      return res.status(401).json({ message: "Authorization failed" });
    }

    // Delete previous Report photo
    if (reportDoc.photo) {
      const filePath = path.join("uploadsReport", reportDoc.photo);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log("Error deleting previous profile photo:", err);
        }
      });
    }

    await Report.deleteOne({ _id: id });
    return res.status(200).json({ message: "Report deleted" });
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

module.exports = {
  addReport,
  getReport,
  getReports,
  deleteReport,
  markedAsReadReport
};
