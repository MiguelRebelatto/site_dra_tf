import { useEffect } from "react";
import { SITE } from "@/lib/site";
import { withBasePath } from "@/lib/utils";
import cycle from "@/assets/cada-ciclo.webp.asset.json";
import hormones from "@/assets/saude-hormonal.webp.asset.json";
import menstrual from "@/assets/saude-menstrual.webp.asset.json";

export function InstagramFeed() {
  useEffect(() => {
    if (!SITE.beholdFeedId || document.getElementById("behold-js")) return;
    const s = document.createElement("script");
    s.id = "behold-js"; s.type = "module"; s.src = "https://w.behold.so/widget.js";
    document.head.appendChild(s);
  }, []);

  if (!SITE.beholdFeedId) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">{[{image: cycle, alt: "Cada ciclo conta uma história"}, {image: hormones, alt: "Saúde hormonal e bem-estar ao longo do ciclo"}, {image: menstrual, alt: "Saúde menstrual com a Dra. Tatiana Santiago"}].map(item => <img key={item.alt} src={withBasePath(item.image.url)} alt={item.alt} width={768} height={768} loading="lazy" className="gallery-photo" />)}</div>
    );
  }
  // @ts-expect-error custom element
  return <behold-widget feed-id={SITE.beholdFeedId} />;
}
