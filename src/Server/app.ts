import express, { response } from 'express'
import * as dotenv from "dotenv";
import {db} from "../Config/db.config"
import {router} from '../Routes/post.routes'
dotenv.config()
const port = process.env.PORT

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', router)

db.then(() => {
    app.listen(port, () => console.log('Server is listening on port 3000'))
})


// app.listen(port,()=>{
//     console.log(`Server running ::: on port ${port}`)
// })
// axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>{
//         console.log(response)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//     .finally(()=>{
//         console.log("END of axios call")
//     })
