import { g as useAlbumStore, h as useUserStore, s as storeToRefs, j as __nuxt_component_0$2, _ as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, withDirectives, vShow } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './Separator-3ZbwNBxK.mjs';
import { u as usePlaylistStore, _ as _sfc_main$6$1, a as _sfc_main$5$1, b as _sfc_main$1$1, c as _sfc_main$4$1, d as _sfc_main$3$1, e as _sfc_main$2$1, f as _sfc_main$8 } from './playlist-XWsDuoMU.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$4$2, a as _sfc_main$3$2, b as _sfc_main$2$2, c as _sfc_main$1$2, d as _sfc_main$9 } from './index-XvrDFF6I.mjs';
import { _ as _sfc_main$7 } from './Input-uX5jumnj.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-vue-next';
import { _ as __nuxt_component_0 } from './nuxt-link-wL9bDRg-.mjs';
import { _ as _sfc_main$a } from './PlaylistCard-IlwB6-0f.mjs';
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
import 'class-variance-authority';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UserSection",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    storeToRefs(userStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start space-y-10 w-full h-[min(35vw)] overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/UserSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PlaylistDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const playlistStore = usePlaylistStore();
    const { user } = storeToRefs(userStore);
    const { getPlaylistsFromUserId } = playlistStore;
    const isSubmitting = ref(false);
    const formSchema = toTypedSchema(z.object({
      name: z.string({
        required_error: "Please add a name for the playlist."
      }).min(4).max(14)
    }));
    const form = useForm({
      validationSchema: formSchema
    });
    const onSubmit = form.handleSubmit(async (values) => {
      isSubmitting.value = true;
      try {
        await $fetch("/api/playlists/add", {
          method: "POST",
          body: {
            name: values.name,
            user_id: user.value.id
          }
        });
        await getPlaylistsFromUserId();
        isSubmitting.value = false;
      } catch (error) {
        console.error("Error uploading playlist", error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$6$1;
      const _component_DialogTrigger = _sfc_main$5$1;
      const _component_DialogContent = _sfc_main$1$1;
      const _component_DialogHeader = _sfc_main$4$1;
      const _component_DialogTitle = _sfc_main$3$1;
      const _component_DialogDescription = _sfc_main$2$1;
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$4$2;
      const _component_FormLabel = _sfc_main$3$2;
      const _component_FormControl = _sfc_main$2$2;
      const _component_Input = _sfc_main$7;
      const _component_FormMessage = _sfc_main$1$2;
      const _component_DialogFooter = _sfc_main$8;
      const _component_Button = _sfc_main$9;
      _push(ssrRenderComponent(_component_Dialog, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"${_scopeId2}><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"${_scopeId2}></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160m80-80H176"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "text-white hover:text-green-500",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 512 512"
                    }, [
                      createVNode("path", {
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-miterlimit": "10",
                        "stroke-width": "32",
                        d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                      }),
                      createVNode("path", {
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "32",
                        d: "M256 176v160m80-80H176"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DialogContent, { class: "sm:max-w-[425px] bg-neutral-950 text-green-500" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Create a new playlist`);
                            } else {
                              return [
                                createTextVNode("Create a new playlist")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Create a playlist to add your favorite songs. Click save when you&#39;re done. `);
                            } else {
                              return [
                                createTextVNode(" Create a playlist to add your favorite songs. Click save when you're done. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Create a new playlist")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" Create a playlist to add your favorite songs. Click save when you're done. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "name" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Playlist name`);
                                  } else {
                                    return [
                                      createTextVNode("Playlist name")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Input, mergeProps({
                                      type: "text",
                                      placeholder: "Add playlist name"
                                    }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Input, mergeProps({
                                        type: "text",
                                        placeholder: "Add playlist name"
                                      }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, { class: "text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Playlist name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Input, mergeProps({
                                      type: "text",
                                      placeholder: "Add playlist name"
                                    }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, { class: "text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode("Playlist name")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Input, mergeProps({
                                    type: "text",
                                    placeholder: "Add playlist name"
                                  }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          onClick: unref(onSubmit),
                          style: !unref(isSubmitting) ? null : { display: "none" },
                          class: "bg-green-500",
                          size: "sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Add new playlist `);
                            } else {
                              return [
                                createTextVNode(" Add new playlist ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          style: unref(isSubmitting) ? null : { display: "none" },
                          disabled: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }, null, _parent5, _scopeId4));
                              _push5(` Uploading playlist `);
                            } else {
                              return [
                                createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                                createTextVNode(" Uploading playlist ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          withDirectives(createVNode(_component_Button, {
                            onClick: unref(onSubmit),
                            class: "bg-green-500",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Add new playlist ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]), [
                            [vShow, !unref(isSubmitting)]
                          ]),
                          withDirectives(createVNode(_component_Button, { disabled: "" }, {
                            default: withCtx(() => [
                              createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                              createTextVNode(" Uploading playlist ")
                            ]),
                            _: 1
                          }, 512), [
                            [vShow, unref(isSubmitting)]
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("Create a new playlist")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" Create a playlist to add your favorite songs. Click save when you're done. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, { name: "name" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, { class: "text-white" }, {
                              default: withCtx(() => [
                                createTextVNode("Playlist name")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Input, mergeProps({
                                  type: "text",
                                  placeholder: "Add playlist name"
                                }, componentField), null, 16)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_FormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_Button, {
                          onClick: unref(onSubmit),
                          class: "bg-green-500",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Add new playlist ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]), [
                          [vShow, !unref(isSubmitting)]
                        ]),
                        withDirectives(createVNode(_component_Button, { disabled: "" }, {
                          default: withCtx(() => [
                            createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                            createTextVNode(" Uploading playlist ")
                          ]),
                          _: 1
                        }, 512), [
                          [vShow, unref(isSubmitting)]
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "text-white hover:text-green-500",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 512 512"
                  }, [
                    createVNode("path", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-miterlimit": "10",
                      "stroke-width": "32",
                      d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                    }),
                    createVNode("path", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "32",
                      d: "M256 176v160m80-80H176"
                    })
                  ]))
                ]),
                _: 1
              }),
              createVNode(_component_DialogContent, { class: "sm:max-w-[425px] bg-neutral-950 text-green-500" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("Create a new playlist")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Create a playlist to add your favorite songs. Click save when you're done. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormField, { name: "name" }, {
                    default: withCtx(({ componentField }) => [
                      createVNode(_component_FormItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormLabel, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Playlist name")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Input, mergeProps({
                                type: "text",
                                placeholder: "Add playlist name"
                              }, componentField), null, 16)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_FormMessage)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      withDirectives(createVNode(_component_Button, {
                        onClick: unref(onSubmit),
                        class: "bg-green-500",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add new playlist ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]), [
                        [vShow, !unref(isSubmitting)]
                      ]),
                      withDirectives(createVNode(_component_Button, { disabled: "" }, {
                        default: withCtx(() => [
                          createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                          createTextVNode(" Uploading playlist ")
                        ]),
                        _: 1
                      }, 512), [
                        [vShow, unref(isSubmitting)]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/PlaylistDialog.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Playlists",
  __ssrInlineRender: true,
  setup(__props) {
    const playlistStore = usePlaylistStore();
    const { connectedUserPlaylists } = storeToRefs(playlistStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PlaylistDialog = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PlaylistCard = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start w-full space-y-8 h-[min(34vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none" }, _attrs))}><div class="flex flex-row items-center gap-2"><h2 class="text-lg text-white">Playlists</h2>`);
      _push(ssrRenderComponent(_component_PlaylistDialog, null, null, _parent));
      _push(`</div><ul class="flex flex-col items-start w-full gap-4">`);
      if (unref(connectedUserPlaylists).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(connectedUserPlaylists), (playlist, index) => {
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
        _push(`<li>`);
        _push(ssrRenderComponent(_component_PlaylistCard, { playlistName: "Empty" }, null, _parent));
        _push(`</li>`);
      }
      _push(`</ul></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/Playlists.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AlbumProfileCard",
  __ssrInlineRender: true,
  props: {
    albumTitle: {},
    albumImg: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center justify-around gap-4" }, _attrs))}>`);
      if (_ctx.albumImg !== "/image") {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: _ctx.albumImg,
          placeholder: [12, 12, 75, 5],
          class: "w-[min(4vw)] h-[min(4vw)] rounded-lg"
        }, null, _parent));
      } else {
        _push(`<div class="flex bg-neutral-950 w-[min(4vw)] h-[min(4vw)] rounded-lg"></div>`);
      }
      _push(`<div class="flex flex-col"><p class="text-base font-medium text-white text-pretty">${ssrInterpolate(_ctx.albumTitle)}</p><p class="text-sm font-thin text-white text-italic">Album</p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/AlbumProfileCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlbumsProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const albumStore = useAlbumStore();
    const { albumsOfConnectedUser } = storeToRefs(albumStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AlbumProfileCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start w-full h-[min(34vw)] space-y-8 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none" }, _attrs))}><div class="flex flex-row items-center gap-2"><h2 class="text-lg text-white">Albums</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/upload" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"${_scopeId}><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"${_scopeId}></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160m80-80H176"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "text-white hover:text-green-500",
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-miterlimit": "10",
                  "stroke-width": "32",
                  d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                }),
                createVNode("path", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32",
                  d: "M256 176v160m80-80H176"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="flex flex-col items-start w-full gap-4">`);
      if (unref(albumsOfConnectedUser).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(albumsOfConnectedUser), (album) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/albums/" + (album ? album.id : "0")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_AlbumProfileCard, {
                  albumTitle: album.title,
                  albumImg: album.image
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_AlbumProfileCard, {
                    albumTitle: album.title,
                    albumImg: album.image
                  }, null, 8, ["albumTitle", "albumImg"])
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
          _push(ssrRenderComponent(_component_AlbumProfileCard, {
            albumTitle: "Empty",
            albumImg: "/image"
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/AlbumsProfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    useAlbumStore();
    usePlaylistStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserSection = _sfc_main$5;
      const _component_Separator = _sfc_main$6;
      const _component_Playlists = _sfc_main$3;
      const _component_AlbumsProfile = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row-reverse items-start justify-between gap-10 max-w-screen h-[min(35vw)] overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UserSection, null, null, _parent));
      _push(ssrRenderComponent(_component_Separator, {
        class: "bg-neutral-950",
        orientation: "vertical"
      }, null, _parent));
      _push(`<div class="flex flex-row justify-between w-full gap-10">`);
      _push(ssrRenderComponent(_component_Playlists, null, null, _parent));
      _push(ssrRenderComponent(_component_AlbumsProfile, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-ZMupEfvN.mjs.map
