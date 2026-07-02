declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SCRIPT_ID = "google-recaptcha-v3";

function getSiteKey() {
  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
}

function waitForRecaptchaReady() {
  return new Promise<void>((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error("recaptcha_unavailable"));
      return;
    }

    window.grecaptcha.ready(() => resolve());
  });
}

export function loadRecaptchaScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  const siteKey = getSiteKey();
  if (!siteKey) {
    return Promise.reject(new Error("recaptcha_site_key_missing"));
  }

  if (window.grecaptcha) {
    return waitForRecaptchaReady();
  }

  const existingScript = document.getElementById(RECAPTCHA_SCRIPT_ID);
  if (existingScript) {
    return waitForRecaptchaReady();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      waitForRecaptchaReady().then(resolve).catch(reject);
    };
    script.onerror = () => reject(new Error("recaptcha_script_failed"));
    document.head.appendChild(script);
  });
}

export async function executeRecaptcha(action: string): Promise<string> {
  const siteKey = getSiteKey();
  if (!siteKey) {
    throw new Error("recaptcha_site_key_missing");
  }

  await loadRecaptchaScript();

  if (!window.grecaptcha) {
    throw new Error("recaptcha_unavailable");
  }

  return window.grecaptcha.execute(siteKey, { action });
}
