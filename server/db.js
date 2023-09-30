import Pool from ('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "ToDoList",
    host: "localhost",
    port: 5432,
    database: "ToDoList"
})

module.exports = pool;



