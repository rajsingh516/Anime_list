import axios from 'axios';

const ANIME_API = 'https://api.jikan.moe/v4/anime';

export const animeService = {
  // Search anime by query
  searchAnime: async (query, page = 1) => {
    try {
      const response = await axios.get(ANIME_API, {
        params: {
          query,
          page,
          limit: 12,
        },
      });
      return response.data.data || [];
    } catch (error) {
      console.error('Error searching anime:', error);
      return [];
    }
  },

  // Get top anime
  getTopAnime: async (filter = 'airing', page = 1) => {
    try {
      const response = await axios.get(`${ANIME_API}/top`, {
        params: {
          filter,
          page,
          limit: 12,
        },
      });
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching top anime:', error);
      return [];
    }
  },

  // Get seasonal anime
  getSeasonalAnime: async (page = 1) => {
    try {
      const response = await axios.get(`${ANIME_API}/search`, {
        params: {
          status: 'airing',
          page,
          limit: 12,
        },
      });
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching seasonal anime:', error);
      return [];
    }
  },

  // Get anime details
  getAnimeDetails: async (id) => {
    try {
      const response = await axios.get(`${ANIME_API}/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching anime details:', error);
      return null;
    }
  },

  // Get recommendations
  getRecommendations: async () => {
    try {
      const response = await axios.get(`${ANIME_API}/top`, {
        params: {
          filter: 'by_score',
          limit: 8,
        },
      });
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      return [];
    }
  },
};
