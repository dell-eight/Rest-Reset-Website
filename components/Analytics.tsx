"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { analyticsConfig, trackEvent } from "@/lib/analytics";

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent("page_view", {
      page_path: pathname
    });
  }, [pathname]);

  return (
    <>
      {analyticsConfig.gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${analyticsConfig.gaId}', { send_page_view: false });
            `}
          </Script>
        </>
      ) : null}

      {analyticsConfig.metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${analyticsConfig.metaPixelId}');
          `}
        </Script>
      ) : null}
    </>
  );
}
