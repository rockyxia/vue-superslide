<template>
  <div class="content">
    <router-view></router-view>
    <slideHeader></slideHeader>
  </div>
</template>

<script>
import slideHeader from '@/components/header.vue'

export default {
  name: "demo",
  components: {
    slideHeader
  }
};
</script>