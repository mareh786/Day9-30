const Register = require('../models/registerModel');

exports.registerEntry = (req, res) => {
  const { name, age, visiting_to, in_time, out_time } = req.body;

  if (!name || !age || !visiting_to || !in_time) {
    return res.status(400).json({ msg: 'Missing required fields' });
  }

  Register.findConflict({ name, age, in_time }, (err, rows) => {
    if (err) return res.status(500).json(err);

    if (rows.length > 0) {
      return res.status(400).json({ msg: 'Conflict: Entry already exists' });
    }

    Register.create({ name, age, visiting_to, in_time, out_time }, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: result.insertId, ...req.body });
    });
  });
};

exports.getAllEntries = (req, res) => {
  Register.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getInside = (req, res) => {
  Register.getInside((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
