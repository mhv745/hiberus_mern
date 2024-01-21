import express from 'express'
import Cors from "cors"


const port = process.env.PORT
const base_url = process.env.BASE_URL

export const cors= Cors({
	origin: `${base_url}${port ? `:${port}` : ""}`,
	credentials: true,
})

export const json = express.json({
    limit: '16mb',
})