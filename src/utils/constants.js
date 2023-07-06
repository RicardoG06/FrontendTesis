export const ENV = {
  SERVER_HOST: "http://localhost:1337/", //"https://ecommerce-strapi.up.railway.app",
  API_URL:  "http://localhost:1337/api",  //"https://ecommerce-strapi.up.railway.app/api",
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/local/register",
      LOGIN: "auth/local",
    },
    USERS_ME: "users/me",
    USERS: "users",
    PLATFORM: "platforms",
    ADDRESS: "addresses",
    GAME: "games",
    WISHLIST: "wishlists",
    PAYMENT_ORDER: "payment-order",
    ORDER: "orders",
    APPOINTMENT: "appoinments"
  },
  TOKEN: "token",
  CART: "cart",
  STRIPE_TOKEN:
    "pk_test_51N60nfBto3cA7tFNOEnAI8MNEm5FuYqLU0toQKMfSeeZRpmbnLXWiJ1HtmO7QatGr8Fud6KDd0AaNkrt1b8fAE5n00UxqXuVHT",
};
