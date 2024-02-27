import { useForm, Field } from 'vee-validate';
import { u as useFormField, _ as _sfc_main$4$1, a as _sfc_main$3$1, b as _sfc_main$2$1, c as _sfc_main$1$1, d as _sfc_main$7 } from './index-XvrDFF6I.mjs';
import { useSSRContext, defineComponent, mergeProps, useAttrs, unref, ref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as cn } from './utils-K0wkNaQD.mjs';
import { _ as _sfc_main$5 } from './Input-uX5jumnj.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$3$2, b as _sfc_main$4$2, c as _sfc_main$2$2, d as _sfc_main$1$2, e as _sfc_main$6 } from './SelectItem-7tW7-jIF.mjs';
import { g as useAlbumStore, h as useUserStore, s as storeToRefs, l as useSupabaseClient } from '../server.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-vue-next';
import { _ as _sfc_main$4 } from './Separator-3ZbwNBxK.mjs';
import 'radix-vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@vueuse/core';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FormDescription",
  __ssrInlineRender: true,
  setup(__props) {
    const { formDescriptionId } = useFormField();
    const { class: className, ...rest } = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${ssrRenderAttrs(mergeProps({
        id: unref(formDescriptionId),
        class: unref(cn)("text-sm text-neutral-500 dark:text-neutral-400", (_a = unref(className)) != null ? _a : "")
      }, rest, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormDescription.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AlbumForm",
  __ssrInlineRender: true,
  setup(__props) {
    const albumStore = useAlbumStore();
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);
    const { getAllAlbumsOfConnectedUser } = albumStore;
    const sbClient = useSupabaseClient();
    const isSubmitting = ref(false);
    const formSchema = toTypedSchema(z.object({
      title: z.string({
        required_error: "Please add a title for the album."
      }).min(4).max(14),
      image: z.custom(),
      category: z.string({
        required_error: "Please select a category for the album."
      })
    }));
    const form = useForm({
      validationSchema: formSchema
    });
    form.handleSubmit(async (values) => {
      isSubmitting.value = true;
      const { error: uploadError } = await sbClient.storage.from("albums").upload(values.title, values.image);
      if (uploadError)
        console.error(uploadError);
      try {
        await $fetch("/api/albums/add", {
          method: "POST",
          body: {
            title: values.title,
            user_name: user.value.name,
            user_id: user.value.id,
            category: values.category
          }
        });
        await getAllAlbumsOfConnectedUser();
        isSubmitting.value = false;
      } catch (error) {
        console.error("Error adding new album:", error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$4$1;
      const _component_FormLabel = _sfc_main$3$1;
      const _component_FormControl = _sfc_main$2$1;
      const _component_Input = _sfc_main$5;
      const _component_FormDescription = _sfc_main$3;
      const _component_FormMessage = _sfc_main$1$1;
      const _component_Select = _sfc_main$5$1;
      const _component_SelectTrigger = _sfc_main$3$2;
      const _component_SelectValue = _sfc_main$4$2;
      const _component_SelectContent = _sfc_main$2$2;
      const _component_SelectGroup = _sfc_main$1$2;
      const _component_SelectItem = _sfc_main$6;
      const _component_Button = _sfc_main$7;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_FormField, { name: "title" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Album title`);
                      } else {
                        return [
                          createTextVNode("Album title")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "text",
                          placeholder: "Add album title"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "text",
                            placeholder: "Add album title"
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` This is the album title `);
                      } else {
                        return [
                          createTextVNode(" This is the album title ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, { class: "text-white" }, {
                      default: withCtx(() => [
                        createTextVNode("Album title")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "text",
                          placeholder: "Add album title"
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" This is the album title ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode("Album title")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "text",
                        placeholder: "Add album title"
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" This is the album title ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, { name: "image" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Album image`);
                      } else {
                        return [
                          createTextVNode("Album image")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "file",
                          id: "image",
                          accept: "image/*"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "file",
                            id: "image",
                            accept: "image/*"
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` This is the album image `);
                      } else {
                        return [
                          createTextVNode(" This is the album image ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, { class: "text-white" }, {
                      default: withCtx(() => [
                        createTextVNode("Album image")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "file",
                          id: "image",
                          accept: "image/*"
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" This is the album image ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode("Album image")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "file",
                        id: "image",
                        accept: "image/*"
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" This is the album image ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, { name: "category" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Category`);
                      } else {
                        return [
                          createTextVNode("Category")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, componentField, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectTrigger, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectValue, { placeholder: "Select a category" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SelectValue, { placeholder: "Select a category" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectValue, { placeholder: "Select a category" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectItem, { value: "Pop" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Pop `);
                                        } else {
                                          return [
                                            createTextVNode(" Pop ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_SelectItem, { value: "Rock" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Rock `);
                                        } else {
                                          return [
                                            createTextVNode(" Rock ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_SelectItem, { value: "Classic" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Classic `);
                                        } else {
                                          return [
                                            createTextVNode(" Classic ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SelectItem, { value: "Pop" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Pop ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectItem, { value: "Rock" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Rock ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectItem, { value: "Classic" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Classic ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectItem, { value: "Pop" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Pop ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectItem, { value: "Rock" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Rock ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectItem, { value: "Classic" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Classic ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Select a category" })
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
                                  createVNode(_component_SelectItem, { value: "Pop" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Pop ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectItem, { value: "Rock" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Rock ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectItem, { value: "Classic" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Classic ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` This is the category for the new album `);
                      } else {
                        return [
                          createTextVNode(" This is the category for the new album ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, { class: "text-white" }, {
                      default: withCtx(() => [
                        createTextVNode("Category")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, componentField, {
                      default: withCtx(() => [
                        createVNode(_component_FormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectValue, { placeholder: "Select a category" })
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
                                createVNode(_component_SelectItem, { value: "Pop" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pop ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "Rock" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rock ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "Classic" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Classic ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1040),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" This is the category for the new album ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode("Category")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Select, componentField, {
                    default: withCtx(() => [
                      createVNode(_component_FormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Select a category" })
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
                              createVNode(_component_SelectItem, { value: "Pop" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pop ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "Rock" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Rock ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "Classic" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Classic ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1040),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" This is the category for the new album ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        style: !unref(isSubmitting) ? null : { display: "none" },
        class: "bg-green-500",
        size: "sm",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add new album `);
          } else {
            return [
              createTextVNode(" Add new album ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        style: unref(isSubmitting) ? null : { display: "none" },
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }, null, _parent2, _scopeId));
            _push2(` Uploading album `);
          } else {
            return [
              createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
              createTextVNode(" Uploading album ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/upload/AlbumForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SongForm",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const albumStore = useAlbumStore();
    const { user } = storeToRefs(userStore);
    const { albumsOfConnectedUser } = storeToRefs(albumStore);
    const sbClient = useSupabaseClient();
    const isSubmitting = ref(false);
    const formSchema = toTypedSchema(z.object({
      title: z.string({
        required_error: "Please add a title for the song."
      }).min(7).max(14),
      songFile: z.custom(),
      albumId: z.string({
        required_error: "Please select an album."
      })
    }));
    const form = useForm({
      validationSchema: formSchema
    });
    form.handleSubmit(async (values) => {
      isSubmitting.value = true;
      const { error: uploadError } = await sbClient.storage.from("songs").upload(`${values.albumId}/${values.title}`, values.songFile);
      if (uploadError)
        console.error(uploadError);
      try {
        await $fetch("/api/songs/add", {
          method: "POST",
          body: {
            title: values.title,
            user_id: user.value.id,
            album_id: Number(values.albumId)
          }
        });
        isSubmitting.value = false;
      } catch (error) {
        console.error(error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$4$1;
      const _component_FormLabel = _sfc_main$3$1;
      const _component_FormControl = _sfc_main$2$1;
      const _component_Input = _sfc_main$5;
      const _component_FormDescription = _sfc_main$3;
      const _component_FormMessage = _sfc_main$1$1;
      const _component_Select = _sfc_main$5$1;
      const _component_SelectTrigger = _sfc_main$3$2;
      const _component_SelectValue = _sfc_main$4$2;
      const _component_SelectContent = _sfc_main$2$2;
      const _component_SelectGroup = _sfc_main$1$2;
      const _component_SelectItem = _sfc_main$6;
      const _component_Button = _sfc_main$7;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_FormField, { name: "title" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Song title`);
                      } else {
                        return [
                          createTextVNode("Song title")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "text",
                          placeholder: "Add song title"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "text",
                            placeholder: "Add song title"
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` This is the song title `);
                      } else {
                        return [
                          createTextVNode(" This is the song title ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, { class: "text-white" }, {
                      default: withCtx(() => [
                        createTextVNode("Song title")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "text",
                          placeholder: "Add song title"
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" This is the song title ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode("Song title")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "text",
                        placeholder: "Add song title"
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" This is the song title ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, { name: "songFile" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Song file`);
                      } else {
                        return [
                          createTextVNode("Song file")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "file",
                          id: "songFile",
                          accept: "audio/*"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "file",
                            id: "songFile",
                            accept: "audio/*"
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` This is the song file `);
                      } else {
                        return [
                          createTextVNode(" This is the song file ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, { class: "text-white" }, {
                      default: withCtx(() => [
                        createTextVNode("Song file")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "file",
                          id: "songFile",
                          accept: "audio/*"
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" This is the song file ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode("Song file")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "file",
                        id: "songFile",
                        accept: "audio/*"
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" This is the song file ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, { name: "albumId" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Album to upload`);
                      } else {
                        return [
                          createTextVNode("Album to upload")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, componentField, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectTrigger, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectValue, {
                                      class: "text-neutral-950",
                                      placeholder: "Select an album"
                                    }, null, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(albumsOfConnectedUser), (album) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        value: album.id.toString()
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(album.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(album.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(albumsOfConnectedUser), (album) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          value: album.id.toString()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(album.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 256))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(albumsOfConnectedUser), (album) => {
                                      return openBlock(), createBlock(_component_SelectItem, {
                                        value: album.id.toString()
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(album.title), 1)
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
                        }, _parent4, _scopeId3));
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(albumsOfConnectedUser), (album) => {
                                    return openBlock(), createBlock(_component_SelectItem, {
                                      value: album.id.toString()
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(album.title), 1)
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Select an album where you want to upload the song `);
                      } else {
                        return [
                          createTextVNode(" Select an album where you want to upload the song ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, { class: "text-white" }, {
                      default: withCtx(() => [
                        createTextVNode("Album to upload")
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(albumsOfConnectedUser), (album) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    value: album.id.toString()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(album.title), 1)
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
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Select an album where you want to upload the song ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, { class: "text-white" }, {
                    default: withCtx(() => [
                      createTextVNode("Album to upload")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(albumsOfConnectedUser), (album) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  value: album.id.toString()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(album.title), 1)
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
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Select an album where you want to upload the song ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        style: !unref(isSubmitting) ? null : { display: "none" },
        class: "bg-green-500",
        size: "sm",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add new song `);
          } else {
            return [
              createTextVNode(" Add new song ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        style: unref(isSubmitting) ? null : { display: "none" },
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }, null, _parent2, _scopeId));
            _push2(` Uploading album `);
          } else {
            return [
              createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
              createTextVNode(" Uploading album ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/upload/SongForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "upload",
  __ssrInlineRender: true,
  setup(__props) {
    useAlbumStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AlbumForm = _sfc_main$2;
      const _component_Separator = _sfc_main$4;
      const _component_SongForm = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start w-screen h-[min(35vw)] overflow-hidden space-y-6 overflow-y-auto scroll-smooth scrollbar-none" }, _attrs))}><div class="flex flex-row space-x-[min(10vw)]"><div class="flex flex-col gap-6"><h2 class="text-lg font-bold text-white">Create new album</h2>`);
      _push(ssrRenderComponent(_component_AlbumForm, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Separator, {
        class: "bg-neutral-950",
        orientation: "vertical"
      }, null, _parent));
      _push(`<div class="flex flex-col gap-6"><h2 class="text-lg font-bold text-white">Add songs to album</h2>`);
      _push(ssrRenderComponent(_component_SongForm, null, null, _parent));
      _push(`</div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=upload-xAgknWe7.mjs.map
