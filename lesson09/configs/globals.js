require("dotenv").config();
// Global configurations object contains Application Level variables such as:
// client secrets, passwords, connection strings, and misc flags
const configurations = {
  ConnectionStrings: {
    // MongoDB: process.env.CONNECTION_STRING_MONGODB,
      MongoDB: "mongodb+srv://alinerabago:Password01@cluster0.vpjnh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      // MongoDB: "mongodb+srv://alinerabago:Password01@cluster0.vpjnh.mongodb.net/"
  },
  Authentication: {
    GitHub: {
      // ClientId: process.env.GITHUB_CLIENT_ID,
      ClientId: "Iv23lieRzYhTKPmhKH1V",
      // ClientSecret: process.env.GITHUB_CLIENT_SECRET,
      ClientSecret: "b7f165a4e235bc468892ed994018891c1b065857",
      // CallbackUrl: process.env.GITHUB_CALLBACK_URL
      CallbackUrl: "http://localhost:3000/github/callback"
    },
  },
};
module.exports = configurations;
