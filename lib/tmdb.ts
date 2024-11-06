const apiKey = process.env.TMDB_ACCESS_TOKEN;
const baseUrl = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export const tmdbRequest = async (endpoint: string) => {
  
  const url = `${baseUrl}${endpoint}?language=en-US&page=1`;
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      
      const data = await response.json();
      return data.results;
    } else {
      return [];
    }
  } catch(error){
    console.error(error)
    return ;
  }
};
