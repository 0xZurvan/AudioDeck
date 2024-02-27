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
    const response = await $fetch(`${process.env.API_ENDPOINT}/albums/${id}`);
    return response;
  } catch (error) {
    console.error(`Error fetching album id: ${id}`, error);
    return error;
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
