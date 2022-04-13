<template>
  <div class="text-center">
    <div>
      <img :src="'/' + item.image" alt="" class="border border-gray p-5" />
    </div>
    <h4 class="font-oswald uppercase text-2xl">{{ item.name }}</h4>
    <p class="font-light text-gray-500 my-2">
      {{ item.description }}
    </p>
    <p class="mt-5 mb-8">
      <span
        class="bg-amber-800 text-yellow-400 text-bold text-xl font-oswald font-bold rounded-lg px-5 py-2"
      >
        RM{{ item.price.toFixed(2) }}
      </span>
    </p>
    <button class="button font-oswald uppercase border py-2 px-3" @click="addItem">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    addItem() {
      this.$store.commit('addItem', this.item);
    },
  },
};
</script>
