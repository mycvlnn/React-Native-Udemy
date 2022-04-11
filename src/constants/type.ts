//Link reference: https://reactnavigation.org/docs/typescript/#type-checking-the-navigator

//Define an object type with mappings for route name to the params of the route.
export type RootStackParamList = {
  Categories: undefined
  Meals: {
    categoryId: string
  }
}
