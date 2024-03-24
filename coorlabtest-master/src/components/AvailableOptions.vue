User
<template>
  <div>
    <div
      class="ticket bg-gray-100 border border-gray-300 rounded-lg p-6 mt-4 ml-6"
    >
      <h2 class="text-xl font-bold mb-4">Opções Disponíveis:</h2>
      <ul>
        <li
          v-for="option in options"
          :key="option.id"
          class="mb-4 border-b pb-4"
        >
          <div class="flex justify-between">
            <div>
              <p class="font-semibold text-gray-800">{{ option.name }}</p>
              <p class="text-gray-600">Duração: {{ option.duration }}</p>
            </div>
            <div class="text-right">
              <p class="font-semibold text-gray-800">
                Assento: {{ option.seat }}
              </p>
              <p class="text-gray-600">Leito: {{ option.bed }}</p>
            </div>
          </div>
          <div class="flex justify-between mt-2">
            <div>
              <p class="font-semibold text-blue-600">
                Preço Conforto: {{ option.price_confort }}
              </p>
            </div>
            <div>
              <p class="font-semibold text-blue-600">
                Preço Econômico: {{ option.price_econ }}
              </p>
            </div>
          </div>
          <div class="mt-4 flex justify-end">
            <button
              @click="openModal(option)"
              class="flex items-center text-sm font-semibold text-blue-600 focus:outline-none"
            >
              Selecionar Empresa
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                ></path>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        class="absolute inset-0 bg-gray-900 opacity-75 cursor-pointer"
        @click="closeModal"
      ></div>

      <div class="bg-white rounded-lg z-50 max-w-md w-full mx-4 p-6">
        <div
          class="bg-blue-800 text-white rounded-lg p-2 mb-4 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            ></path>
          </svg>
          <h2 class="text-2xl font-semibold">Detalhes da Passagem</h2>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-lg text-gray-700 mb-4">
            Nome da Empresa: {{ selectedOption.name }}
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Duração: {{ selectedOption.duration }}
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Assento: {{ selectedOption.seat }}
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Leito: {{ selectedOption.bed }}
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Preço Conforto: {{ selectedOption.price_confort }}
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Preço Econômico: {{ selectedOption.price_econ }}
          </p>
          <img
            src="http://blog.pat.educacao.ba.gov.br/wp-content/uploads/2013/07/cc3b3digo-inicial.png"
            alt="Fake Barcode"
            class="h-12"
          />
          <button
            @click="addToWishlistAndCloseModal(selectedOption)"
            class="px-4 py-2 mt-4 bg-blue-600 text-white font-semibold rounded hover:bg-sky-950 focus:outline-none focus:bg-blue-700"
          >
            Adicionar à Lista de Desejos
          </button>
          {{ wishlist }}
        </div>

        <div class="mt-6 text-center">
          <button
            @click="closeModal"
            class="px-4 py-2 bg-red-700 text-white font-semibold rounded hover:bg-red-900 focus:outline-none focus:bg-blue-700"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useWishlistStore } from "../stores/wishlist";

export default defineComponent({
  props: ["options"],
  setup() {
    const showModal = ref(false);
    const selectedOption = ref(null);
    const wishlistStore = useWishlistStore();

    const openModal = (option) => {
      selectedOption.value = option;
      showModal.value = true;
    };

    const closeModal = () => {
      selectedOption.value = null;
      showModal.value = false;
    };

    const addToWishlistAndCloseModal = (option) => {
      wishlistStore.addToWishlist(option);
      closeModal();
    };

    // const addToWishlist = (option) => {
    //   wishlistStore.addToWishlist(option);
    // };

    return {
      showModal,
      selectedOption,
      openModal,
      closeModal,
      // addToWishlist,
      addToWishlistAndCloseModal,
    };
  },
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
