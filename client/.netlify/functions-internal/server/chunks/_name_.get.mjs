import { d as defineEventHandler, g as getRouterParam } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const _name__get = defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  try {
    const user = await $fetch(`${process.env.API_ENDPOINT}/users/${name}`);
    return user;
  } catch (error) {
    console.error("Error fetching users:", error);
    return error;
  }
});

export { _name__get as default };
//# sourceMappingURL=_name_.get.mjs.map
