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
    const response = await $fetch(`${process.env.API_ENDPOINT}/playlists/songs/${playlistId}`);
    return {
      songs: response.songs,
      playlist: response.playlist
    };
  } catch (error) {
    console.error(`Error fetching playlist songs from id: ${playlistId} in nuxt server`, error);
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get4.mjs.map
