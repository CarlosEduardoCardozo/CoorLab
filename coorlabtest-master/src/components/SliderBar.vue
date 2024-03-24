<template>
  <!-- component -->
  <div class="flex min-h-screen flex-row bg-gray-100 text-gray-800">
    <aside
      class="sidebar w-60 -translate-x-full transform bg-slate-800 p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md"
    >
      <div class="my-4 w-full border-b-4 border-indigo-100 text-center">
        <div class="py-4 px-6 flex items-center">
          <img
            src="https://cdn.discordapp.com/attachments/1220038508090101760/1220148623782711488/logo.png?ex=660de2f5&is=65fb6df5&hm=de99de56c5e4838734afc6d9b6ac827f62e885a0ea8b2f08c6be71be84d693ee&"
            class="h-4 w-auto"
          />
        </div>
      </div>
      <div class="my-8">
        <router-link to="/tickets" class="text-white flex items-center">
          Calculadora de Viagem
        </router-link>
      </div>
      <router-link to="/wishlist" class="text-white flex items-center">
        Lista de Desejos
        <span
          class="ml-auto bg-blue-500 text-white font-bold rounded-full px-2"
          >{{ wishlistItemCount }}</span
        >
      </router-link>
    </aside>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useWishlistStore } from "../stores/wishlist.js";

export default defineComponent({
  setup() {
    const wishlistStore = useWishlistStore();
    const wishlistItemCount = ref(wishlistStore.wishlist.length);

    // Watcher para observar a lista de desejos
    watch(
      () => wishlistStore.wishlist,
      (newWishlist) => {
        wishlistItemCount.value = newWishlist.length;
      }
    );

    return { wishlistItemCount };
  },
});
</script>
