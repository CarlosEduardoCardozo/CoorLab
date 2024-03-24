import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    wishlist: [],
  }),
  persist: true,
  actions: {
    addToWishlist(item) {
      this.wishlist.push(item);
    },
    removeWishlistItem(itemId) {
      this.wishlist = this.wishlist.filter((item) => item.id !== itemId);
    },
  },
});
