import express, { Request, Response } from 'express'

const app = express()

const port = 5006

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req: Request, res: Response) => {
    res.send('ping')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port} !`)
})
