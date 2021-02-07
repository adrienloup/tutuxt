<template>
  <Field
    :id="id_sync"
    :label="label"
    :description="charactersLeft ? charactersLeft + ' ' + description : description"
    :required="required"
    :error="error"
  >
    <template #default>
      <textarea
        :value="value_sync"
        :id="id_sync"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :required="required"
        @input="(event) => $emit('update:value', event.target.value)"
      />
    </template>
  </Field>
</template>

<script>
import propSync from '@/mixins/prop-sync.js';
import Field from '@/components/Form/Field';

export default {
  name: 'FieldTextarea',
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
    maxlength: {
      type: Number,
      default: null,
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
  mounted() {
    this.getCharactersLeft();
  },
  watch: {
    value_sync() {
      this.getCharactersLeft();
    }
  },
  computed: {
    id_sync() {
      return this.id || this.id_inner;
    }
  },
  methods: {
    getCharactersLeft() {
      if (!!this.maxlength) {
        const length = !!this.value_sync && this.value_sync.length || 0
        this.charactersLeft = this.maxlength - length;
      }
    }
  }
};
</script>

