class Meal {
  id: string
  categoryIds: string[]
  title: string
  affordability: string
  complexity: string
  imageUrl: string
  duration: number
  ingredients: string[]
  steps: string[]
  isGlutenFree: boolean
  isVegan: boolean
  isVegetarian: boolean
  isLactoseFree: boolean
  rating: number
  address: string

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean,
    rating: number,
    address: string
  ) {
    this.id = id
    this.categoryIds = categoryIds
    this.title = title
    this.imageUrl = imageUrl
    this.ingredients = ingredients
    this.steps = steps
    this.duration = duration
    this.complexity = complexity
    this.affordability = affordability
    this.isGlutenFree = isGlutenFree
    this.isVegan = isVegan
    this.isVegetarian = isVegetarian
    this.isLactoseFree = isLactoseFree
    this.rating = rating
    this.address = address
  }
}

export default Meal
