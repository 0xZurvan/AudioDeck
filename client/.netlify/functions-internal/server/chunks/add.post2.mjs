import { d as defineEventHandler, r as readBody } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const add_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const response = await $fetch(`${process.env.API_ENDPOINT}/playlists`, {
      method: "POST",
      body: {
        name: body.name,
        user_id: Number(body.user_id)
      }
    });
    return response;
  } catch (error) {
    console.error("Error adding new playlist in nuxt server", error);
  }
});

export { add_post as default };
//# sourceMappingURL=add.post2.mjs.map
