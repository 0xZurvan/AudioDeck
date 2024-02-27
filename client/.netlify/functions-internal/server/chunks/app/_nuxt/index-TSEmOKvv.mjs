import { _ as __nuxt_component_0$1 } from './nuxt-link-wL9bDRg-.mjs';
import { ref, useSSRContext, defineComponent, mergeProps, unref, computed, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { createInjectionState } from '@vueuse/core';
import emblaCarouselVue from 'embla-carousel-vue';
import { c as cn } from './utils-K0wkNaQD.mjs';
import { h as useUserStore, s as storeToRefs, g as useAlbumStore, _ as __nuxt_component_0 } from '../server.mjs';
import Autoplay from 'embla-carousel-autoplay';
import { _ as _sfc_main$7 } from './SmallAlbumCard-Wla_0Xxh.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import '../../nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';
import 'clsx';
import 'tailwind-merge';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import 'axios';

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins
  }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    const canScrollNext = ref(true);
    const canScrollPrev = ref(true);
    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const carouselArgs = useProvideCarousel(props, emits);
    __expose(carouselArgs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", unref(carouselArgs), null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/Carousel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex",
          unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SmallArtistCard",
  __ssrInlineRender: true,
  props: {
    artistName: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}>`);
      if (_ctx.image !== "/image") {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: _ctx.image,
          placeholder: [12, 12, 75, 5],
          class: "w-[min(12vw)] h-[min(12vw)] rounded-lg hover:shadow-xl"
        }, null, _parent));
      } else {
        _push(`<div class="rounded-lg bg-neutral-950 w-[min(12vw)] h-[min(12vw)] hover:shadow-xl"></div>`);
      }
      _push(`<p class="text-base font-medium text-white text-pretty">${ssrInterpolate(_ctx.artistName)}</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/SmallArtistCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Artists",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { users } = storeToRefs(userStore);
    const _users = computed(() => {
      return users.value.slice(0, 10);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Carousel = _sfc_main$6;
      const _component_CarouselContent = _sfc_main$5;
      const _component_CarouselItem = _sfc_main$4;
      const _component_SmallArtistCard = _sfc_main$3;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col space-y-6" }, _attrs))}><div class="flex flex-row justify-between"><h1 class="text-xl font-bold text-white">Artists</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/artists",
        class: "text-sm font-thin text-white hover:text-green-500 hover:opacity-90"
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Carousel, {
        class: "relative w-[min(80vw)]",
        opts: {
          align: "start"
        },
        plugins: [unref(Autoplay)({
          delay: 2e3
        })]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CarouselContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(10, (_3, index2) => {
                    _push3(ssrRenderComponent(_component_CarouselItem, {
                      key: index2,
                      class: "basis-auto"
                    }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (index2 < unref(_users).length) {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: "/artists/" + unref(_users)[index2].name
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_SmallArtistCard, {
                                    artistName: unref(_users)[index2].name,
                                    image: unref(_users)[index2].image
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_SmallArtistCard, {
                                      artistName: unref(_users)[index2].name,
                                      image: unref(_users)[index2].image
                                    }, null, 8, ["artistName", "image"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_SmallArtistCard, {
                              artistName: "Empty",
                              image: "/image"
                            }, null, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            index2 < unref(_users).length ? (openBlock(), createBlock(_component_NuxtLink, {
                              key: 0,
                              to: "/artists/" + unref(_users)[index2].name
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_SmallArtistCard, {
                                  artistName: unref(_users)[index2].name,
                                  image: unref(_users)[index2].image
                                }, null, 8, ["artistName", "image"])
                              ]),
                              _: 2
                            }, 1032, ["to"])) : (openBlock(), createBlock(_component_SmallArtistCard, {
                              key: 1,
                              artistName: "Empty",
                              image: "/image"
                            }))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(10, (_3, index2) => {
                      return createVNode(_component_CarouselItem, {
                        key: index2,
                        class: "basis-auto"
                      }, {
                        default: withCtx(() => [
                          index2 < unref(_users).length ? (openBlock(), createBlock(_component_NuxtLink, {
                            key: 0,
                            to: "/artists/" + unref(_users)[index2].name
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SmallArtistCard, {
                                artistName: unref(_users)[index2].name,
                                image: unref(_users)[index2].image
                              }, null, 8, ["artistName", "image"])
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (openBlock(), createBlock(_component_SmallArtistCard, {
                            key: 1,
                            artistName: "Empty",
                            image: "/image"
                          }))
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CarouselContent, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(10, (_2, index2) => {
                    return createVNode(_component_CarouselItem, {
                      key: index2,
                      class: "basis-auto"
                    }, {
                      default: withCtx(() => [
                        index2 < unref(_users).length ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 0,
                          to: "/artists/" + unref(_users)[index2].name
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SmallArtistCard, {
                              artistName: unref(_users)[index2].name,
                              image: unref(_users)[index2].image
                            }, null, 8, ["artistName", "image"])
                          ]),
                          _: 2
                        }, 1032, ["to"])) : (openBlock(), createBlock(_component_SmallArtistCard, {
                          key: 1,
                          artistName: "Empty",
                          image: "/image"
                        }))
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Artists.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Albums",
  __ssrInlineRender: true,
  setup(__props) {
    const albumStore = useAlbumStore();
    const { albums } = storeToRefs(albumStore);
    const _albums = computed(() => {
      return albums.value.slice(0, 10);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Carousel = _sfc_main$6;
      const _component_CarouselContent = _sfc_main$5;
      const _component_CarouselItem = _sfc_main$4;
      const _component_SmallAlbumCard = _sfc_main$7;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col space-y-6" }, _attrs))}><div class="flex flex-row justify-between"><h1 class="text-xl font-bold text-white">Albums</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/albums",
        class: "text-sm font-thin text-white hover:text-green-500 hover:opacity-90"
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Carousel, {
        class: "relative w-[min(80vw)]",
        opts: {
          align: "start"
        },
        plugins: [unref(Autoplay)({
          delay: 2e3
        })]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CarouselContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(10, (_3, index2) => {
                    _push3(ssrRenderComponent(_component_CarouselItem, {
                      key: index2,
                      class: "basis-auto"
                    }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (index2 < unref(_albums).length) {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: "/albums/" + unref(_albums)[index2].id
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_SmallAlbumCard, {
                                    albumTitle: unref(_albums)[index2].title,
                                    image: unref(_albums)[index2].image
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_SmallAlbumCard, {
                                      albumTitle: unref(_albums)[index2].title,
                                      image: unref(_albums)[index2].image
                                    }, null, 8, ["albumTitle", "image"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_SmallAlbumCard, {
                              albumTitle: "Empty",
                              image: "/image"
                            }, null, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            index2 < unref(_albums).length ? (openBlock(), createBlock(_component_NuxtLink, {
                              key: 0,
                              to: "/albums/" + unref(_albums)[index2].id
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_SmallAlbumCard, {
                                  albumTitle: unref(_albums)[index2].title,
                                  image: unref(_albums)[index2].image
                                }, null, 8, ["albumTitle", "image"])
                              ]),
                              _: 2
                            }, 1032, ["to"])) : (openBlock(), createBlock(_component_SmallAlbumCard, {
                              key: 1,
                              albumTitle: "Empty",
                              image: "/image"
                            }))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(10, (_3, index2) => {
                      return createVNode(_component_CarouselItem, {
                        key: index2,
                        class: "basis-auto"
                      }, {
                        default: withCtx(() => [
                          index2 < unref(_albums).length ? (openBlock(), createBlock(_component_NuxtLink, {
                            key: 0,
                            to: "/albums/" + unref(_albums)[index2].id
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SmallAlbumCard, {
                                albumTitle: unref(_albums)[index2].title,
                                image: unref(_albums)[index2].image
                              }, null, 8, ["albumTitle", "image"])
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (openBlock(), createBlock(_component_SmallAlbumCard, {
                            key: 1,
                            albumTitle: "Empty",
                            image: "/image"
                          }))
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CarouselContent, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(10, (_2, index2) => {
                    return createVNode(_component_CarouselItem, {
                      key: index2,
                      class: "basis-auto"
                    }, {
                      default: withCtx(() => [
                        index2 < unref(_albums).length ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 0,
                          to: "/albums/" + unref(_albums)[index2].id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SmallAlbumCard, {
                              albumTitle: unref(_albums)[index2].title,
                              image: unref(_albums)[index2].image
                            }, null, 8, ["albumTitle", "image"])
                          ]),
                          _: 2
                        }, 1032, ["to"])) : (openBlock(), createBlock(_component_SmallAlbumCard, {
                          key: 1,
                          albumTitle: "Empty",
                          image: "/image"
                        }))
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Albums.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Artists = _sfc_main$2;
  const _component_Albums = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start space-y-10 w-screen h-[min(35vw)] overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-none rounded-lg" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Artists, null, null, _parent));
  _push(ssrRenderComponent(_component_Albums, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-TSEmOKvv.mjs.map
