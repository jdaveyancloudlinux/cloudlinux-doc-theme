export default {
    methods: {
        checkRedirect() {
            if (this.newUrl) {
                this.$router.replace(this.newUrl);

                return true;
            }

            return false;
        },
    },
  computed: {
      redirectionMapping() {
        // add default route
          let map = {...this.$site.themeConfig.redirectionMapping};
          map['/'] = this.$site.themeConfig.defaultURL;

          return map;
      },
      path() {
          let path = this.$route.fullPath;
          const isExistingPath = !!this.redirectionMapping[path];

          if (!isExistingPath && path.substr(0, 2) === '/?') {
              path = [path.slice(0, 1), 'index.html', path.slice(1)].join(''); // insert index.html into path
          }

          return path;
      },
      newUrl() {
          return this.redirectionMapping[this.path];
      }
  }
}
