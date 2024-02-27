import { d as defineEventHandler, r as readBody } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const remove_delete = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const response = await $fetch(`${process.env.API_ENDPOINT}/playlists/song`, {
      method: "DELETE",
      body: {
        playlist_id: body.playlist_id,
        song_id: body.song_id
      }
    });
    return response;
  } catch (error) {
    console.error("Error removing song from playlist in nuxt server:", error);
    return error;
  }
});

export { remove_delete as default };
//# sourceMappingURL=remove.delete.mjs.map
