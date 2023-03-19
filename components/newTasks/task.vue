<template>
    <div class="bg-white leading-none rounded-lg shadow overflow-hidden p-3 mb-4 flex flex-row">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
            </svg>
            <p class="text-base font-medium leading-none text-gray-700 mr-2 pl-2">{{task.descr}}</p>
        </div>
        <div>
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
        <div>
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
        <div>
            <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Due today at {{task.dueDate}}</button>
        </div>
        <div>            
            <button
                @click="openModal(task.id)" 
                class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
            >View</button>
            <!-- Checkbox -->
            <div :class="[fakeTask.is_completed ? 'bg-indigo-500' : 'border-2', {'cursor-not-allowed' : isToggleLoading}]" class="rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center" @click="toggleCompleted">
                <fa v-if="isToggleLoading" icon="spinner" :class="[fakeTask.is_completed ? 'text-white' : 'text-indigo-500']" spin />
                <fa v-else icon="check" class="text-white" :class="{'hover:text-indigo-500' : ! fakeTask.is_completed}" />
            </div>
        </div>
    </div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'


export default {
    mixins: [clickaway],
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        fakeTask() {
            return {
                title: 'Task 3',
                is_completed: false        
            }
        }
    }
    
}

</script>
