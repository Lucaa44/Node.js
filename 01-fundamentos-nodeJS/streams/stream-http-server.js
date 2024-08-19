import http, { request } from 'node:http'
import { Transform } from 'node:stream'

class InverterVAllorNUmero extends Transform{
    _transform(chunck, encoding, callback) {
        const transformed = Number(chunck.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

const server = http.createServer(async(request,response) => {
    const buffers =[]

    for await(const chunck of request){
        buffers.push(chunck)
    }

    

    const fullbody = Buffer.concat(buffers).toString()
    console.log (fullbody)

    return response.end(fullbody)

    /*return request
    .pipe (new InverterVAllorNUmero())

    .pipe (response)
 */
})
server.listen(3334)