import fs from 'node:fs/promises'

const databasePath = new URL('db.json',import.meta.url)



export class DataBase {
    #database = {}

    construtor(){
        fs.readFile(databasePath, 'utf-8'),then(data =>{
            this.#database = JSON(data)
        })
        .catch(()=>{
            this.#persist()
        })
    }

    #persist(){
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table){
        const data = this.#database[table] ?? []

        return data

    }

    insert(table, data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        }else{
            this.#database[table] = [data]
        }

        return data;
    }
}