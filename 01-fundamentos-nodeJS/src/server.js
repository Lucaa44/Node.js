import http  from 'node:http'

import { json } from './middlewares/json.js'
import { rotas } from './middlewares/rotas.js'






const users = []

const server = http.createServer(async(request, response)=>{
    
    const {method, url} = request

    await json(request,response)
     
    
    const rota = rotas.find(rota =>{
        return rota.method == method && rota.path == url
    })

   if(rota){
    return rota.handler(request,response)
   }

    return response.writeHead(404).end()

})


server.listen(3333)