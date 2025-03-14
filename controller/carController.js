const carService = require('../services/carService');

exports.createcar = async (req, res) => {
  try {
    // const carData = { ...req.body };
    const carData = { ...req.body, image: req.file.path };
    const car = await carService.createcar(carData);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getcars = async (req, res) => {
  try {
    const cars = await carService.getcars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getcarById = async (req, res) => {
  try {
    const car = await carService.getcarById(req.params.id);
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatecar = async (req, res) => {
  try {
    const updateData = req.file ? { ...req.body, image: req.file.path } : req.body;
    const car = await carService.updatecar(req.params.id, updateData);
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletecar = async (req, res) => {
  try {
    await carService.deletecar(req.params.id);
    res.status(200).json({ message: 'car deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};