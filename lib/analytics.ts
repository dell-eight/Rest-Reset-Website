"use client";

export type AnalyticsEventName =
  | "page_view"
  | "product_view"
  | "checkout_cta_click"
  | "email_signup_submit"
  | "contact_form_submit";

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    fbq?: (
      command: "init" | "track" | "trackCustom",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const analyticsConfig = {
  gaId,
  metaPixelId,
  isEnabled: Boolean(gaId || metaPixelId)
} as const;

const metaEventMap: Record<AnalyticsEventName, string> = {
  page_view: "PageView",
  product_view: "ViewContent",
  checkout_cta_click: "InitiateCheckout",
  email_signup_submit: "Lead",
  contact_form_submit: "Contact"
};

export function trackEvent(name: AnalyticsEventName, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (gaId && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  if (metaPixelId && typeof window.fbq === "function") {
    const metaEventName = metaEventMap[name];
    const metaCommand = metaEventName === "PageView" ? "track" : "trackCustom";
    window.fbq(metaCommand, metaEventName, params);
  }

  if (!gaId && !metaPixelId && process.env.NODE_ENV === "development") {
    console.info("Analytics event prepared; no public analytics IDs configured.", {
      name,
      params
    });
  }
}
