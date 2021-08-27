<template>
  <div class="back-to-top">
    <a v-bind:class="{ active: isVisible }" class="nav-arrow top back-to-top__link" @click="goToTop"></a>
  </div>
</template>

<script>
  export default {
    name: "BackToTop",
    props: {
      boundary: {
        type: Number,
        default: 200
      },
    },
    data() {
      return {
        isVisible: false,
      }
    },
    mounted() {
      if (window) {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed() {
      if (window) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    },
    methods: {
      handleScroll() {
        this.isVisible = window.pageYOffset > this.boundary;
      },
      goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    },
  };
</script>

<style lang="stylus" scoped>
  .back-to-top__link
    position fixed
    right 6rem
    bottom 10rem
    visibility hidden
    opacity 0
    transition visibility 0s, opacity 0.5s linear
    cursor pointer
    z-index 10

    &.active
      visibility visible
      opacity 1
</style>
