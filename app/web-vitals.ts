"use client";

import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";

export function reportWebVitals() {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    onCLS((metric) => {
      console.log("CLS:", metric.value);
      // Send to analytics
    });

    onINP((metric) => {
      console.log("INP:", metric.value);
      // Send to analytics
    });

    onFCP((metric) => {
      console.log("FCP:", metric.value);
      // Send to analytics
    });

    onLCP((metric) => {
      console.log("LCP:", metric.value);
      // Send to analytics
    });

    onTTFB((metric) => {
      console.log("TTFB:", metric.value);
      // Send to analytics
    });
  }
}
