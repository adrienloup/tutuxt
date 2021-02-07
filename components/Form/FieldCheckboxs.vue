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
        v-model="value_sync"
        :id="id_sync"
        :type="type"
        :value="value_sync"
        :required="required"
      />
      <label :for="id_sync">
        {{ text }}
        <a v-if="textLink" :href="link" target="_blank">
          {{ textLink }}
        </a>
        <span v-if="required">*</span>
      </label>
    </template>
  </Field>
</template>

<script>
import propSync from '@/mixins/prop-sync.js';
import Field from '@/components/Form/Field';

export default {
  name: 'FieldCheckboxs',
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
    text: {
      type: String,
      default: null
    },
    textLink: {
      type: String,
      default: null
    },
    link: {
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
