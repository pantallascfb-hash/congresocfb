const GA4_ID = 'G-LL4EN8TJPX';

export function gtmPush(event, data = {}) {
  if (typeof window === 'undefined') return;

  if (window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }

  if (typeof window.gtag === 'function') {
    const { label, page_name, country, ...rest } = data;
    window.gtag('event', event, { ...rest, page_title: label || page_name });
  }
}

let geoCache = null;

function getBrowserInfo() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return {
    page_url: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || '',
    browser_language: navigator.language,
    timezone: tz,
    screen: `${window.screen.width}x${window.screen.height}`,
    user_agent: navigator.userAgent,
  };
}

export async function trackPageView(pageName = '') {
  const info = getBrowserInfo();

  if (typeof window.gtag === 'function') {
    window.gtag('config', GA4_ID, {
      page_title: pageName || info.page_path,
      ...info,
    });
  }

  gtmPush('page_view', { page_name: pageName || info.page_path, ...info });

  if (!geoCache) {
    try {
      const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) });
      if (res.ok) {
        geoCache = await res.json();
        gtmPush('geo_ready', {
          country: geoCache.country_name,
          country_code: geoCache.country_code,
          region: geoCache.region,
          city: geoCache.city,
          isp: geoCache.org,
        });
      }
    } catch {
      try {
        const res2 = await fetch('http://ip-api.com/json/', { signal: AbortSignal.timeout(3000) });
        if (res2.ok) {
          const d = await res2.json();
          if (d.status === 'success') {
            geoCache = d;
            gtmPush('geo_ready', {
              country: d.country,
              country_code: d.countryCode,
              region: d.regionName,
              city: d.city,
              isp: d.isp,
            });
          }
        }
      } catch {}
    }
  }
}
