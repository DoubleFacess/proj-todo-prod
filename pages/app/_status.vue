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
    <nuxt-link 
      :class="[status === 'completed' ? 'pill-active' : 'pill-inactive']" 
      class="pill-default lg:flex-grow-0 no-underline" 
      :to="{name: 'app-status', params: { status: 'completed' }}" 
      exact
    >Tutti ({{ completedTasks.length }})</nuxt-link>
    <div class="container mx-auto mt-3 px-4">
      <div v-if="false && isLoading" class="text-xl text-center my-6 text-gray-800">
        <fa icon="spinner" class="mr-1" spin />Loading
      </div>
    <transition-group class="relative" name="fade-out-left" tag="ul">
      <task v-for="task in storageTasks"
        :key="task.id"
        :task="task"
        class="animated task-item"
      />
    </transition-group>
    <new-task v-if="status != 'completed'" />
    <div v-else class="flex justify-end my-4">
      <loading-button v-if="completedTasks.length"
        :is-loading="isRemoveLoading"
        :class="[isRemoveLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:underline hover:text-red-500']"
        type="button"
        icon="trash"
        class="text-gray-800 text-sm"
        @click.native="deleteTasks"
      >Delete completed tasks
      </loading-button>
    </div>
    <div v-if="timeToChill" class="text-center mb-6">
      <p class="text-5xl">🍻</p>Time to chill ! You have no tasks
    </div>
  </div>
</div>
</template>

<script>

import { mapGetters } from 'vuex'

import Task from '@/components/Tasks/Task'
import NewTask from '@/components/Tasks/NewTask'
import LoadingButton from '@/components/LoadingButton'
import editTasks from '@/components/Tasks/editTasks'


/*import TaskModel from '@/models/Task'*/

export default {
  components: {
    Task,
    NewTask,
    LoadingButton,
    editTasks
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


