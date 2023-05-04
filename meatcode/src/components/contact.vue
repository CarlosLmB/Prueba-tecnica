<template>
  
  <div class="contactanos">
      <h2>Contáctanos</h2>
      <img src="../assets/images/BRUSH-5.png" alt="">
  </div>
  

  
  <div class="form-group">
    <form @submit.prevent="submitForm" :class="{ disabled: isLoading || isDisabled }">
  <div class="name">
    <label for="nombre" :class="{ 'error': !fields.nombre.valid }">NOMBRE</label><br>
    <input type="text" id="nombre" placeholder="Escriba su Nombre" v-model="fields.nombre.value" required>
  </div>
  <div class="lastname">
    <label for="apellido" :class="{ 'error': !fields.apellido.valid }">APELLIDO</label><br>
    <input type="text" id="apellido" placeholder="Escriba su Apellido" v-model="fields.apellido.value" required>
  </div><br>
  <div class="email">
    <label for="email" :class="{ 'error': !fields.email.valid }">MAIL</label>
    <input type="email" id="email" placeholder="Escriba su Email" v-model="fields.email.value" required>
  </div>
  <div class="phone">
    <label for="telefono" :class="{ 'error': !fields.telefono.valid }">TELÉFONO</label>
    <input type="tel" id="telefono" placeholder="Escriba su Teléfono" v-model="fields.telefono.value" required>
  </div><br>
  <button type="submit" :disabled="isLoading || isDisabled">{{ isLoading ? 'Enviando...' : 'Enviar' }}</button>
</form>
  </div>
  

    
</template>

<script>
import axios from 'axios';

export default {
  name: 'Contact',
  data() {
    return {
      fields: {
        nombre: {
          value: '',
          valid: true
        },
        apellido: {
          value: '',
          valid: true
        },
        email: {
          value: '',
          valid: true
        },
        telefono: {
          value: '',
          valid: true
        }
      },
      isLoading: false,
      isDisabled: false
    };
  },
  computed: {
    nombreValido() {
      return this.validateField('nombre', this.fields.nombre.value);
    },
    apellidoValido() {
      return this.validateField('apellido', this.fields.apellido.value);
    },
    emailValido() {
      return this.validateField('email', this.fields.email.value);
    },
    telefonoValido() {
      return this.validateField('telefono', this.fields.telefono.value);
    }
  },
  methods: {
    validateField(fieldName, value) {
      switch (fieldName) {
        case 'nombre':
        case 'apellido':
          return value.trim() !== '';
        case 'email':
          return value.includes('@');
        case 'telefono':
          return /^[0-9]+$/.test(value.trim());
        default:
          return true;
      }
    },
    submitForm() {
      this.isLoading = true;

      Object.values(this.fields).forEach(field => {
        field.valid = this.validateField(field.name, field.value);
      });

      if (Object.values(this.fields).every(field => field.valid)) {
        const formData = {
          nombre: this.fields.nombre.value,
          apellido: this.fields.apellido.value,
          email: this.fields.email.value,
          telefono: this.fields.telefono.value
        };
        axios.post('https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter', formData)
          .then(response => {
            console.log(response);
            this.isDisabled = true;
            this.resetFields();
            this.setFormDisabled(true, '#EAEAEA');
          })
          .catch(error => {
            console.log(error);
            this.setFormDisabled(true, 'red');
          })
          .finally(() => {
            this.isLoading = false;
          });
      } else {
        this.isLoading = false;
      }
    },
    resetFields() {
      Object.values(this.fields).forEach(field => {
        field.value = '';
        field.valid = true;
      });
      this.isDisabled = true;
    },
    setFormDisabled(disabled, borderColor) {
      const form = document.querySelector('.form-group form');
      const boton = document.querySelector('.form-group button');
      const inputs = form.querySelectorAll('input');

      form.disabled = disabled;
      boton.disabled = disabled;

      inputs.forEach(input => {
        input.style.borderColor = borderColor;
      });
      boton.style.borderColor = borderColor;
    }
  }
};
</script>


<style>
@media(max-width: 768px) {
  .name, .lastname, .email, .phone {
    width: 100%;
  }

  .lastname input {
    margin-right: 0;
  }

  .email input {
    margin-left: 0;
  }
}
</style>