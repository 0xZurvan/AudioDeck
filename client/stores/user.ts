import { type User } from '@/types'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // State
  const user = shallowRef<User | undefined>(undefined)
  const sbClient = useSupabaseClient()

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
        const { data: imageUrl } = sbClient.storage.from('users').getPublicUrl(response.name)
        user.value = {
          id: response.id,
          name: response.name,
          image: imageUrl.publicUrl
        }
        console.log('user', user.value)
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
        const { data: imageUrl } = sbClient.storage.from('users').getPublicUrl(response.name)
      
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

  return {
    user,
    signUp,
    signIn
  }
})