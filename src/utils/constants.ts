export const apiBaseUrl = "https://jsonplaceholder.typicode.com/";
export const appUrl =
  process.env.NODE_ENV === `development`
    ? "http://localhost:3000"
    : process.env.APP_URL;
export const navItems = [
  "The Edit",
  "New Arrivals",
  "Designers",
  "Clothing",
  "Shoes",
  "Bags",
  "Accessories",
  "Jewelry",
  "Beauty",
  "Home",
];
