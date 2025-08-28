const axios = require("axios");

const API_URL = "https://www.sankavollerei.com/anime/";

// Simulasi fetch khusus donghua
async function fetchDonghuaData() {
  try {
    const res = await axios.get(API_URL);
    const allAnime = res.data;

    // Filter hanya yang genre/type mengandung "donghua"
    const donghuaOnly = allAnime.filter(a =>
      (a.genre && a.genre.toLowerCase().includes("donghua")) ||
      (a.type && a.type.toLowerCase().includes("donghua"))
    );

    return donghuaOnly.map((d, i) => ({
      id: i + 1,
      title: d.title || "Unknown",
      type: d.type || "Unknown",
      genre: d.genre || "Unknown",
      episodes: d.episodes || []
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

module.exports = { fetchDonghuaData };
