const mysql = require("mysql2");

const dataBaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const dbConnection = mysql.createConnection({
  ...dataBaseConfig,
  database: "",
});

//susikuriam DB
dbConnection.query("CREATE DATABASE IF NOT EXISTS blog_posts", function (err) {
  if (err) throw err;
  console.log("Database blog_posts created");

  dbConnection.query("USE blog_posts", (err) => {
    if (err) throw err;

    const blogTableQuery = `
            CREATE TABLE IF NOT EXISTS
            posts (
                id INT NOT NULL AUTO_INCREMENT,
                title VARCHAR(100) NOT NULL,
                description VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                primary key (id)
            )
        `;

    dbConnection.query(blogTableQuery, function (err) {
      if (err) throw err;
      console.log("Posts Table created");
    });
  });
});

module.exports = {
  dbConnection,
};
