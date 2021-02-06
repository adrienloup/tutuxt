<template>
  <div class="form">

    <form novalidate @submit.prevent="submit()">

      <FieldText
        :value.sync="firstName"
        :label="'First Name'"
        :description="'Description of the field'"
        :placeholder="'Enter your first name'"
        :error="error.firstName"
        required
      />

      <FieldText
        :value.sync="lastName"
        :label="'Last Name'"
        :description="'Description of the field'"
        :placeholder="'Enter your last name'"
        :error="error.lastName"
        required
      />

      <FieldText
        :value.sync="email"
        :type="'email'"
        :label="'Email'"
        :description="'Description of the field'"
        :placeholder="'Enter your email'"
        :error="error.email"
        required
      />

      <ButtonPrimary type="submit">
        Valider
      </ButtonPrimary>

      <ButtonPrimary
        :type="'button'"
        @click="clear()"
      >
        Clear
      </ButtonPrimary>

    </form>

  </div>
</template>

<script>
import ButtonPrimary from '@/components/Button/Primary';
import FieldText from '@/components/Form/FieldText';

export default {
  name: 'Form',
  components: { ButtonPrimary, FieldText },
  values: {
    type: Object,
    default: () => {}
  },
  fields: {
    type: Object,
    default: () => {}
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      error: {},
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {
    submit() {
      this.error = {};
      if (!this.firstName) {
        this.error.firstName = 'First name is required';
      }
      if (!this.lastName) {
        this.error.lastName = 'Last name is required';
      }
      if (!this.email) {
        this.error.email = 'Email required';
      } else if (!this.validEmail(this.email)) {
        this.error.email = 'Valid email required';
      }
    },
    clear() {
      this.firstName = null;
      this.lastName = null;
      this.email = null;
      this.error = {};
    },
    validEmail(email) {
      return !!email && this.reg.test(email);
    }
  }
};
</script>
