import { _ as __nuxt_component_0 } from './FormCard-jbOJMx3R.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$2, c as _sfc_main$1$1, d as _sfc_main$5 } from './index-XvrDFF6I.mjs';
import { _ as _sfc_main$1 } from './Input-uX5jumnj.mjs';
import { defineComponent, ref, withCtx, createTextVNode, mergeProps, createVNode, unref, withDirectives, vShow, useSSRContext } from 'vue';
import { h as useUserStore, n as navigateTo } from '../server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-vue-next';
import './nuxt-link-wL9bDRg-.mjs';
import '../../nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';
import './_plugin-vue_export-helper-yVxbj29m.mjs';
import 'radix-vue';
import './utils-K0wkNaQD.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import '@vueuse/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-up",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { signUp } = userStore;
    const isSubmitting = ref(false);
    const formSchema = toTypedSchema(z.object({
      name: z.string({
        required_error: "Please add a name."
      }).min(5).max(14),
      password: z.string({
        required_error: "Please add a password."
      }).min(5).max(14)
    }));
    const form = useForm({
      validationSchema: formSchema
    });
    const onSubmit = form.handleSubmit(async (values) => {
      await signUp(values.name, values.password);
      await navigateTo({ path: "/" });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormCard = __nuxt_component_0;
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$4;
      const _component_FormLabel = _sfc_main$3;
      const _component_FormControl = _sfc_main$2;
      const _component_Input = _sfc_main$1;
      const _component_FormMessage = _sfc_main$1$1;
      const _component_Button = _sfc_main$5;
      _push(ssrRenderComponent(_component_FormCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center space-y-10"${_scopeId}><h1 class="text-xl font-bold text-white"${_scopeId}>Sign up</h1><form class="flex flex-col space-y-6 w-[min(30vw)]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormField, { name: "name" }, {
              default: withCtx(({ componentField }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormItem, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Name`);
                            } else {
                              return [
                                createTextVNode("Name")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, mergeProps({
                                type: "text",
                                placeholder: "Add a name"
                              }, componentField), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Input, mergeProps({
                                  type: "text",
                                  placeholder: "Add a name"
                                }, componentField), null, 16)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormMessage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormLabel, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Name")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Input, mergeProps({
                                type: "text",
                                placeholder: "Add a name"
                              }, componentField), null, 16)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_FormMessage)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_FormLabel, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("Name")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Input, mergeProps({
                              type: "text",
                              placeholder: "Add a name"
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormField, { name: "password" }, {
              default: withCtx(({ componentField }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormItem, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormLabel, { class: "text-white" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Password`);
                            } else {
                              return [
                                createTextVNode("Password")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, mergeProps({
                                type: "text",
                                placeholder: "Add a password"
                              }, componentField), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Input, mergeProps({
                                  type: "text",
                                  placeholder: "Add a password"
                                }, componentField), null, 16)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormMessage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormLabel, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Password")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Input, mergeProps({
                                type: "text",
                                placeholder: "Add a password"
                              }, componentField), null, 16)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_FormMessage)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_FormLabel, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("Password")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Input, mergeProps({
                              type: "text",
                              placeholder: "Add a password"
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              style: !unref(isSubmitting) ? null : { display: "none" },
              class: "bg-green-500",
              size: "sm",
              type: "submit"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign up `);
                } else {
                  return [
                    createTextVNode(" Sign up ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              style: unref(isSubmitting) ? null : { display: "none" },
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }, null, _parent3, _scopeId2));
                  _push3(` Signing up `);
                } else {
                  return [
                    createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                    createTextVNode(" Signing up ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center space-y-10" }, [
                createVNode("h1", { class: "text-xl font-bold text-white" }, "Sign up"),
                createVNode("form", {
                  class: "flex flex-col space-y-6 w-[min(30vw)]",
                  onSubmit: unref(onSubmit)
                }, [
                  createVNode(_component_FormField, { name: "name" }, {
                    default: withCtx(({ componentField }) => [
                      createVNode(_component_FormItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormLabel, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Name")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Input, mergeProps({
                                type: "text",
                                placeholder: "Add a name"
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
                  createVNode(_component_FormField, { name: "password" }, {
                    default: withCtx(({ componentField }) => [
                      createVNode(_component_FormItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormLabel, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Password")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Input, mergeProps({
                                type: "text",
                                placeholder: "Add a password"
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
                  withDirectives(createVNode(_component_Button, {
                    class: "bg-green-500",
                    size: "sm",
                    type: "submit"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign up ")
                    ]),
                    _: 1
                  }, 512), [
                    [vShow, !unref(isSubmitting)]
                  ]),
                  withDirectives(createVNode(_component_Button, { disabled: "" }, {
                    default: withCtx(() => [
                      createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                      createTextVNode(" Signing up ")
                    ]),
                    _: 1
                  }, 512), [
                    [vShow, unref(isSubmitting)]
                  ])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sign-up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-up-dugph7YI.mjs.map
