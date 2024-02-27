import { d as defineEventHandler, g as getRouterParam } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const _id__get = defineEventHandler(async (event) => {
  const playlistId = getRouterParam(event, "id");
  try {
    const playlist = await $fetch(`${process.env.API_ENDPOINT}/playlists/${playlistId}`);
    return playlist;
  } catch (error) {
    console.error(`Error fetching playlist id: ${playlistId} in nuxt server`, error);
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get3.mjs.map
