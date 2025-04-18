const quotes = [
  {
    text: "Fashion is the armor to survive the reality of everyday life.",
    author: "Bill Cunningham",
  },
  {
    text: "Style is a way to say who you are without having to speak.",
    author: "Rachel Zoe",
  },
  {
    text: "I don't design clothes. I design dreams.",
    author: "Ralph Lauren",
  },
];

function RandomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="mt-8 px-4 text-right sm:text-center lg:text-right">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold italic text-gray-800 dark:text-white">
        “{random.text}”
      </p>
      <p className="mt-2 text-md sm:text-lg text-gray-500 dark:text-gray-300">
        — {random.author}
      </p>
    </div>
  );
}

export default RandomQuote;
