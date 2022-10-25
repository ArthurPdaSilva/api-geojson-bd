import { Router } from 'express'
import GeoDataController from './controllers/GeoDataController'

const routes = Router()

routes.get('/locations', GeoDataController.read)

routes.post('/add-location', GeoDataController.create)

routes.delete('delete-location/:id', GeoDataController.delete)

export default routes
