"use client";

import { useEffect } from "react";
import { getGclidFromUrl, getStoredGclid, storeGclid } from "@/lib/cookies";

export default function GclidHandler() {
  useEffect(() => {
    // Get gclid from URL
    const gclid = getGclidFromUrl();
    
    if (gclid) {
      // Store in cookie
      storeGclid(gclid);
      
      // Update body data attribute
      if (typeof document !== "undefined") {
        document.body.setAttribute("data-click-id", gclid);
      }
    } else {
      // Check for stored gclid
      const storedGclid = getStoredGclid();
      if (storedGclid && typeof document !== "undefined") {
        document.body.setAttribute("data-click-id", storedGclid);
      }
    }
  }, []);

  return null;
}
