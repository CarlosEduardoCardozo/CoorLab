<template>
  <div class="flex">
    <div>
      <SliderBar />
    </div>
    <div
      class="flex flex-col w-full h-screen bg-gray-100 text-gray-800 overflow-y-auto"
    >
      <div
        class="flex w-full h-16 bg-gray-300 text-gray-800 justify-center items-center"
      >
        <h2 class="text-lg font-semibold">Lista de Desejos</h2>
      </div>
      <div>
        <ul class="grid gap-2">
          <li
            v-for="item in wishlist"
            :key="item.id"
            class="wishlist-item bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div class="p-2">
              <h3 class="text-base font-semibold text-gray-800">
                {{ item.name }}
              </h3>
              {{ item.city }}
              <p class="text-xs text-gray-600 mb-1">{{ item.duration }}</p>
              <div class="flex justify-between items-center mb-1">
                <p class="text-xs text-gray-600">Assento: {{ item.seat }}</p>
                <p class="text-xs text-gray-600">Leito: {{ item.bed }}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-xs font-semibold text-blue-600">
                  Conforto: {{ item.price_confort }}
                </p>
                <p class="text-xs font-semibold text-blue-600">
                  Econômico: {{ item.price_econ }}
                </p>
              </div>
            </div>
          
          </li>
        </ul>
      </div>

      
      <router-link
        to="/tickets"
        class="mt-2 px-2 py-1 h-10 w-52 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 text-xs flex justify-center items-center mx-auto"
      >
        Voltar para Tickets
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useWishlistStore } from "../stores/wishlist.js";
import SliderBar from "../components/SliderBar.vue";

export default defineComponent({
  components: {
    SliderBar,
  },

  setup() {
    const wishlistStore = useWishlistStore();

    return {
      wishlist: wishlistStore.wishlist,
    };
  },
});
</script>

<style scoped>
.wishlist-item {
  display: grid;
  grid-template-columns: 1fr auto;
}

.wishlist-item-remove {
  transition: background-color 0.3s;
}

.wishlist-item-remove:hover {
  background-color: #c53030;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
