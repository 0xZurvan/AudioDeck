import { d as defineEventHandler, r as readBody } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const signUp_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const user = await $fetch(`${process.env.API_ENDPOINT}/auth/sign-up`, {
      method: "POST",
      body: {
        name: body.name,
        password: body.password
      }
    });
    return {
      id: user.id,
      name: user.name
    };
  } catch (error) {
    console.error("Error creating new user account", error);
  }
});

export { signUp_post as default };
//# sourceMappingURL=sign-up.post.mjs.map
