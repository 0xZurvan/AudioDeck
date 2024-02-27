import { _ as __nuxt_component_0 } from './nuxt-link-wL9bDRg-.mjs';
import { g as useAlbumStore, s as storeToRefs, _ as __nuxt_component_0$1 } from '../server.mjs';
import { cva } from 'class-variance-authority';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { c as cn } from './utils-K0wkNaQD.mjs';
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
import 'clsx';
import 'tailwind-merge';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(unref(badgeVariants)({ variant: _ctx.variant }), (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/badge/Badge.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-zinc-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/80",
        secondary: "border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
        destructive: "border-transparent bg-red-500 text-zinc-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/80",
        outline: "text-zinc-950 dark:text-zinc-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlbumCard",
  __ssrInlineRender: true,
  props: {
    albumName: {},
    artistName: {},
    category: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_Badge = _sfc_main$2;
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
      _push(`<div class="flex flex-row items-start justify-between"><div class="flex flex-col"><p class="text-base font-medium text-white text-pretty">${ssrInterpolate(_ctx.albumName)}</p><p class="text-sm font-thin text-white text-opacity-70 text-italic text-pretty">${ssrInterpolate(_ctx.artistName)}</p></div>`);
      _push(ssrRenderComponent(_component_Badge, {
        class: "text-sm text-green-500 rounded-full w-fit text-pretty",
        variant: "outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.category)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.category), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/AlbumCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const albumStore = useAlbumStore();
    const { albums } = storeToRefs(albumStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AlbumCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start bg-s-dark w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none rounded-lg" }, _attrs))}><div class="flex flex-col space-y-10 w-[min(84vw)]"><h1 class="text-xl font-bold text-white">Albums</h1><ul class="grid justify-between grid-cols-4 gap-4">`);
      if (unref(albums).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(albums), (album) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/albums/" + (album ? album.id : "0")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_AlbumCard, {
                  albumName: album.title,
                  artistName: album.user_name,
                  image: album.image,
                  category: album.category
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_AlbumCard, {
                    albumName: album.title,
                    artistName: album.user_name,
                    image: album.image,
                    category: album.category
                  }, null, 8, ["albumName", "artistName", "image", "category"])
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
          _push(ssrRenderComponent(_component_AlbumCard, {
            albumName: "Empty",
            artistName: "None",
            image: "/image",
            category: "None"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-QqLSwQVP.mjs.map
