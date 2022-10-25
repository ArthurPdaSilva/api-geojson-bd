import { Request, Response } from 'express'
import GeoData from '../schemas/GeoData'

class GeoDataController {
  public async read (req: Request, res: Response): Promise<Response> {
    const data = await GeoData.find()
    if (data) return res.json(data)
    return res.json({ message: 'Não tem localizações cadastradas' })
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const trash = await GeoData.findByIdAndDelete({ _id: req.params.id })
    if (trash) return res.json({ message: 'Localização encontrada!' })
    return res.json({ message: 'Localização não encontrada!' })
  }

  public async create (req: Request, res: Response): Promise<Response> {
    console.log(req.body)
    const location = await GeoData.create(req.body)
    return res.json(location)
  }
}

export default new GeoDataController()
