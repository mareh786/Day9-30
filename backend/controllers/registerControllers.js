import { insertVisitor, fetchVisitorsInside } from '../models/registerModel.js';

export const registerVisitor = async (req, res) => {
  const { name, age, visitingTo, inTime, outTime } = req.body;

  if (!name || !age || !visitingTo || !inTime || !outTime) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const result = await insertVisitor({ name, age, visitingTo, inTime, outTime });
    res.status(201).json({ message: 'Visitor registered successfully.', id: result.insertId });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(409).json({ message: 'Visitor with same name and age already exists at this time.' });
    } else {
      res.status(500).json({ message: 'Server error.' });
    }
  }
};

export const getVisitorsInside = async (req, res) => {
  try {
    const visitors = await fetchVisitorsInside();
    res.status(200).json(visitors);
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
};
