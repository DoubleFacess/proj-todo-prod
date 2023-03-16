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
          <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                
                <div class="mt-7 overflow-x-auto">
                    <table class="w-full whitespace-nowrap">
                        <tbody>
                            <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                                <td class="">
                                    <div class="flex items-center pl-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                        </svg>
                                        <p class="text-base font-medium leading-none text-gray-700 mr-2 pl-2">Russo Giuseppe, trib Catania, 032825776, another number 0928556699</p>
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
                                        <p class="text-sm leading-none text-gray-600 ml-2">INC0225771</p>
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
                                        <p class="text-sm leading-none text-gray-600 ml-2">4848765</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Due today at 18:00</button>
                                </td>
                                <td class="pl-4">
                                    <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                </td>
                                <td>
                                    <div class="relative px-5 pt-2">
                                        <!-- Checkbox -->
                                        <div class="bg-indigo-500 rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center">
                                            <fa icon="check" class="text-white hover:text-indigo-500" />
                                        </div>
                                        <!--
                                        <button class="focus:ring-2 rounded-md focus:outline-none" onclick="dropdownFunction(this)" role="button" aria-label="option">
                                            <svg class="dropbtn" onclick="dropdownFunction(this)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <div class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                            <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Edit</p>
                                        </div>
                                        <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                    -->
                                    </div>
                                </td>
                            </tr>
                            <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                                <td class="">
                                    <div class="flex items-center pl-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                        </svg>
                                        <p class="text-base font-medium leading-none text-gray-700 mr-2 pl-2">Russo Giuseppe, trib Catania, 032825776, another number 0928556699</p>
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
                                        <p class="text-sm leading-none text-gray-600 ml-2">INC0225771</p>
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
                                        <p class="text-sm leading-none text-gray-600 ml-2">4848765</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Due today at 18:00</button>
                                </td>
                                <td class="pl-4">
                                    <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                </td>
                                <td>
                                    <div class="relative px-5 pt-2">
                                        <!-- Checkbox -->
                                        <div class="bg-indigo-500 rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center">
                                            <fa icon="check" class="text-white hover:text-indigo-500" />
                                        </div>
                                        <!--
                                        <button class="focus:ring-2 rounded-md focus:outline-none" onclick="dropdownFunction(this)" role="button" aria-label="option">
                                            <svg class="dropbtn" onclick="dropdownFunction(this)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <div class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                            <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Edit</p>
                                        </div>
                                        <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                    -->
                                    </div>
                                </td>
                            </tr>
                            <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                                <td class="">
                                    <div class="flex items-center pl-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                        </svg>
                                        <p class="text-base font-medium leading-none text-gray-700 mr-2 pl-2">Russo Giuseppe, trib Catania, 032825776, another number 0928556699</p>
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
                                        <p class="text-sm leading-none text-gray-600 ml-2">INC0225771</p>
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
                                        <p class="text-sm leading-none text-gray-600 ml-2">4848765</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Due today at 18:00</button>
                                </td>
                                <td class="pl-4">
                                    <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                </td>
                                <td>
                                    <div class="relative px-5 pt-2">
                                        <!-- Checkbox -->
                                        <div class="bg-indigo-500 rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center">
                                            <fa icon="check" class="text-white hover:text-indigo-500" />
                                        </div>
                                        <!--
                                        <button class="focus:ring-2 rounded-md focus:outline-none" onclick="dropdownFunction(this)" role="button" aria-label="option">
                                            <svg class="dropbtn" onclick="dropdownFunction(this)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <div class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                            <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Edit</p>
                                        </div>
                                        <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                    -->
                                    </div>
                                </td>
                            </tr>
                            <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                                <td class="">
                                    <div class="flex items-center pl-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                        </svg>
                                        <p class="text-base font-medium leading-none text-gray-700 mr-2 pl-2">Russo Giuseppe, trib Catania, 032825776, another number 0928556699</p>
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
                                        <p class="text-sm leading-none text-gray-600 ml-2">INC0225771</p>
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
                                        <p class="text-sm leading-none text-gray-600 ml-2">4848765</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Due today at 18:00</button>
                                </td>
                                <td class="pl-4">
                                    <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                </td>
                                <td>
                                    <div class="relative px-5 pt-2">
                                        <!-- Checkbox -->
                                        <div class="bg-indigo-500 rounded-full bg-white h-6 w-6 cursor-pointer flex items-center justify-center">
                                            <fa icon="check" class="text-white hover:text-indigo-500" />
                                        </div>
                                        <!--
                                        <button class="focus:ring-2 rounded-md focus:outline-none" onclick="dropdownFunction(this)" role="button" aria-label="option">
                                            <svg class="dropbtn" onclick="dropdownFunction(this)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <div class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                            <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Edit</p>
                                        </div>
                                        <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                    -->
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


