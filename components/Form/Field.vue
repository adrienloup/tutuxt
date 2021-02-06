<template>
  <div
    class="field"
    :class="{ error: error }"
  >

    <label
      v-if="label"
      :for="id"
    >
      <slot name="label">
        {{ label }}
      </slot>
      <span v-if="required">*</span>
    </label>

    <slot name="default"></slot>

    <p v-if="description">
      <slot name="description">
        {{ description }}
      </slot>
    </p>

    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>

  </div>
</template>

<script>
export default {
  name: 'Field',
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
  }
};
</script>

<style lang="scss" scoped>
.field {

  label {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    display: block;
    font-size: .8rem;
  }

  .error {
    color: #FF4867;
  }

  &.error {

    input[type="text"],
    input[type="email"] {
      border-color: #FF4867;
    }
  }
}
</style>
