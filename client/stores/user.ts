import { type User } from '@/types'
import { useSessionStorage } from '@vueuse/core'
import { defineStore, skipHydrate } from 'pinia'
import axios from 'axios'
 
export const useUserStore = defineStore('user', () => {
  // State
  const userDefaults: User = { id: 0, name: '', image: ''}
  const user = useSessionStorage<User>('user', userDefaults)
  const users = ref<User[]>([])
  const sbClient = useSupabaseClient()


  watch(user.value, () => {
    updateUser()
  }, { immediate: true })

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
        for (let i = 0; i < response.length; i++) {
          const image = await getUserImage(response[i].id.toString())
          if (image !== undefined) {
              users.value[i] = {
                id: response[i].id,
                name: response[i].name,
                image: image
              }
          } else {
              users.value[i] = {
                id: response[i].id,
                name: response[i].name,
                image: '/image'
              }
          }
        }
      }
    } catch (error) {
        console.log('Error getting all users', error);
    }
  }

  async function getUserImage(id: string): Promise<string | undefined> {
    try {
      const { data: imageUrl } = sbClient.storage.from('users').getPublicUrl(id);
  
      if (typeof imageUrl.publicUrl === 'string') {
        try {
          const response = await axios.get(imageUrl.publicUrl)

          if (response.status === 200) {
            return imageUrl.publicUrl
          } else {
            return undefined
          }
        } catch (error) {
          return undefined
        }
      } 
    } catch (error) {
      console.error('Error getting user image:', error)
    }
  }

  function updateUser() {
    try {
      if(user.value.name !== '' && user.value.image !== '') {
        const { data: imageUrl } = sbClient.storage.from('users').getPublicUrl(`${user.value.id}`)
        user.value = {
          id: user.value.id,
          name: user.value.name,
          image: imageUrl.publicUrl
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