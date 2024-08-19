import { buildRoutePath } from '../utils/biuld-rota-path.js'
import { DataBase } from './database.js'
import { randomUUID } from 'node:crypto'


const database = new DataBase()

export const rotas = [

    {
        method : 'GET', 
        path: buildRoutePath ('/users'),
        handler: (request, response) => {
            const users = database.select('users')

            return response.end(JSON.stringify(users))
        }
        
    },

    {
        method : 'POST', 
        path: buildRoutePath ('/users'),
        handler: (request, response) => {
            const{ name, email} = request.body
 
        const user = ({

            id: randomUUID(),
            name,
            email,

        })

        database.insert('users', user)

        return response.writeHead(201).end()
        }

        
        
    },

    {
        method: 'DELETE',
        path: buildRoutePath ('/users/:id'),
        handler: (request, response) => {
            return response.end()

        },
    }
]