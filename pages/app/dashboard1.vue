<template>
    <div class="flex flex-wrap -m-4">
      <div v-for="(item, index) in items" :key="index" class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg
              v-if="index === 0"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <svg
              v-if="index === 1"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
            <!-- Add more SVGs as needed for each item -->
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{{ item.title }}</h2>
          <p class="leading-relaxed text-base">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            title: "Shooting Stars",
            description:
              "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
          },
          {
            title: "The Catalyzer",
            description:
              "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
          },
          {
            title: "The Catalyzer",
            description:
              "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
          },{
            title: "The Catalyzer",
            description:
              "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
          },{
            title: "The Catalyzer",
            description:
              "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
          },{
            title: "The Catalyzer",
            description:
              "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
          }
          // Add more items as needed
        ],
      };
    },
  };
  </script>
  