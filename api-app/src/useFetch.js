import axios from "axios";

async function UseFetch(word) {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID XLLNlPGGgmdwj5c2ay-oWVJfoEDjxzc5yc3S-g14sbI",
    },
    params: {
      query: word,
    },
  });

  return response;
}

// XLLNlPGGgmdwj5c2ay-oWVJfoEDjxzc5yc3S-g14sbI
//header : Authorization: Client-ID YOUR_ACCESS_KEY
//params query=office
export default UseFetch;
