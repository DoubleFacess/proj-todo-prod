<template>
  <nav class="bg-indigo-500">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between">
        <div>
          <nuxt-link class="text-white no-underline font-bold text-3xl hover:underline" to="/" exact>
            Todolist
          </nuxt-link>
        </div>

        <div>
          <nuxt-link class="text-white no-underline hover:underline ml-4" :to="{ name: 'settings-profile' }" exact>
            <fa icon="user" class="mr" />
            Profile
          </nuxt-link>

          <button class="text-gray-400 ml-4 border border-white py-2 px-4 rounded hover:bg-white hover:text-indigo-500">
          <!--<button class="text-gray-400 ml-4 border border-white py-2 px-4 rounded hover:bg-white hover:text-indigo-500" @click="logout">-->
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
/*import Task from '@/models/Task'*/

export default {
  methods: {
    /*
    logout () {
      this.$auth.logout()
        .then(() => Task.deleteAll())
    }*/
  }
}
</script>
