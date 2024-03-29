import { type User } from '@/types'
import { useSessionStorage } from '@vueuse/core'
import { defineStore, skipHydrate } from 'pinia'
import axios from 'axios'
 
export const useUserStore = defineStore('user', () => {
  // State
  const userDefaults: User = { id: 0, name: '', image: '/image'}
  const user = useSessionStorage<User>('user', userDefaults)
  const users = shallowRef<User[]>([])
  const isUsersData = ref<boolean>(false)
  const sbClient = useSupabaseClient()

  // Actions
  async function signUp(name: string, password: string): Promise<boolean | undefined> {
    try {
      const response = await $fetch<User>('/api/auth/sign-up', {
        method: 'POST',
        body: {
          name: name,
          password: password
        }
      })

      if (response) {
        const image = await getUserImage(response.id.toString())
      
        user.value = {
          id: response.id,
          name: response.name,
          image: image !== undefined ? image : '/image'
        }

        return true
      } else return undefined
    } catch (error) {
      console.error('Error signing up', error)
    }
  }

  async function signIn(name: string, password: string): Promise<boolean | undefined> {
    try {
      const response = await $fetch<User>('/api/auth/sign-in', {
        method: 'POST',
        body: {
          name: name,
          password: password
        }
      })
      
      if (response) {
        const image = await getUserImage(response.id.toString())
      
        user.value = {
          id: response.id,
          name: response.name,
          image: image !== undefined ? image : '/image'
        }

        return true
      } else return undefined

    } catch (error) {
      console.error('Error signing in', error)
    }
  }

  async function getAllUsers() {
    try {
      const response = await $fetch<User[]>('/api/users/all')
      if (response.length > 0 && response !== undefined) {
        isUsersData.value = true
        const allUsers: User[] = []

        for (let i = 0; i < response.length; i++) {
          const image = await getUserImage(response[i].id.toString())
          const updatedUser: User = {
            id: response[i].id,
            name: response[i].name,
            image: image !== undefined ? image : '/image'
          }
          allUsers.push(updatedUser)
        }

        users.value = allUsers
      }
    } catch (error) {
      console.error('Error getting all users', error)
    }
  }

  async function getUserByName(name: string) {
    try {
      const response = await $fetch<User>(`/api/users/${name}`)
      const image = await getUserImage(response.id.toString())

      return {
        id: response.id,
        name: response.name,
        image: image !== undefined ? image : '/image'
      }

    } catch (error) {
      console.error(`Error getting user ${name}`)
    }
  }

  async function getUserImage(id: string): Promise<string | undefined> {
    try {
      const { data: imageUrl } = sbClient.storage.from('users').getPublicUrl(id)
      const response = await axios.get(imageUrl.publicUrl)
        .catch((error) => {
          if (error) return undefined
        })
    
      if (response?.status === 200) return imageUrl.publicUrl
      else return undefined
    } catch (error) {
      return undefined
    }
  }
    
  async function updateUser(name?: string) {
    try {
      if(user.value.name !== '' && user.value.id !== 0) {
        const image = await getUserImage(user.value.id.toString())

        if(name) {
          user.value = {
            id: user.value.id,
            name: name,
            image: image !== undefined ? image : '/image'
          }
        } else {
          user.value = {
            id: user.value.id,
            name: user.value.name,
            image: image !== undefined ? image : '/image'
          }
        }

      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    user: skipHydrate(user),
    users,
    isUsersData,
    signUp,
    signIn,
    getAllUsers,
    updateUser,
    getUserByName
  }
})