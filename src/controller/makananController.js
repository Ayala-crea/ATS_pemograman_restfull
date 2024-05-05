const dataMakanan = require("../model/makanan");

const getAllMakanan = async (req, res) => {
  try {
    const [data] = await dataMakanan.getAllMakanan();
    res.status(200).json({
      message: "Data retrieval success",
      data: data,
    });
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const createDataMakanan = async (req, res) => {
  const { body } = req;
  try {
    await dataMakanan.createDataMakanan(body);
    res.json({
      message: "post new user method berhasi",
      data: body,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getMakananById = async (req, res) => {
  const { Id } = req.params;
  try {
    const [data] = await dataMakanan.getDataMakananById(Id);
    res.status(200).json({
      message: "data berhasil ditemukan",
      data: data,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const deleteDataMakanan = async (req, res) => {
  const { Id } = req.params;
  try {
    const [data] = await dataMakanan.deleteDataMakanan(Id);
    res.status(200).json({
      message: "data berhasil ditemukan",
      data: data,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const updateDataMakanan = async (req, res) => {
  const { Id } = req.params;
  const { body } = req;
  try {
    const [newData] = await dataMakanan.updateDataMakanan(Id, body);
    res.status(200).json({
        message: "data Berhasil di update",
        data: body
    })
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllMakanan,
  createDataMakanan,
  getMakananById,
  deleteDataMakanan,
  updateDataMakanan
};
