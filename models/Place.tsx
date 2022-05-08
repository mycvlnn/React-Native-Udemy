type Location = {
  lat: number //latitude
  long: number //longitude
}
export class Place {
  title: string
  imageUri: any
  address: string
  location: Location
  id: string

  constructor(
    title: string,
    imageUri: any,
    location: Location,
    address: string
  ) {
    this.title = title
    this.imageUri = imageUri
    this.address = address
    this.location = location
    this.id = new Date().toString() + Math.random().toString()
  }
}
