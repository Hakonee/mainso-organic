"use client";

import { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rootId = "vlibras-root";
    let vlibrasRoot = document.getElementById(rootId);

    if (!vlibrasRoot) {
      vlibrasRoot = document.createElement("div");
      vlibrasRoot.id = rootId;
      vlibrasRoot.setAttribute("vw", "true");
      vlibrasRoot.className = "enabled";

      const accessButton = document.createElement("div");
      accessButton.setAttribute("vw-access-button", "true");
      accessButton.className = "active";

      const pluginWrapper = document.createElement("div");
      pluginWrapper.setAttribute("vw-plugin-wrapper", "true");

      const pluginTopWrapper = document.createElement("div");
      pluginTopWrapper.className = "vw-plugin-top-wrapper";
      pluginWrapper.appendChild(pluginTopWrapper);

      vlibrasRoot.appendChild(accessButton);
      vlibrasRoot.appendChild(pluginWrapper);
      document.body.appendChild(vlibrasRoot);
    }

    const tryInitVLibras = () => {
      if (window.VLibras && window.VLibras.Widget) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
        return true;
      }
      return false;
    };

    const scriptSrc = "https://vlibras.gov.br/app/vlibras-plugin.js";
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    let script: HTMLScriptElement | null = null;
    let addedLoadListener = false;

    const onScriptLoad = () => {
      if (!tryInitVLibras()) {
        window.setTimeout(tryInitVLibras, 250);
      }
    };

    const onVLibrasReady = () => {
      tryInitVLibras();
    };

    if (existingScript) {
      if (window.VLibras) {
        tryInitVLibras();
      } else {
        existingScript.addEventListener("load", onScriptLoad);
        addedLoadListener = true;
      }
    } else {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = onScriptLoad;
      document.body.appendChild(script);
      addedLoadListener = true;
    }

    window.addEventListener("VLibrasReady", onVLibrasReady);

    return () => {
      if (script) {
        script.onload = null;
      }
      if (existingScript && addedLoadListener && !window.VLibras) {
        existingScript.removeEventListener("load", onScriptLoad);
      }
      window.removeEventListener("VLibrasReady", onVLibrasReady);
      if (vlibrasRoot && vlibrasRoot.parentElement) {
        vlibrasRoot.parentElement.removeChild(vlibrasRoot);
      }
    };
  }, []);

  return null;
}