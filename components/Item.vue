<template>
  <div class="border rounded-md border-gray-500 text-center pb-5 mb-5">
    <img :src="image" class="md:container md:mx-auto object-fill h-96 w-96" alt="" />
    <h3 class="font-oswald font-medium text-2xl uppercase text-gray-500 mt-5 mb-2 ml-5">
      {{ title }}
    </h3>
    <p class="font-light text-gray-500 mb-5 ml-5">
      {{ description }}
    </p>
    <span
      class="bg-amber-800 text-yellow-400 text-bold text-xl font-oswald uppercase ml-5 rounded-lg px-5 py-2"
    >
      RM: {{ price }} monthly Per User
    </span>
  </div>
</template>
<script>
export default {
  props: ['image', 'title', 'description', 'price'],
};
</script>
