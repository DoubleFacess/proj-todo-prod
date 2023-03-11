import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: []
    },
    getters: {
        allTasks: state => {
            return state.tasks
        },
        activeTasks: state => {
            return state.tasks.filter(task => !task.is_completed)
        },
        completedTasks: state => {
            return state.tasks.filter(task => task.is_completed)
        },
        filteredTasks: state => status => {
            switch (status) {
                case 'active':
                return state.tasks.filter(task => !task.is_completed)
                case 'completed':
                return state.tasks.filter(task => task.is_completed)
                default:
                return state.tasks
            }
        }
    },
    mutations: {
        SET_TASKS (state, tasks) {
            state.tasks = tasks
        },
        ADD_TASK (state, task) {
            state.tasks.push(task)
        },
        UPDATE_TASK (state, task) {
            const index = state.tasks.findIndex(t => t.id === task.id)
            if (index !== -1) {
                Vue.set(state.tasks, index, task)
            }
        },
        REMOVE_TASK (state, task) {
            state.tasks = state.tasks.filter(t => t.id !== task.id)
        },
        TOGGLE_TASK (state, task) {
            const index = state.tasks.findIndex(t => t.id === task.id)
            if (index !== -1) {
                Vue.set(state.tasks[index], 'is_completed', !task.is_completed)
            }
        }
    },
    actions: {
        fetchTasks ({ commit }) {
            // Esempio di chiamata ad API
            // axios.get('/api/tasks').then(response => {
            //   commit('SET_TASKS', response.data)
            // })
            // Nel nostro caso, utilizziamo dei fake tasks
            const tasks = [
                { id: 1, title: 'Task 1', is_completed: false },
                { id: 2, title: 'Task 2', is_completed: true },
                { id: 3, title: 'Task 3', is_completed: false }
            ]
            commit('SET_TASKS', tasks)
        },
        addTask ({ commit }, title) {
            // Esempio di chiamata ad API
            // axios.post('/api/tasks', { title }).then(response => {
            //   commit('ADD_TASK', response.data)
            // })
            // Nel nostro caso, aggiungiamo un fake task
            const task = { id: Date.now(), title, is_completed: false }
            commit('ADD_TASK', task)
        },
        updateTask ({ commit }, task) {
            // Esempio di chiamata ad API
            // axios.put(`/api/tasks/${task.id}`, task).then(response => {
            //   commit('UPDATE_TASK', response.data)
            // })
            // Nel nostro caso, aggiorniamo un fake task
            commit('UPDATE_TASK', task)
        },
        removeTask ({ commit }, task) {
            // Esempio di chiamata ad API
            // axios.delete(`/api/tasks/${task.id}`).then(response => {
            //   commit('REMOVE_TASK', task)
            // })
            // Nel nostro caso, rimuoviamo un fake task
            commit('REMOVE_TASK', task)
        },
        toggleTask ({ commit }, task) {
            // Esempio di chiamata ad API
            // axios.patch(`/api/tasks/${task.id}`, { is_completed: !task.is_completed }).then(response => {
            //   commit('TOGGLE_TASK', response.data)
            // })
            // Nel nostro caso, aggiorniamo un fake task
            const toggledTask = { ...task, is_completed: !task.is_completed }
            commit('TOGGLE_TASK', toggledTask)
        }
    }
})
