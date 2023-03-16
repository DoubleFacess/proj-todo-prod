<template>
<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <!-- component -->
        <div class="sm:px-6 w-full">
            <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
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
    
</template>


<script>

export default {
    mounted: function() {}
}


</script>

<style>
.checkbox:checked + .check-icon {
    display: flex;
  }
</style>
