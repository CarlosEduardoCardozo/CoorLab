<template>
  <div class="bg-slate-200 w-11/12 ml-12 mt-10">
    <div class="bg-slate-800 w-full h-10">
      <h2 class="text-white font-semibold p-2 ml-4">Calculadora de Viagem</h2>
    </div>
    <div class="flex p-6" style="height: auto">
      <div class="bg-slate-300 text-gray-800 rounded-md w-64 h-80">
        <div class="p-6">
          <h1 class="text-base font-semibold text-center mt-4">
            Calcule o Valor da Viagem
          </h1>
          <div class="flex flex-col mt-6">
            <label for="destino" class="mb-2 text-gray-700 text-xs font-medium">
              Destino:
            </label>
            <select
              id="destino"
              class="border border-gray-400 p-2 rounded-md"
              v-model="selectedCity"
            >
              <option v-for="city in uniqueCities" :key="city" :value="city">
                {{ city }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mt-4">
            <label for="data" class="mb-2 text-gray-700 text-xs font-medium">
              Data:
            </label>
            <input
              type="date"
              id="data"
              class="border border-gray-400 p-2 rounded-md"
              v-model="selectedDate"
            />
          </div>
          <div class="flex justify-center mt-4">
            <button
              class="bg-cyan-500 p-1 px-6 rounded-md text-white"
              @click="buscarOpcoes"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <AvailableOptions :options="options" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VsToast from "@vuesimple/vs-toast";
import SliderBar from "../components/SliderBar.vue";
import AvailableOptions from "../components/AvailableOptions.vue";

export default {
  components: {
    SliderBar,
    AvailableOptions,
  },
  data() {
    return {
      tickets: [],
      transports: [],
      selectedCity: "",
      selectedDate: "",
      options: [],
    };
  },
  methods: {
    async getTickets() {
      try {
        const response = await axios.get("http://127.0.0.1:3000/tickets/");
        this.tickets = response.data;
        this.transports = response.data;
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    },

    async filterByCity() {
      this.options = this.transports.filter(
        (transport) => transport.city === this.selectedCity
      );
    },

    async buscarOpcoes() {
      if (!this.selectedCity) {
        VsToast.show({
          title: "Campos Inválidos!",
          message: "Preencha o campo de destino!",
          variant: "error",
        });
        return;
      }

      if (!this.selectedDate) {
        VsToast.show({
          title: "Campos Inválidos!",
          message: "Selecione uma data!",
          variant: "error",
        });
        return;
      }

      const currentDate = new Date();
      const selectedDate = new Date(this.selectedDate);
      if (selectedDate < currentDate) {
        VsToast.show({
          title: "Campos Inválidos!",
          message: "Selecione uma data no futuro!",
          variant: "error",
        });
        return;
      }

      await this.filterByCity();
    },
  },
  computed: {
    uniqueCities() {
      return [...new Set(this.transports.map((transport) => transport.city))];
    },
  },
  mounted() {
    this.getTickets();
  },
};
</script>
