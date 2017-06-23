<template>
  <form class="form">
    <v-card>
      <v-card-row>
        <v-card-title>Connexion</v-card-title>
      </v-card-row>

      <v-card-text>
        <v-text-field
          name="email"
          label="Email"
          :disabled="loading"
        ></v-text-field>

        <v-text-field
          name="password"
          label="Mot de passe"
          :append-icon="passwordVisible ? 'visibility_off' : 'visibility'"
          :append-icon-cb="togglePassword"
          :type="passwordVisible ? 'text' : 'password'"
          :disabled="loading"
        ></v-text-field>
      </v-card-text>

      <v-card-row actions>
        <v-btn
          @click.native="login"
          :disabled="loading"
          :loading="loading"
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

@Component({
  props: {
    passwordVisible: Boolean,
    loading: Boolean
  }
})
export default class Login extends Vue {
  passwordVisible = false

  loading = false

  login () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }

  togglePassword () {
    this.passwordVisible = !this.passwordVisible
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
