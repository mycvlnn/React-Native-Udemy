import { Ionicons } from '@expo/vector-icons'

interface Profile {
  name: string
  nameIcon: keyof typeof Ionicons.glyphMap
  id: number
}
export const PROFILE: {
  system: Profile[]
  personal: Profile[]
  setting: Profile[]
} = {
  system: [
    {
      id: 1,
      name: 'Wishlists',
      nameIcon: 'heart'
    },
    {
      id: 2,
      name: 'Wishlists',
      nameIcon: 'list'
    },
    {
      id: 3,
      name: 'Notification',
      nameIcon: 'notifications'
    }
  ],
  personal: [
    {
      id: 1,
      name: 'Profile',
      nameIcon: 'person'
    },
    {
      id: 2,
      name: 'Payment',
      nameIcon: 'card'
    },
    {
      id: 3,
      name: 'Address',
      nameIcon: 'location'
    },
    {
      id: 4,
      name: 'Coupons & Points',
      nameIcon: 'gift'
    }
  ],
  setting: [
    {
      id: 1,
      name: 'Languages',
      nameIcon: 'language'
    },
    {
      id: 2,
      name: 'Setting',
      nameIcon: 'settings'
    }
  ]
}
