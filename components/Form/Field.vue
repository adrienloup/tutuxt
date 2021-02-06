<template>
  <div class="form-field-field">

    <label v-if="label" for="id">
      {{ label }}
    </label>

    <br>

    <input
      v-bind="$attrs"
      id="id"
      :value="value"
      :type="type"
      :placeholder="placeholder"
    />

  </div>
</template>

<script>
export default {
  name: 'FormFieldField',
  props: {
    id: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    }
  }
};
</script>

