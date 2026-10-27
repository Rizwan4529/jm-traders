import coolingPoster from "../assets/jelly-1-poster.webp";
import coolingVideo from "../assets/jelly-1.mp4";
import sealingPoster from "../assets/jelly-2-poster.webp";
import sealingVideo from "../assets/jelly-2.mp4";

/** Portrait (9:16) clips from the Jelly Jungle production line, in process order. */
export const PRODUCTION_VIDEOS = [
  { id: "sealing", src: sealingVideo, poster: sealingPoster },
  { id: "cooling", src: coolingVideo, poster: coolingPoster },
] as const;

export type ProductionVideoId = (typeof PRODUCTION_VIDEOS)[number]["id"];
