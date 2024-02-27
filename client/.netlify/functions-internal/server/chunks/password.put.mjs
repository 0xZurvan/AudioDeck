import { d as defineEventHandler, r as readBody } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const password_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    await $fetch(`${process.env.API_ENDPOINT}/users/password/${body.user_id}`, {
      method: "PUT",
      body: {
        password: body.password
      }
    });
  } catch (error) {
    console.error("Error updating password in nuxt server", error);
  }
});

export { password_put as default };
//# sourceMappingURL=password.put.mjs.map
