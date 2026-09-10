import pool from './db.js';

async function teste(){
  try{
    const res = await pool.query('SELECT * FROM equipamentos;');
    console.log('conexão ok');
    console.table(res.rows);
  }catch (err) {
    console.error('erro', err.message);
  }await pool.end();
  }

teste();