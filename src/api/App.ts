import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from '../routes'
import Dotenv from '../config/Dotenv'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () {
    mongoose.connect(Dotenv.DATABASE_URI)
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App().express
