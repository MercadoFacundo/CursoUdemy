const express = require('express')
const routes = express.Router()

const [dato, setdato] = useState([])
//GET
routes.get("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM SeresVivos', (err, rows) =>{
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})
//POST
routes.post("/", (req, res) => {
    req.getConnection((err, conn, rows) => {
        if (req.body === ''){
            res.send('el animal ya existe')
        }
        else{
            conn.query('INSERT INTO SeresVivos set ?', [req.body], (err, rows) =>{
                if (err) return res.send(err)
                res.json(rows)
                
            })
        }
        
    })
})
//DELETE
routes.delete("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM SeresVivos WHERE id = ?', [req.params.id], (err, rows) =>{
            if (err) return res.send(err)
            res.send('El servivo fue agregado con exito')
        })
    })
})
module.exports = routes