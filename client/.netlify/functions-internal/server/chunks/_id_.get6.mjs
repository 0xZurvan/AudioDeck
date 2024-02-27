import { d as defineEventHandler, g as getRouterParam } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const _id__get = defineEventHandler(async (event) => {
  const albumId = getRouterParam(event, "id");
  try {
    const response = await $fetch(`${process.env.API_ENDPOINT}/songs/album/${albumId}`);
    return {
      songs: response.songs,
      album: response.album
    };
  } catch (error) {
    console.error(`Error fetching songs from album id: ${albumId}`, error);
    return error;
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get6.mjs.map
