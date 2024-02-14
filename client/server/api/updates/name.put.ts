export default defineEventHandler(async (event) => {
  const body: { user_id: number, name: string } = await readBody(event)
  try {
    await $fetch(`http://api:3001/users/name/${body.user_id}`, {
      method: 'PUT',
      body: {
        name: body.name
      }
    })
  } catch (error) {
    console.error('Error updating name in nuxt server', error)
  }
})