import { createConnection } from 'typeorm'

createConnection({
    type: 'mssql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        process.env.TYPEORM_ENTITIES
    ] 
})