import express, {NextFunction, Request, Response} from 'express'

const app = express()

const port = process.env.PORT || 3300

const blablaMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    if (req.query.token === "123") {
    next();
    } else { res.send(401)
    }
}

const authGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    req.blabla = "Hello";
    next();
}

let requestCounter = 0

const requestCounterMeddleware = (req: Request, res: Response, next: NextFunction) => {
    requestCounter++;
    next()
}

app.use(requestCounterMeddleware)
app.use(blablaMiddleware)
app.use(authGuardMiddleware)

app.get('/products', (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla + "!!!! " + requestCounter})
})

app.get('/users', (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla + " from users!!!! " + requestCounter})
})

//start app
app.listen(port, () => {
    console.log('Example app listening on port: ${port}')
})
