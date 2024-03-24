<template>
  <div class="flex">
    <div>
      <SliderBar />
    </div>
    <div class="flex flex-col w-full h-screen bg-gray-100 text-gray-800">
      <div class="flex w-full h-20 bg-gray-300 text-gray-800"></div>
      <TravelCalculator />
    </div>
  </div>
</template>

<script>
import SliderBar from "../components/SliderBar.vue";
import TravelCalculator from "../components/TravelCalculator.vue";

export default {
  components: {
    SliderBar,
    TravelCalculator,
  },
};
</script>
