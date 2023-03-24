<template>
  <div>
    <div class="flex justify-center shadow">
      <nuxt-link
        :class="[status === 'today' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'today'}}"
        exact
      >Oggi ({{ activeTasksToday.length }})</nuxt-link>
      <nuxt-link 
        :class="[status === 'week' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'week' }}" 
        exact
      >Settimana ({{ activeTasksWeek.length }})</nuxt-link>
      <nuxt-link 
        :class="[status === 'active' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'active' }}" 
        exact
      >Attivi ({{ activeTasks.length }})</nuxt-link>
      <nuxt-link 
        :class="[status === 'completed' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'all' }}" 
        exact
      >Completati({{ completedTasks.length }})</nuxt-link>
      <nuxt-link 
        :class="[status === 'all' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'all' }}" 
        exact
      >Tutti ({{ allTasks.length }})</nuxt-link>
    </div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <!-- component -->
        <div class="sm:px-6 w-full">
          <!-- main table -->
          <!-- Header Main -->
          <div class="px-4 md:px-10 py-4 md:py-7">
            <div class="flex items-center justify-between">
              <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Tasks</p>
              <div class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Sort By:</p>
                <select aria-label="select" class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                  <option class="text-sm text-indigo-800">Latest</option>
                  <option class="text-sm text-indigo-800">Oldest</option>
                  <option class="text-sm text-indigo-800">Latest</option>
                </select>
              </div>
            </div>
          </div>
          <button class="animated fastest hover:underline text-gray-800 text-sm cursor-pointer mb-5" @click="openModal(0)">
            <fa icon="plus" class="mr-1" />Add task
          </button>
          <div v-if="timeToChill" class="text-center mb-6">
            <p class="text-5xl">🍻</p>Time to chill ! You have no tasks
          </div>
          <div v-else class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div class="mt-7 overflow-x-auto">
              <table class="w-full whitespace-nowrap">
                <tbody>
                  <tr tabindex="0" 
                    class="focus:outline-none h-16 border border-gray-100 rounded"
                    v-for="task in filteredTasks"
                    :key="task.id"
                    :task="task"                    
                  >
                    <td class="">
                      <div class="flex items-center pl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                          <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                        </svg>
                        <p class="text-base font-medium leading-none text-gray-700 mr-2 pl-2">{{task.descr}}</p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm leading-none text-gray-600 ml-2">{{task.ticket}}</p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p class="text-sm leading-none text-gray-600 ml-2">{{task.keySession}}</p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Due today at {{task.dueDate}}</button>
                    </td>
                    <td class="pl-4">
                      <button
                        @click="openModal(task.id)" 
                        class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                      >View</button>
                    </td>
                    <td>
                      <div class="relative px-5 pt-2">
                        <!-- Checkbox
                        <div class="bg-indigo-500 rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center">
                          <fa icon="check" class="text-white hover:text-indigo-500" />
                        </div>
                        -->
                        <!-- Checkbox
                        <div 
                          :class="[filteredTasks.done ? 'bg-indigo-500' : 'border-2', {'cursor-not-allowed' : isToggleLoading}]" 
                          class="rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center"
                          @click="toggleCompleted(task.id)
                        ">
                          <fa v-if="isToggleLoading" icon="spinner" :class="[task.done ? 'text-white' : 'text-indigo-500']" spin />
                          <fa v-else icon="check" class="text-white" :class="{'hover:text-indigo-500' : ! task.done}" />
                          {{task.done}}
                        </div>
                        --->
                        <div
                          :class="[task.done ? 'bg-indigo-500' : 'border-2', {'cursor-not-allowed' : isToggleLoading}]"
                          
                          class="rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center"
                          @click="toggleCompleted(task.id)"
                        >
                          <fa v-if="isToggleLoading" icon="spinner" :class="[task.done ? 'text-white' : 'text-indigo-500']" spin />
                          <fa v-else icon="check" class="text-white" :class="{'hover:text-indigo-500' : !task.done}" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal -->
    <div v-if="isModalVisible">
      <!--<div @click="onToggle" class="absolute opacity-70 inset-0 z-0" style="background-color: rgba(0, 0, 0, 0.5)"></div>-->
      <div  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bg-indigo-100" @click="closeModal">
        <div class="relative w-full my-6 mx-auto max-w-3xl">
          <!--Form Component-->
          <editTasks :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'




/*import TaskModel from '@/models/Task'*/
import editTasks from '@/components/Tasks/editTasks'

export default {
  components: {
    editTasks
  },
  data () {
    return {
      isOpen: false,
      isLoading: false,
      isToggleLoading: false,
      task: null,
      /*
      isRemoveLoading: false,
      isAnimated: true,
      initialTasks: [],
      */
    }
  },
  mounted: function(){
    //this.onToggle()
    this.$root.$on('my-event', () => {      
      this.onToggle()      
    })
    this.$eventBus.$on('my-event', () => {
      this.onToggle()
    })
    console.log('env', $nuxt.$route)
  },
  computed: {
    activeTasks () {
      return this.storageTasks.filter(task => !task.done)
    },
    activeTasksToday () {
      //return this.storageTasks
      var self = this // Assegna l'oggetto "this" a una variabile locale
      // Filtra i task in base alla data di scadenza
      var tasksDueToday = self.storageTasks.filter(task => {
        var today = new Date()
        var taskDate = new Date(task.date)
        // Verifica se il task è da fare e se la data di scadenza corrisponde a oggi
        return !task.done && taskDate.toDateString() === today.toDateString()
      })
      return tasksDueToday
    },
    activeTasksWeek: function() {
      const self = this // Assegna l'oggetto "this" a una variabile locale
      // Calcola la data del primo giorno della settimana corrente
      const today = new Date()
      // Aggiungi un giorno alla data corrente per ottenere la data di domani
      const tomorrow = new Date()
      tomorrow.setDate(today.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0) // imposta le ore a mezzanotte
      const firstDayOfThisWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1))
      console.log('first week day', firstDayOfThisWeek)
      // Calcola la data del primo giorno della settimana successiva
      const nextWeek = new Date(today.setDate(today.getDate() + 7))
      var firstDayOfNextWeek = new Date(nextWeek.setDate(nextWeek.getDate() - nextWeek.getDay() + 1))
      console.log('first next week day', nextWeek)
      // Filtra i task in base alla data di scadenza
      let tasksDueNextWeek = self.storageTasks.filter(task => {
        let taskDate = new Date(task.date)
        // Verifica se il task è da fare e se la data di scadenza appartiene alla settimana successiva
        return !task.done && taskDate >= tomorrow && taskDate < new Date(firstDayOfNextWeek.getTime() + 7 * 24 * 60 * 60 * 1000)
      })
      return tasksDueNextWeek
    },
    activeTasksWeek3: function() {
       var self = this  // Assegna l'oggetto "this" a una variabile locale
      // Calcola la data del primo giorno della settimana corrente
      var today = new Date()
      var firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1))
      // Calcola la data del primo giorno della settimana successiva
      var nextWeek = new Date(today.setDate(today.getDate() + 7))
      var firstDayOfNextWeek = new Date(nextWeek.setDate(nextWeek.getDate() - nextWeek.getDay() + 1))
      // Filtra i task in base alla data di scadenza
      var tasksDueNextWeek = self.storageTasks.filter(task => {
        var taskDate = new Date(task.dueDate)
        // Verifica se il task è da fare e se la data di scadenza appartiene alla settimana successiva
        return !task.done && taskDate >= firstDayOfNextWeek && taskDate < new Date(firstDayOfNextWeek.getTime() + 7 * 24 * 60 * 60 * 1000)
      })
      return tasksDueNextWeek
    },
    getTasksDueNextWeek1: function() {
      var self = this; // Assegna l'oggetto "this" a una variabile locale
      // Calcola la data di oggi e la data del primo giorno della settimana corrente
      var today = new Date();
      var firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));
      // Calcola la data del primo giorno della settimana successiva
      var nextWeek = new Date(today.setDate(today.getDate() + (7 - today.getDay()) + 1));
      // Filtra i task in base alla data di scadenza
      var tasksDueNextWeek = self.storageTasks.filter(function(task) {
        var taskDate = new Date(task.dueDate);
        // Verifica se il task è da fare e se la data di scadenza appartiene alla settimana successiva
        return !task.done && taskDate >= nextWeek && taskDate < new Date(nextWeek.getTime() + 7 * 24 * 60 * 60 * 1000);
      });
      return tasksDueNextWeek
    },
    allTasks () {
      return this.storageTasks
    },
    completedTasks () {     
      return this.storageTasks.filter(task => task.done)
    },
    filteredTasks() {
      switch (this.$route.params.status) {
        case 'active':
          return this.activeTasks
        case 'today':
          return this.activeTasksToday
        case 'week':
          return this.activeTasksWeek
        case 'completed':
          return this.completedTasks
        case 'all':
          return this.allTasks
        default:
          return this.activeTasksToday
      }
    },
    isModalVisible() {
      return this.isOpen
    },
    status () {
      console.log(this.$route.params.status)
      return this.$route.params.status || 'all'
    },
    storageTasks() {
      let tasks = this.getLocalStorageArray('tasks')
      tasks.sort((a, b) => {
        const dateA = new Date(a.dueDate)
        const dateB = new Date(b.dueDate)
        return dateA - dateB
      })
      return tasks
    },
    timeToChill () {
      return this.filteredTasks.length === 0
    },
    fakeTask() {
      return {
        title: 'Task 3',
        is_completed: false        
      }
    }
  },
  /*
  computed: {
    isModalVisible() {
      return this.isOpen
    },
    allTasks () {
      return this.fakeTasks
    },
    activeTasks () {
      return this.fakeTasks.filter(task => !task.is_completed)
    },
    completedTasks () {
      return this.fakeTasks.filter(task => task.is_completed)
    },
    filteredTasks (array) {
      switch (this.status) {
        case 'active':
          return this.activeTasks
        case 'completed':
          return this.completedTasks
        default:
          return this.allTasks
      }
    },
    status () {
      console.log(this.$route.params.status)
      return this.$route.params.status || 'all'
    },
    tasks () {
      if (this.isAnimated) {
        return this.initialTasks
      }
      return this.filteredTasks
    },
    timeToChill () {
      return this.tasks.length === 0
    },
    storageTasks() {
      return this.getLocalStorageArray('tasks')
    },
  },
  */
  created() {
    console.log('root: created')
    //const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const tasks = this.getLocalStorageArray('tasks') || []
    //this.$store.commit('setTasks', tasks)
    window.addEventListener('storage', this.handleStorageEvent)
    window.addEventListener('storage', console.log('test 1'))
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.handleStorageEvent)
  },
  methods: {
    closeModal(event) {
      if (event.target.classList.contains('absolute')) {
        this.onToggle()
      }
    },
    getTask(id) {
      // Recupera l'array di tasks dal LocalStorage
      let tasks = this.getLocalStorageArray('tasks')
      // Filtra l'array in base all'ID
      let filteredTasks = tasks.filter(task => task.id === id)
      // Restituisci l'array filtrato
      return filteredTasks
    },
    openModal(id) {
      this.task = this.getTask(id)
      this.onToggle()
    },
    handleStorageEvent(event) {
      console.log('hi it works!')
      if (event.key === 'tasks') {
        const tasks = JSON.parse(event.newValue) || []
        this.$store.commit('setTasks', tasks)
      }
    },
    onToggle() {
      this.isOpen = !this.isOpen
    },
    toggleCompleted (_id) {
      console.log('arrive here? ', _id)
      if (this.isToggleLoading) {
        return false
      }
      this.isToggleLoading = true
      let tasks = JSON.parse(localStorage.getItem('tasks')) || []
      let index = tasks.findIndex(task => task.id === _id)
      if (index !== -1) {
        // If a task with the given id exists, update its properties
        tasks[index].done = true
        localStorage.setItem('tasks', JSON.stringify(tasks))
        this.isToggleLoading = false
        this.$router.push({
          name: 'app-status',
          params: {
            status: 'today'
          }
        })
        alert('test')
      }
    },
    /*
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
    }
    */
  },
  /*
  methods: {
    closeModal(event) {
      if (event.target.classList.contains('absolute')) {
        this.onToggle()
      }
    },
    onToggle() {
      this.isOpen = !this.isOpen
    },
    handleStorageEvent(event) {
      console.log('hi it works!')
      if (event.key === 'tasks') {
        const tasks = JSON.parse(event.newValue) || []
        this.$store.commit('setTasks', tasks)
      }
    },
    async deleteTasks () {
      this.isRemoveLoading = true
      const completedTasks = this.completedTasks.map(task => task.id)
      try {
        await this.$store.dispatch('entities/tasks/remove', completedTasks)
      } catch (error) {
        console.log(error)
      } finally {
        this.isRemoveLoading = false
      }
    },
    async setTasks () {        
      this.$store.commit('setTodos', this.storageTasks)
    }
  }
  */
}
</script>


