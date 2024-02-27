import { _ as _sfc_main$1 } from './SongCard-bqMAvnYu.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-wL9bDRg-.mjs';
import { _ as _sfc_main$2 } from './PlaylistCard-IlwB6-0f.mjs';
import { e as useRoute, s as storeToRefs } from '../server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as usePlaylistStore } from './playlist-XWsDuoMU.mjs';
import 'vee-validate';
import './index-XvrDFF6I.mjs';
import 'radix-vue';
import './utils-K0wkNaQD.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import './SelectItem-7tW7-jIF.mjs';
import 'lucide-vue-next';
import '@vee-validate/zod';
import 'zod';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const playlistStore = usePlaylistStore();
    const { currentPlaylist, currentPlaylistSongs, connectedUserPlaylists } = storeToRefs(playlistStore);
    const otherPlaylists = computed(() => {
      return connectedUserPlaylists.value.filter((playlist, index) => playlist.name !== currentPlaylist.value.name && index < 3);
    });
    const albumTitles = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SongCard = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PlaylistCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row justify-around space-x-10 max-w-screen h-[min(35vw)] rounded-lg" }, _attrs))}><div class="flex flex-col items-start max-h-screen space-y-8 overflow-y-scroll scroll-smooth scrollbar-none">`);
      if (unref(currentPlaylist)) {
        _push(`<h1 class="text-xl font-bold text-white">${ssrInterpolate(unref(currentPlaylist).name)}</h1>`);
      } else {
        _push(`<h1 class="text-xl font-bold text-white">Album</h1>`);
      }
      _push(`<ul class="flex flex-col gap-4">`);
      if (unref(currentPlaylistSongs).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(currentPlaylistSongs), (song) => {
          _push(`<li class="flex flex-row items-center gap-1">`);
          _push(ssrRenderComponent(_component_SongCard, {
            song,
            songTitle: song.title,
            albumTitle: unref(albumTitles)[song.id],
            songId: song.id,
            playlistId: Number(unref(route).params.id)
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(10, (_, index) => {
          _push(`<li class="flex flex-row items-center gap-1">`);
          _push(ssrRenderComponent(_component_SongCard, {
            songTitle: "Empty",
            albumTitle: "None",
            songId: 0
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</ul></div><div class="flex flex-col items-start max-h-screen space-y-6 overflow-y-scroll rounded-lg scroll-smooth scrollbar-none"><div class="flex flex-row space-x-[16vw] items-start"><h3 class="text-base text-white text-pretty">Other playlists</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/profile",
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
      if (unref(otherPlaylists).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(otherPlaylists), (playlist, index) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/playlists/" + (playlist ? playlist.id : "0")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_PlaylistCard, {
                  playlistName: playlist.name,
                  index: index + 1
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_PlaylistCard, {
                    playlistName: playlist.name,
                    index: index + 1
                  }, null, 8, ["playlistName", "index"])
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
          _push(ssrRenderComponent(_component_PlaylistCard, {
            playlistName: "Empty",
            index: index + 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/playlists/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-PJUS_gYj.mjs.map
