const state = () => ({
  orders: [],
});

const mutations = {
  addItem(state, selectedItem) {
    const index = state.orders.findIndex(
      (item) => {
        return item.name === selectedItem.name;
      }
    );
    if (index === -1) {
      state.orders.push({
        name: selectedItem.name,
        price: selectedItem.price,
        quantity: 1,
      });
    } else {
      state.orders[index].quantity++;
    }
  },

  removeItem(state, selectedItem) {
    const index = state.orders.findIndex(
      (item) => {
        return item.name === selectedItem;
      });
    state.orders.splice(index, 1);
  },
};

const getters = {
  totalItems(state) {
    return state.orders.length;
  }
}

export default {
  state,
  mutations,
  getters,
};
