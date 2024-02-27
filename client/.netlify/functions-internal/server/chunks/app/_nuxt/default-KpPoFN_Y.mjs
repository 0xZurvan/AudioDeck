import { _ as __nuxt_component_0 } from './nuxt-link-wL9bDRg-.mjs';
import { useSSRContext, defineComponent, computed, unref, ref, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { e as useRoute, g as useAlbumStore, h as useUserStore, s as storeToRefs, n as navigateTo, j as __nuxt_component_0$2 } from '../server.mjs';
import { ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './Separator-3ZbwNBxK.mjs';
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
import 'radix-vue';
import './utils-K0wkNaQD.mjs';
import 'clsx';
import 'tailwind-merge';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SearchBar",
  __ssrInlineRender: true,
  setup(__props) {
    const results = ref(false);
    const searchQuery = ref("");
    const albumsStore = useAlbumStore();
    const userStore = useUserStore();
    const { albums } = storeToRefs(albumsStore);
    const { users } = storeToRefs(userStore);
    const filteredResults = computed(() => {
      const query = searchQuery.value.toLowerCase().trim();
      const filteredAlbums = query ? albums.value.filter((album) => album.title.toLowerCase().includes(query)) : [];
      const filteredUsers = query ? users.value.filter((user) => user.name.toLowerCase().includes(query)) : [];
      return [...filteredAlbums, ...filteredUsers];
    });
    const getResultValue = (result) => {
      return result.title ? result.title : result.name;
    };
    const getResultRoute = (result) => {
      if (result.title) {
        navigateTo(`/albums/${result.id}`);
        return `/albums/${result.id}`;
      } else if (result.name) {
        navigateTo(`/artists/${result.name}`);
        return `/artists/${result.name}`;
      } else {
        return "/";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-[50]" }, _attrs))}><div class="flex flex-row bg-neutral-950 w-[min(30vw)] h-10 rounded-xl px-4 py-2"><input type="text" class="w-full h-full text-white placeholder-white bg-transparent outline-none placeholder-opacity-70" placeholder="Search album or artist"${ssrRenderAttr("value", unref(searchQuery))}></div>`);
      if (unref(results)) {
        _push(`<div class="flex flex-col absolute bg-neutral-950 w-[min(30vw)] h-fit max-h-[min(12vw)] mt-1 rounded-lg shadow-xl overflow-hidden overflow-y-scroll scrollbar-none"><!--[-->`);
        ssrRenderList(unref(filteredResults), (result) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: result.id,
            to: getResultRoute(result),
            class: "w-full p-2 text-white rounded-lg hover:bg-black hover:bg-opacity-40"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(getResultValue(result))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(getResultValue(result)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SearchBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DesktopNav",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    storeToRefs(userStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchBar = _sfc_main$3;
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center justify-between" }, _attrs))}><div class="flex flex-row space-x-4"><div class="w-32 h-10 rounded-lg bg-neutral-950"></div>`);
      _push(ssrRenderComponent(_component_SearchBar, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/DesktopNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    storeToRefs(userStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start space-y-6" }, _attrs))}><h2 class="text-2xl font-bold text-white">Menu</h2><ul class="flex flex-col space-y-4">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isLoginRoute = computed(() => {
      return route.path !== "/sign-in" && route.path !== "/sign-up" ? true : false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DesktopNav = _sfc_main$2;
      const _component_Separator = _sfc_main$4;
      const _component_Menu = _sfc_main$1;
      _push(`<!--[--><div class="${ssrRenderClass([{ "hidden": !unref(isLoginRoute) }, "flex flex-col gap-4 m-4"])}"><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_DesktopNav, null, null, _parent));
      _push(ssrRenderComponent(_component_Separator, {
        class: "bg-neutral-950",
        orientation: "horizontal"
      }, null, _parent));
      _push(`</div><div class="flex flex-row space-x-2"><div class="flex flex-row space-x-20">`);
      _push(ssrRenderComponent(_component_Menu, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div><div class="${ssrRenderClass({ "hidden": unref(isLoginRoute) })}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-KpPoFN_Y.mjs.map
