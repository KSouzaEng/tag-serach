<template>
  <div class="home">
    <ElementsViews />
  </div>
</template>

<script>
// @ is an alias to /src
import ElementsViews from '@/components/ElementsViews.vue'

export default {
  name: 'Home',
  components: {
    ElementsViews
  }
}
</script>
