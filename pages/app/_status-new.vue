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
    
      <div v-if="isModalVisible">
        <div @click="onToggle" class="absolute opacity-70 inset-0 z-0"></div>
          <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Modal Title
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="my-4 text-slate-500 text-lg leading-relaxed">
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
            </p>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>    
      </div>
    
    <nuxt-link 
        :class="[status === 'completed' ? 'pill-active' : 'pill-inactive']" 
        class="pill-default lg:flex-grow-0 no-underline" 
        :to="{name: 'app-status', params: { status: 'completed' }}" 
        exact
      >Tutti ({{ completedTasks.length }})</nuxt-link>
    <div class="container mx-auto mt-3 px-4">
      <div v-if="false && isLoading" class="text-xl text-center my-6 text-gray-800">
        <fa icon="spinner" class="mr-1" spin />
        Loading
      </div>
      <transition-group class="relative" name="fade-out-left" tag="ul">
        <task v-for="task in fakeTasks"
          :key="task.id"
          :task="task"
          class="animated task-item"
        />
      </transition-group>
      <new-task v-if="status != 'completed'" />
      <div v-else class="flex justify-end my-4">
        <loading-button
          v-if="completedTasks.length"
          :is-loading="isRemoveLoading"
          :class="[isRemoveLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:underline hover:text-red-500']"
          type="button"
          icon="trash"
          class="text-gray-800 text-sm"
          @click.native="deleteTasks"
        >
          Delete completed tasks
        </loading-button>
      </div>

      <div v-if="timeToChill" class="text-center mb-6">
        <p class="text-5xl">
          🍻
        </p>
        Time to chill ! You have no tasks
      </div>      
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import Task from '@/components/Tasks/Task'
import NewTask from '@/components/Tasks/NewTask'
import LoadingButton from '@/components/LoadingButton'

/*import TaskModel from '@/models/Task'*/

export default {
  components: {
    Task,
    NewTask,
    LoadingButton      
  },
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
    this.$root.$on('my-event', (payload) => {
      console.log('yes', payload)
      this.onToggle()
      
    })  
  },
  computed: {
    isModalVisible() {
      return this.isOpen;
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
    //const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const tasks = this.getLocalStorageArray('tasks') || []
    this.$store.commit('setTasks', tasks)
    window.addEventListener('storage', this.handleStorageEvent)
    window.addEventListener('storage', console.log('test 1'))
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.handleStorageEvent)
  },
  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
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


