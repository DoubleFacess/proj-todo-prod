<template>  
  <div class="w-full max-w-screen-sm">
    <h1 class="text-4xl font-bold text-center mb-6">
      <nuxt-link class="text-gray-900 no-underline hover:underline" to="/" exact>Nuovo Task</nuxt-link>
    </h1>
    <form class="form-card" @keydown="form.errors.clear($event.target.name)">
    <!--<form class="form-card" @submit.prevent="register" @keydown="form.errors.clear($event.target.name)">-->
      <div class="mb-4">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="name">Descrizione</label>
        <input id="name" v-model="form.descr" v-focus class="form-control" type="text" :class="{ 'border-red-500 mb-3' : form.errors.has('descr') }" name="name" placeholder="Mario Rossi, Tribunale Catania, 095366820">
        <p v-if="form.errors.has('descr')" class="text-red-500 text-xs italic">{{ form.errors.get('name') }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="username">Ticket</label>
        <input id="ticket" v-model="form.ticket" class="form-control" :class="{ 'border-red-500 mb-3' : form.errors.has('ticket') }" name="ticket" placeholder="Ticket">
        <p v-if="form.errors.has('ticket')" class="text-red-500 text-xs italic">{{ form.errors.get('ticket') }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="username">Chiave sessione</label>
        <input id="keySession" v-model="form.keySession" class="form-control" :class="{ 'border-red-500 mb-3' : form.errors.has('keySession') }" name="ticket" placeholder="keySession">
        <p v-if="form.errors.has('keySession')" class="text-red-500 text-xs italic">{{ form.errors.get('keySession') }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="password">Pianificato</label>
        <input id="dueDate" v-model="form.dueDate" class="form-control" :class="{ 'border-red-500 mb-3' : form.errors.has('dueDate') }" type="date" name="dueDate" placeholder="Password">
        <p v-if="form.errors.has('password')" class="text-red-500 text-xs italic">{{ form.errors.get('dueDate') }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="password_confirmation">Note</label>
        <textarea v-model="form.notes" class="form-control" type="text-area" name="notes" placeholder="Note" rows="4" cols="8"></textarea>
      </div>        
      <!--footer-->
      <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <loading-button
          :is-loading="isUpdateLoading"
          :class="{'opacity-50 cursor-not-allowed' : isDisabled}"
          icon="check"
          class="btn-indigo text-sm"
          @click.native="updateTask">Save
        </loading-button>
        <loading-button
          :is-loading="isUpdateLoading"
          :class="{'opacity-50 cursor-not-allowed' : isDisabled}"
          icon="edit"
          class="btn-indigo-light text-sm mx-2"
          @click.native="close">Cancel
        </loading-button>
      </div>
      <div class="mt-4 text-sm">Already have an account ?
        <nuxt-link class="inline-block font-bold text-indigo-500 hover:text-indigo-800" :to="{ name: 'index' }" exact>Vai alla Home</nuxt-link>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      Source code available on 
      <a href="https://github.com/guillaumebriday/todolist-frontend-nuxt" class="text-gray-500">
        <fa :icon="['fab', 'github']" /> GitHub
      </a>.
    </p>
  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid'
import Form from '@/utils/Form'
import LoadingButton from '@/components/LoadingButton'

export default {
  components: {
    LoadingButton
  },
  data () {
    return {
      form: new Form({
        id: '',
        done: false,
        descr: '',
        ticket: '',
        keySession: '',
        notes: '',
        dueDate: '',
        appointment: '',
      }),
      isLoading: false,
      isDisabled: false,
      error: false
    }
  },

  computed: {
    isDisabled () {
      return this.form.incompleted() || this.isLoading
    }
  },
  methods: {
    close: function() { 
      this.isLoading = false     
      this.$eventBus.$emit('my-event')
    },
    setItem: function(data) {
      return localStorage.setItem('key', JSON.stringify(data))
      // Retrieve data from localstorage
    },
    test: function() {
      let id = uuidv4()
      this.form.id = id
      this.pushLocalStorageArrayItem('tasks', this.form)
      //this.setItem(this.form)
      //alert('test')
    },
    transition (to, from) {
      if (from && from.name === 'login') {
        return 'fade-out-left'
      }
    }
  },
  getItem: function(key) {
    const retrievedData = JSON.parse(localStorage.getItem(key))
  },
  
}
</script>
