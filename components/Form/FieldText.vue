<template>
  <Field
    :id="id_sync"
    :label="label"
    :description="description"
    :required="required"
    :error="error"
  >
    <template #default>
      <input
        :value="value_sync"
        :id="id_sync"
        :type="type"
        :required="required"
        :placeholder="placeholder"
        @input="(event) => $emit('update:value', event.target.value)"
      >
    </template>
  </Field>
</template>

<script>
import propSync from '@/mixins/prop-sync.js';
import Field from '@/components/Form/Field';

export default {
  name: 'FieldText',
  mixins: [
    propSync('value', null, null)
  ],
  components: { Field },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
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
      id_inner: `field_${Math.random().toString(36).substr(2, 9)}`,
      blur: false
    }
  },
  computed: {
    id_sync() {
      return this.id || this.id_inner;
    }
  }
};
</script>

