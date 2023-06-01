import express, {NextFunction, Request, Response} from 'express'

const app = express()

const port = process.env.PORT || 3300

let blablaMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    req.blabla = "Hello";
    next();
}

app.get('/products', blablaMiddleware, (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla + "!!!!"})
})

app.get('/users', blablaMiddleware, (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla + "from users!!!!"})
})

//start app
app.listen(port, () => {
    console.log('Example app listening on port: ${port}')
})
