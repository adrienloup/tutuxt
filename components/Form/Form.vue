<template>
  <div class="form">

    <form novalidate @submit.prevent="submit()">

      <FieldText
        :value.sync="firstName"
        :label="'First Name'"
        :description="'Description of the firstName field'"
        :placeholder="'Enter your first name'"
        :error="error.firstName"
        required
      />

      <FieldSelect
        :value.sync="civility"
        :label="'Civility'"
        :description="'Description of the civility field'"
        :error="error.civility"
        required
      />

      <FieldText
        :value.sync="email"
        :type="'email'"
        :label="'Email'"
        :description="'Description of the email field'"
        :placeholder="'Enter your email'"
        :error="error.email"
        required
      />

      <FieldText
        :value.sync="password"
        :type="'password'"
        :label="'Password'"
        :description="'Password must contain more than 5 characters'"
        :placeholder="'Enter your password'"
        :error="error.password"
        required
      />

      <FieldTextarea
        :value.sync="message"
        :label="'Message'"
        :description="'characters maximum'"
        :placeholder="'Enter your message'"
        :maxlength="250"
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
import FieldSelect from '@/components/Form/FieldSelect';
import FieldText from '@/components/Form/FieldText';
import FieldTextarea from '@/components/Form/FieldTextarea';

export default {
  name: 'Form',
  components: { ButtonPrimary, FieldSelect, FieldText, FieldTextarea },
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
      civility: null,
      email: null,
      password: null,
      message: null,
      error: {},
      regPassword: /^[a-zA-Z0-9.-_]{5,20}(?<!\.)$/,
      regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {
    submit() {
      this.error = {};

      if (!this.firstName) {
        this.error.firstName = 'First name is required';
      }

      if (!this.civility) {
        this.error.civility = 'Civility is required';
      }

      if (!this.email) {
        this.error.email = 'Email required';
      } else if (!this.validEmail(this.email)) {
        this.error.email = 'Valid email required';
      }

      if (!this.password) {
        this.error.password = 'Password is required';
      } else if (!this.validPassword(this.password)) {
        this.error.password = 'Valid password required';
      }

    },
    clear() {
      this.firstName = null;
      this.civility = null;
      this.email = null;
      this.password = null;
      this.message = null;
      this.error = {};
    },
    validPassword(password) {
      return !!password && this.regPassword.test(password);
    },
    validEmail(email) {
      return !!email && this.regEmail.test(email);
    }
  }
};
</script>
