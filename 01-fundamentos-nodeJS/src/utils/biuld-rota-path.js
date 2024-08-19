
// /users/:id
export function buildRoutePath(path){

    const routeParametersRegex = /:([a-zA-Z] + )/

    console.log (Array.from(path.mathAll(routeParametersRegex)))
}