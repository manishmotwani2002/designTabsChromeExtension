export const getBackground = async () => {
  return await fetch(
    `https://api.unsplash.com/photos/random?client_id=-20OIQJJBPewCTDrOV8z8TZ5n2INrDLQHxQXh67Bc1Q&orientation=landscape`
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
