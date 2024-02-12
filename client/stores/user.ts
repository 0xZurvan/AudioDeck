import { type User } from '@/types'
import { useSessionStorage } from '@vueuse/core'
import { defineStore, skipHydrate  } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // State
  const userDefaults: User = { id: 0, name: '', image: ''}
  const user = useSessionStorage<User>('user', userDefaults)
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
    isImage,
    signUp,
    signIn,
    updateUser
  }
})