import { User, UserCredentials } from '@/types'

export default defineEventHandler(async (event) => {
  const body: UserCredentials = await readBody(event)
  try {
    const user = await $fetch<User>(`${process.env.API_ENDPOINT}/auth/sign-up`, {
      method: 'POST',
      body: {
        name: body.name,
        password: body.password
      }
    })

    return {
      id: user.id,
      name: user.name
    }

  } catch (error) {
    console.error('Error creating new user account', error)
  }
})