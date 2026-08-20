function findApplicationBase() {
  const entryScript = Array.from(
    document.querySelectorAll<HTMLScriptElement>('script[type="module"][src]')
  ).find((script) => {
    const pathname = new URL(script.src).pathname;
    return pathname.includes('/assets/') || pathname.endsWith('/src/main.tsx');
  });

  if (!entryScript) {
    return new URL('./', window.location.href);
  }

  const entryUrl = new URL(entryScript.src);
  const marker = entryUrl.pathname.includes('/assets/') ? '/assets/' : '/src/';
  const markerIndex = entryUrl.pathname.lastIndexOf(marker);

  return new URL(entryUrl.pathname.slice(0, markerIndex + 1), entryUrl.origin);
}

export const applicationBaseUrl = findApplicationBase();

export function applicationUrl(path: string) {
  return new URL(path.replace(/^\/+/, ''), applicationBaseUrl);
}
