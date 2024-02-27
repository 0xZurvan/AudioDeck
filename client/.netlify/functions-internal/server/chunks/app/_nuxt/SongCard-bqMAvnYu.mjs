import { u as usePlaylistStore, _ as _sfc_main$6, a as _sfc_main$5, b as _sfc_main$1$1, c as _sfc_main$4, d as _sfc_main$3, e as _sfc_main$2, f as _sfc_main$8 } from './playlist-XWsDuoMU.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$4$1, a as _sfc_main$3$1, b as _sfc_main$2$1, c as _sfc_main$1$3, d as _sfc_main$9 } from './index-XvrDFF6I.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$3$2, b as _sfc_main$4$2, c as _sfc_main$2$2, d as _sfc_main$1$2, e as _sfc_main$7 } from './SelectItem-7tW7-jIF.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, ref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, Fragment, renderList, withDirectives, vShow } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-vue-next';
import { e as useRoute, i as useSongStore, s as storeToRefs } from '../server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SaveSongDialog",
  __ssrInlineRender: true,
  props: {
    songId: {}
  },
  setup(__props) {
    const { songId } = __props;
    const playlistStore = usePlaylistStore();
    const { connectedUserPlaylists } = storeToRefs(playlistStore);
    const isSubmitting = ref(false);
    const formSchema = toTypedSchema(z.object({
      playlistId: z.string({
        required_error: "Please select a playlist."
      })
    }));
    const form = useForm({
      validationSchema: formSchema
    });
    const onSubmit = form.handleSubmit(async (values) => {
      isSubmitting.value = true;
      try {
        await $fetch("/api/playlists/songs/add", {
          method: "POST",
          body: {
            playlist_id: Number(values.playlistId),
            song_id: Number(songId)
          }
        });
        isSubmitting.value = false;
      } catch (error) {
        console.error(error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$6;
      const _component_DialogTrigger = _sfc_main$5;
      const _component_DialogContent = _sfc_main$1$1;
      const _component_DialogHeader = _sfc_main$4;
      const _component_DialogTitle = _sfc_main$3;
      const _component_DialogDescription = _sfc_main$2;
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$4$1;
      const _component_FormLabel = _sfc_main$3$1;
      const _component_Select = _sfc_main$5$1;
      const _component_FormControl = _sfc_main$2$1;
      const _component_SelectTrigger = _sfc_main$3$2;
      const _component_SelectValue = _sfc_main$4$2;
      const _component_SelectContent = _sfc_main$2$2;
      const _component_SelectGroup = _sfc_main$1$2;
      const _component_SelectItem = _sfc_main$7;
      const _component_FormMessage = _sfc_main$1$3;
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
                              _push5(`Add song to playlist`);
                            } else {
                              return [
                                createTextVNode("Add song to playlist")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Add song to a playlist to collect your favorite songs. Click save when you&#39;re done. `);
                            } else {
                              return [
                                createTextVNode(" Add song to a playlist to collect your favorite songs. Click save when you're done. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Add song to playlist")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" Add song to a playlist to collect your favorite songs. Click save when you're done. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "playlistId" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Playlists`);
                                  } else {
                                    return [
                                      createTextVNode("Playlists")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Select, componentField, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FormControl, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectTrigger, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_SelectValue, {
                                                  class: "text-neutral-950",
                                                  placeholder: "Select an album"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_SelectValue, {
                                                    class: "text-neutral-950",
                                                    placeholder: "Select an album"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectTrigger, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_SelectValue, {
                                                  class: "text-neutral-950",
                                                  placeholder: "Select an album"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_SelectContent, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectGroup, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(unref(connectedUserPlaylists), (playlist) => {
                                                  _push8(ssrRenderComponent(_component_SelectItem, {
                                                    value: playlist.id.toString()
                                                  }, {
                                                    default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(playlist.name)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(playlist.name), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedUserPlaylists), (playlist) => {
                                                    return openBlock(), createBlock(_component_SelectItem, {
                                                      value: playlist.id.toString()
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(playlist.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 256))
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectGroup, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedUserPlaylists), (playlist) => {
                                                  return openBlock(), createBlock(_component_SelectItem, {
                                                    value: playlist.id.toString()
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(playlist.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"]);
                                                }), 256))
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectTrigger, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectValue, {
                                                class: "text-neutral-950",
                                                placeholder: "Select an album"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectGroup, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedUserPlaylists), (playlist) => {
                                                return openBlock(), createBlock(_component_SelectItem, {
                                                  value: playlist.id.toString()
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(playlist.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 256))
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                                    createTextVNode("Playlists")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Select, componentField, {
                                  default: withCtx(() => [
                                    createVNode(_component_FormControl, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectValue, {
                                              class: "text-neutral-950",
                                              placeholder: "Select an album"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectContent, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectGroup, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedUserPlaylists), (playlist) => {
                                              return openBlock(), createBlock(_component_SelectItem, {
                                                value: playlist.id.toString()
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(playlist.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 256))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1040),
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
                                  createTextVNode("Playlists")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Select, componentField, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, {
                                            class: "text-neutral-950",
                                            placeholder: "Select an album"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectGroup, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedUserPlaylists), (playlist) => {
                                            return openBlock(), createBlock(_component_SelectItem, {
                                              value: playlist.id.toString()
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(playlist.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 256))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1040),
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
                              _push5(` Save song `);
                            } else {
                              return [
                                createTextVNode(" Save song ")
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
                              _push5(` Saving `);
                            } else {
                              return [
                                createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                                createTextVNode(" Saving ")
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
                              createTextVNode(" Save song ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]), [
                            [vShow, !unref(isSubmitting)]
                          ]),
                          withDirectives(createVNode(_component_Button, { disabled: "" }, {
                            default: withCtx(() => [
                              createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                              createTextVNode(" Saving ")
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
                            createTextVNode("Add song to playlist")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" Add song to a playlist to collect your favorite songs. Click save when you're done. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, { name: "playlistId" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, { class: "text-white" }, {
                              default: withCtx(() => [
                                createTextVNode("Playlists")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Select, componentField, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectValue, {
                                          class: "text-neutral-950",
                                          placeholder: "Select an album"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectGroup, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedUserPlaylists), (playlist) => {
                                          return openBlock(), createBlock(_component_SelectItem, {
                                            value: playlist.id.toString()
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(playlist.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 256))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1040),
                            createVNode(_component_FormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_Button, {
                          onClick: unref(onSubmit),
                          class: "bg-green-500",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save song ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]), [
                          [vShow, !unref(isSubmitting)]
                        ]),
                        withDirectives(createVNode(_component_Button, { disabled: "" }, {
                          default: withCtx(() => [
                            createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                            createTextVNode(" Saving ")
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
                          createTextVNode("Add song to playlist")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Add song to a playlist to collect your favorite songs. Click save when you're done. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormField, { name: "playlistId" }, {
                    default: withCtx(({ componentField }) => [
                      createVNode(_component_FormItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormLabel, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Playlists")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Select, componentField, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectTrigger, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectValue, {
                                        class: "text-neutral-950",
                                        placeholder: "Select an album"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedUserPlaylists), (playlist) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          value: playlist.id.toString()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(playlist.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 256))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1040),
                          createVNode(_component_FormMessage)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      withDirectives(createVNode(_component_Button, {
                        onClick: unref(onSubmit),
                        class: "bg-green-500",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save song ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]), [
                        [vShow, !unref(isSubmitting)]
                      ]),
                      withDirectives(createVNode(_component_Button, { disabled: "" }, {
                        default: withCtx(() => [
                          createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                          createTextVNode(" Saving ")
                        ]),
                        _: 1
                      }, 512), [
                        [vShow, unref(isSubmitting)]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/SaveSongDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SongCard",
  __ssrInlineRender: true,
  props: {
    songTitle: {},
    albumTitle: {},
    songId: {},
    playlistId: {},
    song: {}
  },
  setup(__props) {
    const { songTitle, albumTitle, songId, playlistId } = __props;
    const route = useRoute();
    usePlaylistStore();
    useSongStore();
    const isRemove = computed(() => {
      return route.path === `/playlists/${route.params.id}` && songTitle !== "Empty" && songId !== 0 ? true : false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SaveSongDialog = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row justify-between items-center w-[min(40vw)] h-[min(4vw)] rounded-lg hover:bg-neutral-950 px-4" }, _attrs))}><div class="flex flex-row items-center gap-2"><svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"></path></svg><p class="text-base font-medium text-white">${ssrInterpolate(_ctx.songTitle)}</p></div>`);
      if (_ctx.albumTitle !== void 0) {
        _push(`<p class="text-base font-thin text-white text-opacity-70">${ssrInterpolate(_ctx.albumTitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isRemove)) {
        _push(`<button><svg class="text-white hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H128v-32h256v32z" fill="currentColor"></path></svg></button>`);
      } else {
        _push(ssrRenderComponent(_component_SaveSongDialog, { songId: _ctx.songId }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/SongCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SongCard-bqMAvnYu.mjs.map
