import Vue from "vue";
export default Vue.extend({
  props: {
    resumeUrl: { type: String, default: null },
    externalLinks: {
      type: Array,
      default: null,
    },
  },
  data: () => {
    return {
      navbarVisible: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.navbarVisible = !this.navbarVisible;
    },
  },
});
