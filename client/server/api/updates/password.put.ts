export default defineEventHandler(async (event) => {
  const body: { userId: number, password: string } = await readBody(event)
  try {
    await $fetch(`http://api:3001/users/password/${body.userId}`, {
      method: 'PUT',
      body: {
        password: body.password
      }
    })
  } catch (error) {
    console.error('Error updating password in nuxt server', error)
  }
})