<template>  
  <div class="w-full max-w-screen-sm">
    <h1 class="text-4xl font-bold text-center mb-6">
      <nuxt-link class="text-gray-900 no-underline hover:underline" to="/" exact>Nuovo Task</nuxt-link>
    </h1>
    <form class="form-card">
    <!--<form class="form-card" @submit.prevent="register" @keydown="form.errors.clear($event.target.name)">-->
      <div class="mb-4">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="name">Descrizione</label>
        <input 
          id="name" 
          v-model="form.descr" 
          v-focus class="form-control" 
          type="text" 
          name="name" 
          placeholder="Mario Rossi, Tribunale Catania, 095366820"
        >
        <!--
        <p v-if="form.errors.has('descr')" class="text-red-500 text-xs italic">{{ form.errors.get('name') }}</p>
        -->
      </div>
      <div class="mb-4">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="username">Ticket</label>
        <input 
          id="ticket" 
          v-model="form.ticket" 
          class="form-control" 
          name="ticket" 
          placeholder="Ticket"
        >
        <!--
        <p v-if="form.errors.has('ticket')" class="text-red-500 text-xs italic">{{ form.errors.get('ticket') }}</p>
        -->
      </div>
      <div class="mb-4">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="username">Chiave sessione</label>
        <input 
          id="keySession" 
          v-model="form.keySession" 
          class="form-control" 
          name="ticket" 
          placeholder="keySession"
        >
        <!--
        <p v-if="form.errors.has('keySession')" class="text-red-500 text-xs italic">{{ form.errors.get('keySession') }}</p>
        -->
      </div>
      <div class="mb-6">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="password">Pianificato</label>
        <input 
          id="dueDate" 
          v-model="form.dueDate" 
          class="form-control" 
          type="date" 
          name="dueDate" 
          placeholder="Password"
        >
        <!--<p v-if="form.errors.has('password')" class="text-red-500 text-xs italic">{{ form.errors.get('dueDate') }}</p>-->
      </div>
      <div class="mb-6">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="password_confirmation">Note</label>
        <textarea 
          v-model="form.notes" 
          class="form-control" 
          type="text-area" 
          name="notes" 
          placeholder="Note" 
          rows="4" 
          cols="8"
        ></textarea>
      </div>        
      <!--footer-->
      <div class="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b">
        <loading-button
          :is-loading="isUpdateLoading"
          :class="{'opacity-50 cursor-not-allowed' : isDisabled}"
          icon="check"
          class="btn-indigo text-sm"
          @click.native="my_test(form.id)">Save
        </loading-button>
        <loading-button
          :is-loading="isUpdateLoading"
          :class="{'opacity-50 cursor-not-allowed' : isDisabled}"
          icon="edit"
          class="btn-indigo-light text-sm mx-2"
          @click.native="close">Cancel
        </loading-button>
      </div>
    </form>
  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid'
import Form from '@/utils/Form'
import Fetch from '@/utils/Fetch'
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
        dueDate: '',
        notes: ''
      }),
      isLoading: false,
      isDisabled: false,
      error: false
    }
  },
  props: {
    task: {
      type: Array,
      required: true,
      default: null
    }
  },
  computed: {
    isDisabled () {
      return this.form.incompleted() || this.isLoading
    }
  },
  created: function() {
    if (this.task && this.task.length > 0) {
      let obj = this.task[0]
      Object.assign(this.form, obj)
    }
  },
  methods: {
    setItem: function(data) {
      return localStorage.setItem('key', JSON.stringify(data))
      // Retrieve data from localstorage
    },
    addTask: function() {
      let id = uuidv4()
      this.form.id = id
      this.pushLocalStorageArrayItem('tasks', this.form)
      //this.setItem(this.form)
      //alert('test')
    },
    updateItem(id) {
      const items = this.getLocalStorageArray('tasks')
      const index = items.findIndex(item => item.id === id)
      if (index >= 0) {
        items[index] = { ...items[index], ...this.form }
        this.setItems(items)
        alert('done')
      }
    },
    my_test: function(_id) {
      let id = uuidv4()
      this.form.id = id
      let tasks = JSON.parse(localStorage.getItem('tasks')) || []
      // Find the index of the task with the given id
      let index = tasks.findIndex(task => task.id === _id)
      if (index !== -1) {
        // If a task with the given id exists, update its properties
        tasks[index].descr = this.form.descr
        tasks[index].ticket = this.form.ticket
        tasks[index].keySession = this.form.keySession
        tasks[index].dueDate = this.form.dueDate
        tasks[index].notes = this.form.notes
      } else {
        // If no task with the given id exists, add the new task to the array
        tasks.push(this.form)
      }
      localStorage.setItem('tasks', JSON.stringify(tasks))
      alert('test')
    },

    transition (to, from) {
      if (from && from.name === 'login') {
        return 'fade-out-left'
      }
    }
  }  
}
</script>
