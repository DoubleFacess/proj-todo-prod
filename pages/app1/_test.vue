<template>
  <div>
    <div class="flex justify-center shadow">
      <nuxt-link
        :class="[status === 'completed' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'completed ' }}"
        exact
      >Oggi ({{ completedTasks.length }})</nuxt-link>
      <nuxt-link 
        :class="[status === 'completed' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'completed' }}" 
        exact
      >Settimana ({{ completedTasks.length }})</nuxt-link>
      <nuxt-link 
        :class="[status === 'active' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'active' }}" 
        exact
      >Attivi ({{ activeTasks.length }})</nuxt-link>
      <nuxt-link 
        :class="[status === 'all' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'all' }}" 
        exact
      >Completati({{ allTasks.length }})</nuxt-link>
      <nuxt-link 
        :class="[status === 'completed' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'completed' }}" 
        exact
      >Tutti ({{ completedTasks.length }})</nuxt-link>
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
        </div>
      </div>
    </section>
    <!-- Modal -->
    <div v-if="isModalVisible">
      <!--<div @click="onToggle" class="absolute opacity-70 inset-0 z-0" style="background-color: rgba(0, 0, 0, 0.5)"></div>-->
      <div  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bg-indigo-100" @click="closeModal">
        <div class="relative w-auto my-6 mx-auto max-w-3xl">
          <!--Form Component-->
          <editTasks />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'




/*import TaskModel from '@/models/Task'*/

export default {
  data () {
    return {
      isOpen: false,
      isLoading: false,
      isRemoveLoading: false,
      isAnimated: true,
      initialTasks: [],
      fakeTasks: [
        {
          id: 1,
          title: 'Task 1',
          is_completed: false
        },
        {
          id: 2,
          title: 'Task 2',
          is_completed: true
        },
        {
          id: 3,
          title: 'Task 3',
          is_completed: false
        }
      ]
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
  },
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
    filteredTasks () {
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
}
</script>


