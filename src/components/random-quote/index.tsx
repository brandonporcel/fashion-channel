import { getRandomQuote } from "@/services/quote.service";

async function RandomQuote() {
  const quote = await getRandomQuote();

  return (
    <div className="mt-8 px-4 text-right sm:text-center lg:text-right">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold italic text-gray-800 dark:text-white">
        “{quote.text}”
      </p>
      <p className="mt-2 text-md sm:text-lg text-gray-500 dark:text-gray-300">
        — {quote.author}
      </p>
    </div>
  );
}

export default RandomQuote;
