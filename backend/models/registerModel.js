import pool from '../db.js';

export const insertVisitor = async ({ name, age, visitingTo, inTime, outTime }) => {
  const sql = `
    INSERT INTO visitors (name, age, visiting_to, in_time, out_time)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await pool.execute(sql, [name, age, visitingTo, inTime, outTime]);
  return result;
};

export const fetchVisitorsInside = async () => {
  const sql = `
    SELECT * FROM visitors
    WHERE NOW() BETWEEN in_time AND out_time
  `;
  const [rows] = await pool.execute(sql);
  return rows;
};
