<template>
  <Field
    :id="id_sync"
    :label="label"
    :description="description"
    :required="required"
    :error="error"
  >
    <template #default>
      <div class="select">
        <select
          :value="value_sync"
          :id="id_sync"
          :required="required"
          @input="(event) => $emit('update:value', event.target.value)"
        >
          <option value="" disabled selected>Select your option</option>
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </template>
  </Field>
</template>

<script>
import propSync from '@/mixins/prop-sync.js';
import Field from '@/components/Form/Field';

export default {
  name: 'FieldSelect',
  mixins: [
    propSync('value', null, null)
  ],
  components: { Field },
  props: {
    id: {
      type: String,
      default: null
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
      options: [
        { text: 'Mr', value: 'A' },
        { text: 'Mme', value: 'B' }
      ]
    }
  },
  computed: {
    id_sync() {
      return this.id || this.id_inner;
    }
  }
};
</script>

