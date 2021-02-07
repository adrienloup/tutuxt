<template>
  <div class="form">

    <form novalidate @submit.prevent="submit()">

      <FieldText
        :value.sync="firstName"
        :id="'firstName'"
        :label="'First Name'"
        :description="'Description of the firstName field'"
        :placeholder="'Enter your first name'"
        :error="error.firstName"
        required
      />

      <FieldSelect
        :value.sync="civility"
        :id="'civility'"
        :label="'Civility'"
        :description="'Description of the civility field'"
      />

      <FieldText
        :value.sync="email"
        :id="'email'"
        :type="'email'"
        :label="'Email'"
        :description="'Description of the email field'"
        :placeholder="'Enter your email'"
        :error="error.email"
        required
      />

      <FieldText
        :value.sync="password"
        :id="'password'"
        :type="'password'"
        :label="'Password'"
        :description="'Password must contain more than 5 characters'"
        :placeholder="'Enter your password'"
        :error="error.password"
        required
      />

      <FieldTextarea
        :value.sync="message"
        :id="'message'"
        :label="'Message'"
        :description="'characters maximum'"
        :placeholder="'Enter your message'"
        :maxlength="250"
      />

      <FieldText
        :value.sync="signature"
        :id="'signature'"
        :label="'Signature'"
        :description="'characters maximum'"
        :placeholder="'Enter your signature'"
        :maxlength="70"
      />

      <FieldRadios
        v-model="society"
        :id="'society'"
        :label="'Society'"
        :description="'Accept the Society'"
        :items="[
          { value: '1', text: 'Individual' },
          { value: '2', text: 'Professional' }
        ]"
        :error="error.society"
        required
      />

      <FieldCheckboxs
        v-model="legals"
        :id="'legals'"
        :text="'Accept the Legal Notices'"
        :description="'Description of the Legal Notices'"
        :error="error.legals"
        required
      />

      <FieldCheckboxs
        v-model="terms"
        :id="'terms'"
        :text="'Accept the '"
        :text-link="'Terms of Sales'"
        :link="'https://fr.nuxtjs.org/'"
        :description="'Description of Terms of Sales'"
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
import FieldCheckboxs from '@/components/Form/FieldCheckboxs';
import FieldRadios from '@/components/Form/FieldRadios';
import FieldSelect from '@/components/Form/FieldSelect';
import FieldText from '@/components/Form/FieldText';
import FieldTextarea from '@/components/Form/FieldTextarea';

export default {
  name: 'Form',
  components: {
    ButtonPrimary,
    FieldCheckboxs,
    FieldRadios,
    FieldSelect,
    FieldText,
    FieldTextarea
  },
  data() {
    return {
      firstName: null,
      civility: null,
      email: null,
      password: null,
      message: null,
      signature: null,
      society: null,
      legals: null,
      terms: null,
      error: {},
      success: false,
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

      if (!this.society) {
        this.error.society = 'Society is required';
      }

      if (!this.legals) {
        this.error.legals = 'Legal Notices are required';
      }

      this.success = true;

    },
    validPassword(password) {
      return !!password && this.regPassword.test(password);
    },
    validEmail(email) {
      return !!email && this.regEmail.test(email);
    },
    clear() {
      this.firstName = null;
      this.civility = null;
      this.email = null;
      this.password = null;
      this.message = null;
      this.signature = null;
      this.society = null;
      this.legals = null;
      this.terms = null;
      this.error = {};
    }
  }
};
</script>
