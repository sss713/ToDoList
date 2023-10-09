import pg from 'pg';
import config from 'config';

const { Pool } = pg;

const pool = new Pool(config.get('db'))

export default pool;



