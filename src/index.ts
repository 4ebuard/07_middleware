import express, {NextFunction, Request, Response} from 'express'

const app = express()

const port = process.env.PORT || 3300

app.get('/products', (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    req.blabla = "Hello";
    next();
}, (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla + "!!!!"})
})

//start app
app.listen(port, () => {
    console.log('Example app listening on port: ${port}')
})
