import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // JSON-LD Schema
    if (schema) {
      const existingScript = document.querySelector('script[data-schema="page"]');
      if (existingScript) existingScript.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "page");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="page"]');
      if (schemaScript) schemaScript.remove();
    };
  }, [title, description, canonical, schema]);

  return null;
}
