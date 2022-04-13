<template>
  <div>
    <div class="bg-[url('/menu-page.jpg')]">
      <div id="menu" class="grid grid-cols-2 py-5">
        <div id="menu-left">
          <img src="logo.png" class="w-[150px]" alt="" />
        </div>

        <div id="menu-right">
          <ul class="grid grid-cols-4 text-2xl font-oswald text-white pt-5">
            <li>About Us</li>
            <li>Our Menu</li>
            <li>Locations</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <h1 class="text-white font-oswald uppercase text-6xl text-center pt-24 pb-28">
        Our Menu
      </h1>
    </div>
    <div id="items" class="grid grid-cols-3">
      <MenuItem v-for="b in items" :key="b.name" :item="b" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$axios.get('items.json').then((response) => {
      this.items = response.data.burgers;
    });
  },
};
</script>
