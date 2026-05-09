import { useEffect } from "react";

type MetaConfig = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

function upsertMeta(selector: string, attribute: string, key: string, content?: string) {
  if (!content) return;

  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export function usePageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}: MetaConfig) {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", ogTitle ?? title);
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      ogDescription ?? description,
    );
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", twitterTitle ?? ogTitle ?? title);
    upsertMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      twitterDescription ?? ogDescription ?? description,
    );
  }, [description, ogDescription, ogTitle, title, twitterDescription, twitterTitle]);
}
