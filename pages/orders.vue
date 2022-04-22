<template>
  <div>
    <div class="bg-[url('/menu-page.jpg')]">
      <div id="menu" class="grid grid-cols-2 py-5">
        <div id="menu-left">
          <img src="logo.png" class="w-[150px]" alt="" />
        </div>

        <div id="menu-right">
          <ul class="grid grid-cols-5 text-2xl font-oswald text-white pt-5">
            <li>About Us</li>
            <NuxtLink to="/menu">Our Menu</NuxtLink>
            <li>Locations</li>
            <li>Contacts</li>
            <NuxtLink to="/cart">Cart</NuxtLink>
          </ul>
        </div>
      </div>
      <h1 class="text-white font-oswald uppercase text-6xl text-center pt-24 pb-28">
        Orders
      </h1>
      <table
        v-for="order in orders"
        :key="order.id"
        class="table-auto w-2/3 mt-20 mx-auto"
      >
        <thead>
          <tr>
            <td colspan="4">
              <h1 class="font-oswald uppercase text-2xl pb-10">
                Order ID - {{ order.id }}
              </h1>
            </td>
          </tr>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-center">Price</th>
            <th class="text-right">Quantity</th>
            <th class="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in order.data.orders"
            :key="item.name"
            class="font oswald uppercase text-2xl border-b"
          >
            <td class="py-10">{{ item.name }}</td>
            <td class="text-right">RM {{ item.price.toFixed(2) }}</td>
            <td class="text-center">{{ item.quantity }}</td>
            <td class="text-right">RM {{ (item.price * item.quantity).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },

  mounted() {
    this.$axios.get('/.netlify/functions/readorders').then((response) => {
      this.orders = response.data;
    });
  },
};
</script>
