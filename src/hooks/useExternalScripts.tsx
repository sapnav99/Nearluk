import { useEffect } from "react";

export default function useExternalScripts({ urls }: { urls: string[] }) {
  useEffect(() => {
    const head: any = document.querySelector("head");

    // Load scripts sequentially
    const loadScript = (index: number) => {
      if (index >= urls.length) {
        return;
      }

      const script: any = document.createElement("script");
      script.setAttribute("src", urls[index]);

      script.onload = () => {
        loadScript(index + 1);
      };

      head.appendChild(script);
    };

    loadScript(0);

    return () => {
      for (const url of urls) {
        const scripts = document.querySelectorAll(`script[src="${url}"]`);
        scripts.forEach((script) => {
          head.removeChild(script);
        });
      }
    };
  }, [urls]);
}
