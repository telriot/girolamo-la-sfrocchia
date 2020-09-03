export const GA_TRACKING_ID = "UA-177231126-1"; // This is your GA Tracking ID
declare global {
  interface Window {
    gtag: any;
  }
}
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  console.log(window);
  if (typeof window !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
