<template>
  <div>

    <ButtonPrimary
      v-if="!show"
      @click="showList"
    >
      Show
    </ButtonPrimary>

    <List
      v-if="show"
      @clear="clearList"
    />

  </div>
</template>

<script>
import List from '@/components/lazy/List'
import ButtonPrimary from '@/components/Button/Primary'

export default {
  name: 'Lazy',
  components: {
    List,
    ButtonPrimary
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showList() {
      this.show = true;
    },
    clearList() {
      this.show = false;
    }
  }
}
</script>
