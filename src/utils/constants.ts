export const apiBaseUrl = "https://jsonplaceholder.typicode.com/";
export const appUrl =
  process.env.NODE_ENV === `development`
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
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
export const images = [
  { id: "image409.png", url: "/assets/images/image409.png" },
  { id: "image410.png", url: "/assets/images/image410.png" },
  { id: "image411.png", url: "/assets/images/image411.png" },
  { id: "image412.png", url: "/assets/images/image412.png" },
  { id: "image413.png", url: "/assets/images/image413.png" },
];
export const tags = ["Jonathan Simkhai", "Blazers", "Viscose"];
export const sizes = [
  { id: "xs", value: "XS", available: true },
  { id: "s", value: "S", available: true },
  { id: "m", value: "M", available: false },
  { id: "l", value: "L", available: true },
  { id: "xxl", value: "XXL", available: true },
];
