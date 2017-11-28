<template>
  <form class="form" @submit.prevent="login">
    <v-card>
      <v-card-row>
        <v-card-title>Connexion</v-card-title>
      </v-card-row>

      <v-card-text>
        <v-text-field
          name="email"
          label="Email"
          :disabled="loading"
          :value="username"
          @input="inputUsername"
        ></v-text-field>

        <v-text-field
          name="password"
          label="Mot de passe"
          :append-icon="passwordVisible ? 'visibility_off' : 'visibility'"
          :append-icon-cb="togglePassword"
          :type="passwordVisible ? 'text' : 'password'"
          :disabled="loading"
          :value="password"
          @input="inputPassword"
        ></v-text-field>
      </v-card-text>

      <v-card-row actions>
        <v-btn
          :disabled="loading"
          :loading="loading"
          :type="'submit'"
        >Se connecter</v-btn>
      </v-card-row>
      <v-card-row actions>
        <router-link :to="{ name: 'forgotPassword' }">Mot de passe oublié ?</router-link>
      </v-card-row>
      <v-card-row actions>
        <router-link :to="{ name: 'signup' }">Première fois sur ce site ?</router-link>
      </v-card-row>
    </v-card>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import LoginModule from './LoginModule'

@Component
export default class Login extends Vue {
  get username () { return LoginModule.state.username }
  get password () { return LoginModule.state.password }
  get loading () { return LoginModule.state.loading }
  get passwordVisible () { return LoginModule.state.passwordVisible }

  inputUsername (value: string) {
    LoginModule.inputUsername(value)
  }

  inputPassword (value: string) {
    LoginModule.inputPassword(value)
  }

  togglePassword () {
    LoginModule.togglePassword()
  }

  login () {
    LoginModule.login()
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.form {
  max-width: 500px;
  margin: 0 auto;
}
</style>
