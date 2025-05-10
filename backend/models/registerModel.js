const db = import('../db');

const Register = {
  findConflict: (data, cb) => {
    db.query(
      'SELECT * FROM entries WHERE name = ? AND age = ? AND in_time = ?',
      [data.name, data.age, data.in_time],
      cb
    );
  },

  create: (data, cb) => {
    db.query('INSERT INTO entries SET ?', data, cb);
  },

  getAll: (cb) => {
    db.query('SELECT * FROM entries', cb);
  },

  getInside: (cb) => {
    db.query('SELECT * FROM entries WHERE out_time IS NULL OR out_time = ""', cb);
  }
};

module.exports = Register;
