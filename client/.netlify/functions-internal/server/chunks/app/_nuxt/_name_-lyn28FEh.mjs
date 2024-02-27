import { _ as __nuxt_component_0 } from './nuxt-link-wL9bDRg-.mjs';
import { _ as _sfc_main$2 } from './SmallAlbumCard-Wla_0Xxh.mjs';
import { e as useRoute, h as useUserStore, g as useAlbumStore, s as storeToRefs, _ as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './SongCard-bqMAvnYu.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArtistCircleCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center justify-start gap-10 bg-black h-[min(20vw)] rounded-lg p-4" }, _attrs))}>`);
      if (_ctx.image !== "/image") {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: _ctx.image,
          placeholder: [12, 12, 75, 5],
          class: "position relative left-4 top-3 w-[min(12vw)] h-[min(12vw)] rounded-full"
        }, null, _parent));
      } else {
        _push(`<div class="bg-neutral-950 position relative left-4 top-3 w-[min(12vw)] h-[min(12vw)] rounded-full"></div>`);
      }
      _push(`<div class="flex flex-row items-start gap-7"><div class="flex flex-col"><h2 class="text-xl font-bold text-white">${ssrInterpolate(_ctx.name)}</h2><p class="text-sm text-white">Artist</p></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/ArtistCircleCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[name]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useUserStore();
    const albumStore = useAlbumStore();
    const { albums, albumsOfUser } = storeToRefs(albumStore);
    const artist = ref();
    const songs = ref();
    const popularSongs = computed(() => {
      var _a;
      return (_a = songs.value) == null ? void 0 : _a.slice(0, 5);
    });
    const album = computed(() => {
      return albumsOfUser.value.filter((album2, index) => album2.user_name === route.params.name && index < 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SmallAlbumCard = _sfc_main$2;
      const _component_ArtistCircleCard = _sfc_main$1;
      const _component_SongCard = _sfc_main$3;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-row justify-around max-w-screen h-[min(35vw)] space-x-10 overflow-hidden rounded-lg" }, _attrs))}><div class="flex flex-col h-full max-h-screen space-y-10 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none"><h2 class="text-xl font-bold text-white">All albums from ${ssrInterpolate(unref(artist) ? (_a = unref(artist)) == null ? void 0 : _a.name : "artist")}</h2><ul class="grid grid-cols-3 gap-4">`);
      if (unref(albumsOfUser).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(albumsOfUser), (album2) => {
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
      _push(`</ul></div><div class="flex flex-col items-start h-full max-h-screen space-y-8 overflow-auto overflow-y-scroll scroll-smooth scrollbar-none">`);
      _push(ssrRenderComponent(_component_ArtistCircleCard, {
        class: "w-[min(44vw)]",
        name: unref(artist) ? unref(artist).name : "Empty",
        image: unref(artist) ? unref(artist).image : "/image"
      }, null, _parent));
      _push(`<div class="flex flex-col items-start px-6 space-y-8 overflow-y-scroll scroll-smooth scrollbar-none"><h2 class="text-xl font-bold text-white">Popular songs</h2><ul class="flex flex-col gap-4">`);
      if (unref(popularSongs) ? unref(popularSongs).length > 0 : void 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(popularSongs), (song, index) => {
          _push(`<li class="flex flex-row items-center gap-1"><p class="text-white">${ssrInterpolate(index + 1)}.</p>`);
          _push(ssrRenderComponent(_component_SongCard, {
            song,
            songTitle: song.title,
            albumTitle: unref(album)[0].title,
            songId: Number(song.id)
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(3, (_, index) => {
          _push(`<li class="flex flex-row items-center gap-1"><p class="text-white">${ssrInterpolate(index + 1)}.</p>`);
          _push(ssrRenderComponent(_component_SongCard, {
            songTitle: "Empty",
            albumTitle: "None",
            songId: 0
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</ul></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artists/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_name_-lyn28FEh.mjs.map
