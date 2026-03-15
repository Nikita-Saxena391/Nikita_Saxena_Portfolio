import React, { useState, useEffect } from "react";

const USERNAME = "Nikita-saxena"; // Replace with your LeetCode username

const ProgrammingSection = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const resSolved = await fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`);
        const resRanking = await fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}`);
        const solvedData = await resSolved.json();
        const rankingData = await resRanking.json();

        setStats({
          totalSolved: solvedData?.solvedProblem ?? 0,
          easySolved: solvedData?.easySolved ?? 0,
          mediumSolved: solvedData?.mediumSolved ?? 0,
          hardSolved: solvedData?.hardSolved ?? 0,
          ranking: rankingData?.ranking ?? "N/A",
        });
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
        setStats({
          totalSolved: 0,
          easySolved: 0,
          mediumSolved: 0,
          hardSolved: 0,
          ranking: "N/A",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6 gap-6">
      <h2 className="text-5xl font-bold text-purple-400 text-center">Problem Solving</h2>
      <p className="text-center max-w-xl text-lg md:text-xl">
        I actively practice competitive programming on LeetCode with a strong focus on data structures,
        algorithms, and problem-solving consistency. I have earned multiple achievement badges for my dedication and performance.
      </p>

      <h3 className="text-3xl font-bold text-pink-500 mt-4">Problem Stats From LeetCode</h3>

      {loading ? (
        <p className="text-green-500 font-bold text-xl">Loading stats from LeetCode...</p>
      ) : (
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="text-center text-2xl md:text-3xl">
            <strong>Total Problems Solved till now:</strong>{" "}
            <span className="text-green-400">{stats.totalSolved}</span>
          </div>

          <div className="flex gap-8 mt-4">
            <div className="border border-white p-6 rounded-lg text-center flex flex-col items-center gap-2">
              <strong className="text-2xl text-blue-400">Easy</strong>
              <p className="text-2xl text-green-400">{stats.easySolved}</p>
            </div>
            <div className="border border-white p-6 rounded-lg text-center flex flex-col items-center gap-2">
              <strong className="text-2xl text-yellow-400">Medium</strong>
              <p className="text-2xl text-green-400">{stats.mediumSolved}</p>
            </div>
            <div className="border border-white p-6 rounded-lg text-center flex flex-col items-center gap-2">
              <strong className="text-2xl text-red-400">Hard</strong>
              <p className="text-2xl text-green-400">{stats.hardSolved}</p>
            </div>
          </div>

          <div className="text-center mt-4 text-xl md:text-2xl">
            <strong>Global Ranking:</strong> {stats.ranking}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgrammingSection;