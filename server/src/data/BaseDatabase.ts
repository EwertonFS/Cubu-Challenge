import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

//oque é uma classe abtrata? classe que não pode ser instanciada
export abstract class BaseDatabase{
    static connection = knex({
        client: 'mysql',
        connection: {
           host: process.env.DB_HOST,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           database: process.env.DB_DATABASE_NAME ,
           port: 3306,
           multipleStatements: true
        }
     })
     
     closeConnection = () => {
      BaseDatabase.connection.destroy()
  }
}