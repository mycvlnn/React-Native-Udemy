import { RootStackParamList } from './types'

type Entries<T> = {
  [K in keyof T]: K
}

export const routes: Entries<RootStackParamList> = {
  AddPlace: 'AddPlace',
  AllPlaces: 'AllPlaces'
}
