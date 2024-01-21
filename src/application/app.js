import "express-async-errors"
import express from 'express'
import { routes } from './routes.js'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import {cors, json} from "./util.js"

const getApp = () => {
    const app = express()

    app.use(helmet())
    app.use(cors)
    app.use(json)
    app.use(morgan('dev'))
    app.use(cookieParser())

    app.use('/api', routes)

    return app

}

export const app = getApp()