import { Partner, Gametype } from "./mockDev";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.britwager.org/api/v1";

export async function fetchGametypes(): Promise<Gametype[]> {
  try {
    const response = await fetch(`${API_URL}/gametypes`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch gametypes");
    }
    return await response.json();
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
    });
    if (!response.ok) {
      throw new Error("Failed to fetch partners");
    }
    const partners: Partner[] = await response.json();
    
    // Filter by isMobile on server side
    if (isMobile) {
      return partners; // Show all on mobile
    } else {
      return partners.filter((p) => p.isMobile === false);
    }
  } catch (error) {
    console.error("Error fetching partners:", error);
    const { mockPartners } = await import("./mockDev");
    return isMobile ? mockPartners : mockPartners.filter((p) => p.isMobile === false);
  }
}
