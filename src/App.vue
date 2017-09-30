<template>
    <div>
  <md-sidenav md-swipeable class="md-left" ref="leftSidenav">
      <md-toolbar class="md-small">
        <div class="md-toolbar-container">
          <h3 class="md-title"></h3>
        </div>
      </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>home</md-icon> <span>Home</span>
          </md-list-item>

        </md-list>
    </md-sidenav>

    <md-toolbar>
      <md-button @click="toggleLeftSidenav" class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">ScoreKeeper</h2>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
    name: 'app',
    data() {
        return {
            drawer: false
        };
    },
    methods: {
        toggleLeftSidenav() {
            this.$refs.leftSidenav.toggle();
        }
    }
};

</script>

<style>


</style>
