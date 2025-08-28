const { fetchDonghuaData } = require("../utils/fetcher");

// Ambil list semua donghua
const getDonghuaList = async (req, res) => {
  try {
    const data = await fetchDonghuaData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal ambil data donghua" });
  }
};

// Ambil detail donghua by ID
const getDonghuaDetail = async (req, res) => {
  try {
    const data = await fetchDonghuaData();
    const donghua = data.find(d => d.id == req.params.id);
    if (!donghua) return res.status(404).json({ error: "Donghua tidak ditemukan" });
    res.json(donghua);
  } catch (err) {
    res.status(500).json({ error: "Gagal ambil detail donghua" });
  }
};

// Ambil episode link
const getDonghuaEpisode = async (req, res) => {
  try {
    const data = await fetchDonghuaData();
    const donghua = data.find(d => d.id == req.params.id);
    if (!donghua) return res.status(404).json({ error: "Donghua tidak ditemukan" });

    const episode = donghua.episodes.find(e => e.ep == req.params.ep);
    if (!episode) return res.status(404).json({ error: "Episode tidak ditemukan" });

    res.json(episode);
  } catch (err) {
    res.status(500).json({ error: "Gagal ambil data episode" });
  }
};

module.exports = { getDonghuaList, getDonghuaDetail, getDonghuaEpisode };
