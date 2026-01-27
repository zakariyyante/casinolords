import { Partner, Gametype } from "./mockDev";

// Ensure API URL always ends with /api/v1
const getApiUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  if (envUrl) {
    return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
  }
  return "https://api.britwager.org/api/v1";
};

const API_URL = getApiUrl();

export async function fetchGametypes(): Promise<Gametype[]> {
  try {
    const apiUrl = `${API_URL}/gametypes`;

    const response = await fetch(apiUrl, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch gametypes: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch gametypes: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching gametypes:", error);
    const { mockGametypes } = await import("./mockDev");
    return mockGametypes;
  }
}

export async function fetchPartners(
  gametypeId: number,
  isMobile: boolean
): Promise<Partner[]> {
  try {
    const url = `${API_URL}/online-partners?gametypeId=${gametypeId}&status=true`;

    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch partners: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch partners: ${response.status}`);
    }

    const partners: Partner[] = await response.json();

    // Filter by isMobile on server side
    const filtered = partners.filter((p) => p.isMobile === isMobile);

    // Sort by order key from lowest to highest
    const sorted = filtered.sort((a, b) => (a.order || 999) - (b.order || 999));

    return sorted;
  } catch (error) {
    console.error("Error fetching partners:", error);
    const { mockPartners } = await import("./mockDev");
    const filtered = mockPartners.filter((p) => p.isMobile === isMobile);
    // Sort by order key from lowest to highest
    return filtered.sort((a, b) => (a.order || 999) - (b.order || 999));
  }
}
