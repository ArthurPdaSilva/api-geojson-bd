import { Schema, model } from 'mongoose'

const polygonSchema = new Schema({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true
  },
  coordinates: {
    type: [[[Number]]],
    required: true
  }
})

type GeoData = {
    name: string;
    location: typeof polygonSchema;
}

const GeoDataSchema = new Schema({
  name: String,
  location: polygonSchema
})

export default model<GeoData>('GeoData', GeoDataSchema)
