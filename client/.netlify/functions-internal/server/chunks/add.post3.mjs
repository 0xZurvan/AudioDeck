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
    const response = await $fetch(`${process.env.API_ENDPOINT}/playlists/song`, {
      method: "POST",
      body: {
        playlist_id: body.playlist_id,
        song_id: body.song_id
      }
    });
    return response;
  } catch (error) {
    console.error("Error adding new song to playlist in nuxt server:", error);
    return error;
  }
});

export { add_post as default };
//# sourceMappingURL=add.post3.mjs.map
