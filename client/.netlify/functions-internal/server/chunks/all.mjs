import { d as defineEventHandler } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const all = defineEventHandler(async () => {
  try {
    const response = await $fetch(`${process.env.API_ENDPOINT}/albums`);
    return response;
  } catch (error) {
    console.error("Error fetching all albums", error);
    return error;
  }
});

export { all as default };
//# sourceMappingURL=all.mjs.map
