import { d as defineEventHandler, r as readBody } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const name_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    await $fetch(`${process.env.API_ENDPOINT}/users/name/${body.user_id}`, {
      method: "PUT",
      body: {
        name: body.name
      }
    });
  } catch (error) {
    console.error("Error updating name in nuxt server", error);
  }
});

export { name_put as default };
//# sourceMappingURL=name.put.mjs.map
