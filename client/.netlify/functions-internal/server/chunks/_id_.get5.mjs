import { d as defineEventHandler, g as getRouterParam } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const _id__get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  try {
    const playlists = await $fetch(`${process.env.API_ENDPOINT}/playlists/user/${id}`);
    return playlists;
  } catch (error) {
    console.error(`Error getting playlists from user id: ${id} in nuxt server`, error);
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get5.mjs.map
