import { _ as __nuxt_component_0 } from './nuxt-link-wL9bDRg-.mjs';
import { h as useUserStore, s as storeToRefs, _ as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import 'axios';
import '@vueuse/core';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArtistCard",
  __ssrInlineRender: true,
  props: {
    artistName: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}>`);
      if (_ctx.image !== "/image") {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: _ctx.image,
          placeholder: [20, 20, 75, 5],
          class: "w-[min(20vw)] h-[min(20vw)] hover:shadow-xl rounded-lg"
        }, null, _parent));
      } else {
        _push(`<div class="rounded-lg bg-neutral-950 w-[min(20vw)] h-[min(20vw)] hover:shadow-xl"></div>`);
      }
      _push(`<p class="text-base font-medium text-white text-pretty">${ssrInterpolate(_ctx.artistName)}</p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/ArtistCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { users } = storeToRefs(userStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ArtistCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none" }, _attrs))}><div class="flex flex-col space-y-10 w-[min(84vw)]"><h1 class="text-xl font-bold text-white">Artists</h1><ul class="grid justify-between grid-cols-4 gap-4">`);
      if (unref(users).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(users), (user) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/artists/" + (user ? user.name : "")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_ArtistCard, {
                  artistName: user.name,
                  image: user.image
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_ArtistCard, {
                    artistName: user.name,
                    image: user.image
                  }, null, 8, ["artistName", "image"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(10, (_, index) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_ArtistCard, {
            artistName: "Empty",
            image: "/image"
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artists/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-xgCWnQzs.mjs.map
