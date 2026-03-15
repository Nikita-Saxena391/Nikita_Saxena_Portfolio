// app/api/leetcode/route.js
import { NextResponse } from "next/server";

const USERNAME = "Nikita-saxena"; // <-- your LeetCode username

const FALLBACK_STATS = {
  totalSolved: 0,
  easySolved: 0,
  mediumSolved: 0,
  hardSolved: 0,
  ranking: "N/A",
};

export async function GET() {
  try {
    // fetch solved problem stats
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`, {
      next: { revalidate: 3600 }, // cache 1 hour
    });

    // fetch global ranking
    const globalRanking = await fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok || !globalRanking.ok) {
      return NextResponse.json(FALLBACK_STATS);
    }

    const data = await res.json();
    const rankingData = await globalRanking.json();

    return NextResponse.json({
      totalSolved: data?.solvedProblem ?? 0,
      easySolved: data?.easySolved ?? 0,
      mediumSolved: data?.mediumSolved ?? 0,
      hardSolved: data?.hardSolved ?? 0,
      ranking: rankingData?.ranking ?? "N/A",
    });
  } catch (error) {
    console.error("Failed to fetch LeetCode stats:", error);
    return NextResponse.json(FALLBACK_STATS);
  }
}