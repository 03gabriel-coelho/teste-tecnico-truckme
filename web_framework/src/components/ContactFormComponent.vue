<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const successMessage = ref(false);
const errorMessage = ref(false);

const validateForm = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (name.value.trim().length > 0 && emailRegex.test(email.value.trim()) && message.value.trim().length > 0) {
    successMessage.value = true;
    errorMessage.value = false;
    name.value = '';
    email.value = '';
    message.value = '';

    setTimeout(() => {
      successMessage.value = false;
    }, 10000)
  } else {
    successMessage.value = false;
    errorMessage.value = true;
  }
};

defineProps({})
</script>

<template>
  <form class="contact-form" id="contact-form" @submit.prevent="validateForm">
    <h1 class="title">Contato</h1>
    <label for="contact-name"
      >Nome
      <input
        type="text"
        id="contact-name"
        name="contact-name"
        placeholder="Digite seu nome"
        v-model="name"
      />
    </label>
    <label for="contact-email"
      >E-mail
      <input
        type="email"
        id="contact-email"
        name="contact-email"
        placeholder="Digite seu e-mail"
        v-model="email"
      />
    </label>
    <label for="contact-message"
      >Mensagem
      <textarea
        id="contact-message"
        name="contact-message"
        rows="4"
        value="aaaa"
        placeholder="Deixe sua mensagem"
        v-model="message"
      ></textarea>
    </label>
    <p id="form-success" :class="{ 'show': successMessage }">Enviado com sucesso!</p>
    <p id="form-error" :class="{ 'show': errorMessage }">Preencha os campos corretamente!</p>
    <button id="button-send-form" type="submit">Enviar</button>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.contact-form h1 {
  margin-bottom: 10px;
  margin-top: 20px;
}

.contact-form label {
  display: flex;
  flex-direction: column;
}

.contact-form label input {
  margin-top: 3px;
  margin-bottom: 10px;
  min-width: 29vw;
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  border: 1px solid #F05123;
  border-radius: 10px;
  font-family: 'Montserrat';
}

.contact-form label textarea {
  margin-top: 3px;
  margin-bottom: 10px;
  min-width: 29vw;
  width: 29vw;
  height: 200px;
  resize: none;
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  border: 1px solid #F05123;
  border-radius: 10px;
  font-family: 'Montserrat';
}

.contact-form button {
  margin-bottom: 20px;
}

.contact-form p {
  margin: 2px 0px 10px 0px;
}

.contact-form #form-success {
  display: none;
  color: green;
}

.contact-form #form-error {
  display: none;
  color: red;
}

.contact-form #form-success.show {
  display: flex;
}

.contact-form #form-error.show {
  display: flex;
}

@media (max-width: 700px) {
  .contact-form label input {
    min-width: 70vw;
  }

  .contact-form label textarea {
    min-width: 70vw;
  }
}
</style>
