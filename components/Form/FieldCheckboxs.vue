<template>
  <Field
    :id="id_sync"
    :label="label"
    :description="charactersLeft ? charactersLeft + ' ' + description : description"
    :required="required"
    :error="error"
  >
    <template #default>
      <input
        v-model="value_sync"
        :id="id_sync"
        :type="type"
        :required="required"
      />
    </template>
  </Field>
</template>

<script>
import propSync from '@/mixins/prop-sync.js';
import Field from '@/components/Form/Field';

export default {
  name: 'FieldCheckbox',
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
      default: 'checkbox'
    },
    label: {
      type: String,
      default: null
    },
    description: {
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
      charactersLeft: 0
    }
  },
  computed: {
    id_sync() {
      return this.id || this.id_inner;
    }
  }
};
</script>

