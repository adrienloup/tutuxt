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
@import './assets/scss/var.scss';

.field {
  position: relative;
  overflow: hidden;

  label {
    display: block;
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    display: block;
    font-size: .8rem;
  }

  .select {
    position: relative;
    display: inline-block;

    &::after {
        display: block;
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 50%;
        right: .6rem;
        transform: translateY(-50%);
        z-index: 1;
        background: #fff;
        border-radius: .3rem;
        border-left: .6rem solid transparent;
        border-right: .6rem solid transparent;
        border-top: .6rem solid rgba(0, 0, 0, .2);
        pointer-events: none;
      }
  }

  input[type="radio"] {
    position: absolute;
    top: -100%;

    & + label {
      display: inline-block;
      padding: .6rem;
      background: #fff;
      border-radius: .3rem;
      border: 3px solid rgba(0, 0, 0, .2);
      font-size: .9rem;
      font-weight: normal;
      cursor: pointer;
    }

    &:checked + label {
      font-weight: bold;
    }
  }

  input[type="checkbox"] {
    position: absolute;
    top: -100%;

    & + label {
      display: inline-block;
      position: relative;
      padding: 0 1rem 0 1.8rem;

      &::before {
        display: none;
        content: "";
        width: .9rem;
        height: .9rem;
        position: absolute;
        top: .3rem;
        left: .3rem;
        z-index: 2;
        background: rgba(0, 0, 0, .2);
        border-radius: .1rem;
      }

      &::after {
        display: block;
        content: "";
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: #fff;
        border-radius: .3rem;
        border: 3px solid rgba(0, 0, 0, .2);
      }
    }

    &:checked + label::before {
      display: block;
    }
  }

  .error {
    font-weight: bold;
    color: $color-secondary;
  }

  &.error {

    input[type="text"],
    input[type="email"],
    input[type="password"],
    select,
    textarea {
      border-color: $color-secondary;
    }

    input[type="radio"] {

      & + label {
        border-color: $color-secondary;
        color: $color-secondary;
      }
    }

    input[type="checkbox"] {

      & + label {
        color: $color-secondary;

        a {
          color: $color-secondary;
        }

        &::before {
          background: $color-secondary;
        }

        &::after {
          border-color: $color-secondary;
        }
      }
    }
  }
}
</style>
