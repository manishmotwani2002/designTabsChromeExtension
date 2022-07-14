export const getQuotes = async () => {
  return await fetch(
    `https://goquotes-api.herokuapp.com/api/v1/random?count=1`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
