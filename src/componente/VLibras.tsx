"use client";

import { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rootId = "vlibras-root";
    const styleId = "vlibras-mobile-style";
    const scriptSrc = "https://vlibras.gov.br/app/vlibras-plugin.js";

    const ensureRoot = () => {
      let root = document.getElementById(rootId) as HTMLDivElement | null;
      if (!root) {
        root = document.createElement("div");
        root.id = rootId;
        root.setAttribute("vw", "true");
        root.className = "enabled";

        const accessButton = document.createElement("div");
        accessButton.setAttribute("vw-access-button", "true");
        accessButton.className = "active";

        const pluginWrapper = document.createElement("div");
        pluginWrapper.setAttribute("vw-plugin-wrapper", "true");

        const pluginTopWrapper = document.createElement("div");
        pluginTopWrapper.className = "vw-plugin-top-wrapper";
        pluginWrapper.appendChild(pluginTopWrapper);

        root.appendChild(accessButton);
        root.appendChild(pluginWrapper);
        document.body.appendChild(root);
      }

      if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
          @media (max-width: 768px) {
            [vw-access-button] {
              width: 60px !important;
              height: 60px !important;
              right: 20px !important;
              bottom: 20px !important;
              left: auto !important;
            }
            [vw-plugin-wrapper] {
              bottom: 90px !important;
            }
          }
        `;
        document.head.appendChild(style);
      }

      return root;
    };

    const root = ensureRoot();

    const tryInitVLibras = () => {
      if (window.VLibras && window.VLibras.Widget) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
        return true;
      }
      return false;
    };

    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    let script: HTMLScriptElement | null = null;

    const onScriptLoad = () => {
      tryInitVLibras();
    };

    const intervalId = window.setInterval(() => {
      if (tryInitVLibras()) {
        window.clearInterval(intervalId);
      }
    }, 500);

    if (existingScript) {
      if (window.VLibras) {
        tryInitVLibras();
      } else {
        existingScript.addEventListener("load", onScriptLoad);
      }
    } else {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = onScriptLoad;
      document.body.appendChild(script);
    }

    return () => {
      window.clearInterval(intervalId);
      if (script) {
        script.onload = null;
      }
      if (existingScript && !window.VLibras) {
        existingScript.removeEventListener("load", onScriptLoad);
      }
      const style = document.getElementById(styleId);
      if (style?.parentElement) {
        style.parentElement.removeChild(style);
      }
      if (root?.parentElement) {
        root.parentElement.removeChild(root);
      }
    };
  }, []);

  return null;
}