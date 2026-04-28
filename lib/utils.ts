export function calculateRating(order: number): number {
  if (order <= 2) return 9.9;
  if (order <= 5) return 9.8;
  if (order <= 8) return 9.7;
  if (order <= 10) return 9.6;
  if (order <= 12) return 9.5;
  return 9.4;
}

export function calculateStars(order: number): number {
  if (order <= 3) return 5;
  if (order <= 7) return 4.5;
  return 4;
}

export function isMobileDevice(userAgent: string): boolean {
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
}

export function getImageUrl(logo?: string): string {
  if (!logo) {
    return "/placeholder.svg";
  }

  // Local public-folder paths (start with /) are served directly
  if (logo.startsWith("/")) {
    return logo;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.casinolords.org/api/v1";
  return `${apiUrl}/files/partners/${logo}`;
}
