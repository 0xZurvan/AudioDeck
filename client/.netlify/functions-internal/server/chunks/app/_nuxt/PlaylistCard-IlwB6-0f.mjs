import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PlaylistCard",
  __ssrInlineRender: true,
  props: {
    playlistName: {},
    index: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row hover:bg-neutral-950 w-[min(14vw)] h-[min(3vw)] p-2 rounded-lg gap-2" }, _attrs))}>`);
      if (_ctx.index) {
        _push(`<p class="text-base font-medium text-white text-pretty">${ssrInterpolate(_ctx.index)}.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-base font-medium text-white text-pretty">${ssrInterpolate(_ctx.playlistName)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/PlaylistCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PlaylistCard-IlwB6-0f.mjs.map
