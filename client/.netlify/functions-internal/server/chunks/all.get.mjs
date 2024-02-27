import { d as defineEventHandler } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const all_get = defineEventHandler(async () => {
  try {
    const response = await $fetch(`${process.env.API_ENDPOINT}/users`);
    if (response.length > 0)
      return response;
    else
      return void 0;
  } catch (error) {
    console.error("Error fetching users:", error);
    return error;
  }
});

export { all_get as default };
//# sourceMappingURL=all.get.mjs.map
