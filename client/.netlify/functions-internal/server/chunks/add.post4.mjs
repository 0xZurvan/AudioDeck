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
    const response = await $fetch(`${process.env.API_ENDPOINT}/songs`, {
      method: "POST",
      body: {
        title: body.title,
        user_id: body.user_id,
        album_id: body.album_id
      }
    });
    return response;
  } catch (error) {
    console.error("Error adding new album:", error);
    return error;
  }
});

export { add_post as default };
//# sourceMappingURL=add.post4.mjs.map
