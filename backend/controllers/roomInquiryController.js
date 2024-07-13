const RoomInquiry = require("../models/RoomInquiry");

const createRoomInquiry = async (req, res) => {
  try {
    const {
      studentId,
      roomId,
      inquireType,
      inquiriesCategory,
      contactNumber,
      reason,
      studentEmail
    } = req.body;

    const newRoomInquiry = new RoomInquiry({
      studentId,
      roomId,
      inquireType,
      inquiriesCategory,
      contactNumber,
      reason,
      studentEmail
    });

    await newRoomInquiry.save();
    res.status(201).json(newRoomInquiry);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" + error?.message });
  }
};

const getAllRoomInquiries = async (req, res) => {
  try {
    const inquiries = await RoomInquiry.find({});
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getRoomInquiryById = async (req, res) => {
  try {
    const inquiry = await RoomInquiry.findById(req.params.id);
    if (!inquiry) {
      res.status(404).json({ error: "Inquiry not found" });
    } else {
      res.status(200).json(inquiry);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateRoomInquiry = async (req, res) => {
  try {
    const { status } = req.body; 

    const inquiry = await RoomInquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true } 
    );

    if (!inquiry) {
      res.status(404).json({ error: "Inquiry not found" });
    } else {
      res.status(200).json(inquiry);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteRoomInquiry = async (req, res) => {
  try {
    const inquiry = await RoomInquiry.findById(req.params.id);

    if (!inquiry) {
      res.status(404).json({ error: "Inquiry not found" });
    } else {
      await inquiry.deleteOne();
      res.status(200).json({ message: "Inquiry deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createRoomInquiry,
  getAllRoomInquiries,
  getRoomInquiryById,
  updateRoomInquiry,
  deleteRoomInquiry,
};
