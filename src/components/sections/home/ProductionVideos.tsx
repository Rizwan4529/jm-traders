import { useRef, type SyntheticEvent } from "react";
import { PRODUCTION_VIDEOS } from "../../../data/videos";
import { useContent } from "../../../i18n/useContent";
import InView from "../../motion/InView";
import Section from "../../ui/Section";
import SectionHeading from "../../ui/SectionHeading";

/** Production-line clips with native controls; only one plays at a time. */
const ProductionVideos = () => {
  const { t } = useContent();
  const copy = t.home.production;
  const listRef = useRef<HTMLUListElement>(null);

  const pauseOthers = (event: SyntheticEvent<HTMLVideoElement>) => {
    listRef.current?.querySelectorAll("video").forEach((video) => {
      if (video !== event.currentTarget) video.pause();
    });
  };

  return (
    <Section tone="surface">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-16">
        <SectionHeading title={copy.title} description={copy.text} />

        <ul ref={listRef} className="grid gap-6 sm:grid-cols-2">
          {PRODUCTION_VIDEOS.map((video, index) => {
            const { title, text } = copy.videos[video.id];
            return (
              <li key={video.id}>
                <InView delay={index * 0.1}>
                  <figure>
                    <video
                      src={video.src}
                      poster={video.poster}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={title}
                      onPlay={pauseOthers}
                      className="mx-auto aspect-9/16 w-full max-w-sm rounded-2xl border border-border bg-brand object-cover"
                    />
                    <figcaption className="mx-auto mt-4 max-w-sm">
                      <h3 className="text-lg font-semibold text-brand">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                        {text}
                      </p>
                    </figcaption>
                  </figure>
                </InView>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default ProductionVideos;
