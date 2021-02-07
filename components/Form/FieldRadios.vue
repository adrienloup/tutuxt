<template>
  <Field
    :id="id_sync"
    :label="label"
    :description="description"
    :required="required"
    :error="error"
  >
    <template #default>
      <template v-for="(item, key) of items">
        <input
          v-model="value_sync"
          :key="key"
          :id="id_sync + '-' + key"
          :type="type"
          :value="item.value"
          :required="required"
        />
        <label :for="id_sync + '-' + key">
          {{ item.text }}
        </label>
      </template>
    </template>
  </Field>
</template>

<script>
import propSync from '@/mixins/prop-sync.js';
import Field from '@/components/Form/Field';

export default {
  name: 'FieldRadios',
  mixins: [
    propSync('value', null, null)
  ],
  components: { Field },
  props: {
    id: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'radio'
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      id_inner: `field_${Math.random().toString(36).substr(2, 9)}`
    }
  },
  computed: {
    id_sync() {
      return this.id || this.id_inner;
    }
  }
};
</script>

