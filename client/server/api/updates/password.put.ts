export default defineEventHandler(async (event) => {
  const body: { user_id: number, password: string } = await readBody(event)
  try {
    await $fetch(`${process.env.API_ENDPOINT}/users/password/${body.user_id}`, {
      method: 'PUT',
      body: {
        password: body.password
      }
    })
  } catch (error) {
    console.error('Error updating password in nuxt server', error)
  }
})