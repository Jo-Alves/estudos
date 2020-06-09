<template>
  <div id="app">
    <HcodeHeader @select-championship="changeChampionship" @change-component="changeComponent" />

    <HcodeSection  :current-component="currentSectionComponent" />

    <HcodeFooter />
  </div>
</template>

<script>
import HcodeHeader from "./components/HcodeHeader";
import HcodeFooter from "./components/HcodeFooter";
import HcodeSection from "./components/HcodeSection";
import { mapMutations } from "vuex"
export default {
  name: "App",
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
  },
  data() {
    return {
     currentSectionComponent: "HcodeSectionBanner"
    };
  },
  methods: {
    ...mapMutations({
      changeChampionship: "setChampionship"
    }),
    // changeChampionship(value) {
    //   this.$store.commit('setChampionship', value)
    // },
    changeComponent(value) {
      let component;

      switch (value) {
        case "home":
        default:
          component = "HcodeSectionBanner";
          break;
        case "news":
          component = "HcodeSectionNews";
          break;
      }

      this.currentSectionComponent = component;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
