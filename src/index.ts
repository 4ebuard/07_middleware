import express, {NextFunction, Request, Response} from 'express'

const app = express()

const port = process.env.PORT || 3300

const blablaMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    req.blabla = "Hello";
    next();
}

app.use(blablaMiddleware)

app.get('/products', (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla + "!!!!"})
})

app.get('/users', (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla + " from users!!!!"})
})

//start app
app.listen(port, () => {
    console.log('Example app listening on port: ${port}')
})
