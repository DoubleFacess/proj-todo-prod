<template>
  <div>  
    <li v-on-clickaway="handleClickAway" class="my-4">
      <task-form v-if="editTask" ref="taskForm" :form="form" :error="error">
      <!--<task-form v-if="editTask" ref="taskForm" :form="form" :error="error" @submit="updateTask">-->
        <div class="flex items-center justify-start mt-2">
          <div class="flex items-center">
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
              @click.native="onToggle">Edit
            </loading-button>
            <span class="ml-4 mx-4 text-gray-800 text-sm cursor-pointer hover:underline" @click="cancelEdit">
              Cancel
            </span>
          </div>     
          <loading-button
            :is-loading="isRemoveLoading"
            :class="[isRemoveLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:underline hover:text-red-500']"
            type="button"
            icon="trash"
            class="mx-4 text-gray-800 text-sm ml-auto"
            @click.native="removeTask"
          >
            Delete
          </loading-button>
        </div>
      </task-form>
      <div v-else class="bg-white leading-none rounded-lg shadow overflow-hidden p-3 mb-4">
        <div class="flex items-center">
          <div class="flex-grow">
            <p class="font-semibold text-lg mx-2 text-left flex-auto cursor-pointer" :class="{'line-through text-gray-500' : task.is_completed}" @click="editTask = true">
              {{ task.title }}
            </p>
            <span v-if="task.due_at" :title="toDate" class="flex flex-shrink-0 mr-2 mt-2 px-2 py-1 text-xs cursor-pointer" :class="[task.is_completed ? 'line-through text-gray-500' : 'text-gray-600']" @click="editTask = true">
              <fa :icon="['far', 'clock']" class="mr-1" /> {{ fromNow }}
            </span>
          </div>
          <!-- Checkbox -->
          <div :class="[task.is_completed ? 'bg-indigo-500' : 'border-2', {'cursor-not-allowed' : isToggleLoading}]" class="rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center" @click="toggleCompleted">
            <fa v-if="isToggleLoading" icon="spinner" :class="[task.is_completed ? 'text-white' : 'text-indigo-500']" spin />
            <fa v-else icon="check" class="text-white" :class="{'hover:text-indigo-500' : ! task.is_completed}" />
          </div>
        </div>
      </div>
    </li>
    <transition name="fade">
      <div v-if="isModalVisible">
        <div @click="onToggle" class="absolute opacity-70 inset-0 z-0"></div>
          <div class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
            <div>
              <div class="text-center p-3 flex-auto justify-center leading-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-16 h-16 flex items-center text-purple-500 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h2 class="text-2xl font-bold py-4">Are you sure?</h2>
                <p class="text-md text-gray-500 px-8">Do you really want to exit without saving your work?</p>
              </div>
              <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
              >Save
              </button>
              <button
                @click="onToggle"
                class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
              >Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import Form from '@/utils/Form'
import TaskForm from '@/components/Tasks/TaskForm'
import LoadingButton from '@/components/LoadingButton'
/*import Task from '@/models/Task'*/

dayjs.extend(relativeTime)
dayjs.extend(advancedFormat)

export default {
  components: {
    TaskForm,
    LoadingButton,
  },
  mixins: [clickaway],
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isOpen: false,
      isToggleLoading: false,
      isRemoveLoading: false,
      isUpdateLoading: false,
      editTask: false,
      error: null,
      form: this.setForm(this.task)
    }
  },
  computed: {
    isModalVisible() {
      return this.isOpen;
    },
    isDisabled () {
      return this.form.title === '' || this.isUpdateLoading
    },

    isNotLoading () {
      return !(this.isToggleLoading || this.isRemoveLoading || this.isUpdateLoading)
    },

    fromNow () {
      return dayjs(this.task.due_at).fromNow()
    },

    toDate () {
      return dayjs(this.task.due_at).format('dddd, MMMM Do YYYY, h:mm:ss a')
    }
  },
  watch: {
    task () { this.form = this.setForm(this.task) }
  },
  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
    toggleCompleted () {
      if (this.isToggleLoading) {
        return false
      }
      this.isToggleLoading = true
      this.error = null
      Task.$update({
        params: { id: this.task.id },
        data: { is_completed: !this.task.is_completed }
      }).then(() => {
        this.isToggleLoading = false
      })
        .catch(error => {
          this.error = error.response.data
          this.isToggleLoading = false
        })
    },
    updateTask () {
      this.onToggle()
      if (this.isDisabled) {
        return false
      }
      this.isUpdateLoading = true
      this.error = null
      Task.$update({
        params: { id: this.task.id },
        data: {
          title: this.form.title,
          due_at: dayjs(this.form.due_at).second(0)
        }
      }).then(data => {
        this.form.due_at = data.due_at
        this.isUpdateLoading = false
        this.editTask = false
      })
      .catch(error => {
        this.isUpdateLoading = false
        this.error = error.response.data
      })
      this.$route.push('/register')
    },
    cancelEdit () {
      this.editTask = false
      this.error = null

      this.form.title = this.task.title
      this.form.due_at = this.task.due_at
    },
    clearDueAt () {
      this.form.due_at = null
    },
    removeTask () {
      if (this.isRemoveLoading || !window.confirm('Are you sure ? Your task will be deleted forever.')) {
        return false
      }

      this.isRemoveLoading = true
      this.error = null

      Task.$delete({
        params: { id: this.task.id }
      })
        .catch(error => {
          this.error = error.response.data
        })
    },
    setForm (task) {
      return new Form({
        title: this.task.title,
        due_at: this.task.due_at
      })
    },
    handleClickAway () {
      this.error = null

      if (this.editTask && this.isNotLoading) {
        this.cancelEdit()
      }
    }
  }
}
</script>
