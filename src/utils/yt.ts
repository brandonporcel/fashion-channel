const getYouTubeVideoId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (hostname.includes("youtube.com"))
      return parsedUrl.searchParams.get("v");
    if (hostname === "youtu.be") return parsedUrl.pathname.slice(1);

    return null;
  } catch (error) {
    return null;
  }
};

export default getYouTubeVideoId;
