import { _ as _sfc_main$1 } from './SongCard-bqMAvnYu.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-wL9bDRg-.mjs';
import { _ as _sfc_main$2 } from './SmallAlbumCard-Wla_0Xxh.mjs';
import { e as useRoute, g as useAlbumStore, s as storeToRefs, f as fetchDefaults, a as asyncDataDefaults, d as useRequestFetch, b as useNuxtApp, c as createError } from '../server.mjs';
import { defineComponent, computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext, toValue, reactive, ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { I as hash } from '../../nitro/netlify.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './playlist-XWsDuoMU.mjs';
import 'radix-vue';
import './utils-K0wkNaQD.mjs';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';
import 'vee-validate';
import './index-XvrDFF6I.mjs';
import 'class-variance-authority';
import './SelectItem-7tW7-jIF.mjs';
import '@vee-validate/zod';
import 'zod';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import 'axios';
import '@vueuse/core';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return toValue(r);
  });
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const albumStore = useAlbumStore();
    const { songs, albumsOfUser } = storeToRefs(albumStore);
    const userAlbums = computed(() => {
      return albumsOfUser.value.filter((value, index) => {
        var _a;
        return index < 3 && ((_a = album == null ? void 0 : album.value) == null ? void 0 : _a.title) !== value.title;
      });
    });
    const { data: album } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/albums/${route.params.id}`, {
      transform: (album2) => {
        return {
          title: album2.title,
          user_name: album2.user_name,
          user_id: album2.user_id
        };
      }
    }, "$gLfJ22f46z")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SongCard = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SmallAlbumCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row justify-around space-x-10 max-w-screen h-[min(35vw)] rounded-lg" }, _attrs))}><div class="flex flex-col items-start max-h-screen space-y-8 overflow-y-scroll scroll-smooth scrollbar-none">`);
      if (unref(album)) {
        _push(`<h1 class="text-xl font-bold text-white">${ssrInterpolate(unref(album).title)}</h1>`);
      } else {
        _push(`<h1 class="text-xl font-bold text-white">Album</h1>`);
      }
      _push(`<ul class="flex flex-col gap-4">`);
      if (unref(songs).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(songs), (song) => {
          var _a;
          _push(`<li class="flex flex-row items-start">`);
          _push(ssrRenderComponent(_component_SongCard, {
            song,
            songTitle: song.title,
            albumTitle: (_a = unref(album)) == null ? void 0 : _a.title,
            songId: Number(song.id)
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(10, (_, index) => {
          _push(`<li class="flex flex-row items-start justify-start">`);
          _push(ssrRenderComponent(_component_SongCard, {
            songTitle: "Empty",
            albumTitle: "None",
            songId: 0
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</ul></div><div class="flex flex-col items-start max-h-screen space-y-6 overflow-y-scroll rounded-lg scroll-smooth scrollbar-none"><div class="flex flex-row space-x-[16vw] items-start"><h3 class="text-base text-white text-pretty">Other albums from ${ssrInterpolate(unref(album) ? unref(album).user_name : "artist")}</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/artists/" + (unref(album) ? unref(album).user_name : "0"),
        class: "text-sm text-white hover:text-green-500 text-pretty"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View all`);
          } else {
            return [
              createTextVNode("View all")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="grid grid-cols-3 gap-4">`);
      if (unref(userAlbums).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(userAlbums), (album2) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/albums/" + (album2 ? album2.id : "0")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_SmallAlbumCard, {
                  albumTitle: album2.title,
                  image: album2.image
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_SmallAlbumCard, {
                    albumTitle: album2.title,
                    image: album2.image
                  }, null, 8, ["albumTitle", "image"])
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
        ssrRenderList(3, (_, index) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_SmallAlbumCard, {
            albumTitle: "Empty",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Ioh3dDm_.mjs.map
