import { _ as __nuxt_component_0 } from '../server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SmallAlbumCard",
  __ssrInlineRender: true,
  props: {
    albumTitle: {},
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
      _push(`<p class="text-base font-medium text-white text-pretty">${ssrInterpolate(_ctx.albumTitle)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/SmallAlbumCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SmallAlbumCard-Wla_0Xxh.mjs.map
