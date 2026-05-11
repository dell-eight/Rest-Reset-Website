"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type AnalyticsEventName, type AnalyticsEventParams } from "@/lib/analytics";

type TrackLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  eventName: AnalyticsEventName;
  eventParams?: AnalyticsEventParams;
};

export function TrackLink({
  href,
  children,
  className,
  eventName,
  eventParams
}: TrackLinkProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const handleClick = () => {
    trackEvent(eventName, eventParams);
  };

  if (isExternal) {
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
