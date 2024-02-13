import { type User } from '@/types'
import { useSessionStorage } from '@vueuse/core'
import { defineStore, skipHydrate } from 'pinia'
import axios from 'axios'
 
export const useUserStore = defineStore('user', () => {
  // State
  const userDefaults: User = { id: 0, name: '', image: ''}
  const user = useSessionStorage<User>('user', userDefaults)
  const users = shallowRef<User[]>([])
  const sbClient = useSupabaseClient()

  const isImage = computed(() => {
    return user.value.image !== '' && typeof user.value.image === 'string' ? user.value.image : '/image'
  })

  // Actions
  async function signUp(name: string, password: string) {
    try {
      const response = await $fetch<User>('/api/auth/sign-up', {
        method: 'POST',
        body: {
          name: name,
          password: password
        }
      })

      if (response) {
        const { data: imageUrl } = sbClient.storage.from('users').getPublicUrl(response.id.toString())
        user.value = {
          id: response.id,
          name: response.name,
          image: imageUrl.publicUrl
        }
      }
    } catch (error) {
      console.error('Error signing up', error)
    }
  }

  async function signIn(name: string, password: string) {
    try {
      const response = await $fetch<User>('/api/auth/sign-in', {
        method: 'POST',
        body: {
          name: name,
          password: password
        }
      })
      
      if (response) {
        const { data: imageUrl } = sbClient.storage.from('users').getPublicUrl(`${response.id}`)
      
        user.value = {
          id: response.id,
          name: response.name,
          image: imageUrl.publicUrl
        }
      }

    } catch (error) {
      console.error('Error signing in', error)
    }
  }

  async function getAllUsers() {
    try {
      const response = await $fetch<User[]>('/api/users/all')
      if (response !== undefined) {
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
        console.error('Error getting all users', error);
    }
  }

  async function getUserImage(id: string): Promise<string | undefined> {
    try {
      const { data: imageUrl } = sbClient.storage.from('users').getPublicUrl(id)
      const response = await axios.get(imageUrl.publicUrl)
      .catch((error) => {
        if (error) return undefined
      })

      if (response?.status === 200) {
        return imageUrl.publicUrl
      } else {
        return undefined
      }
    } catch (error) {
      return undefined
    }
  }
    
  function updateUser(name?: string) {
    try {
      if(user.value.name !== '' && user.value.image !== '') {
        const { data: imageUrl } = sbClient.storage.from('users').getPublicUrl(`${user.value.id}`)
        if(name) {
          user.value = {
            id: user.value.id,
            name: name,
            image: imageUrl.publicUrl
          }
        } else {
          user.value = {
            id: user.value.id,
            name: user.value.name,
            image: imageUrl.publicUrl
          }
        }

      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    user: skipHydrate(user),
    users: skipHydrate(users),
    isImage,
    signUp,
    signIn,
    getAllUsers,
    updateUser
  }
})