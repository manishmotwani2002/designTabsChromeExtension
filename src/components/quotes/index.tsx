import React from "react";
import { getQuotes } from "../../utils/quotes/apicall";

function Quote() {
  const defaultQuote =
    "To study the abnormal is the best way of understanding the normal";
  const defaultAuthor = "William James";

  const [randomQuote, setRandomQuote] = React.useState({
    quote: defaultQuote,
    author: defaultAuthor,
  });

  React.useEffect(async () => {
    const response = await getQuotes();
    setRandomQuote({
      ...randomQuote,
      quote: response.quotes[0].text,
      author: response.quotes[0].author,
    });
  }, []);

  return (
    <div>
      <div>{randomQuote.quote}</div>
      <p>{randomQuote.author}</p>
    </div>
  );
}

export default Quote;
