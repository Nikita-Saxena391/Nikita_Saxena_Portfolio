import React from "react";

const ProgrammingSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white p-6 gap-6">

      <h2 className="text-5xl font-bold text-purple-400 text-center">
        Problem Solving
      </h2>

      <p className="text-center max-w-2xl text-lg md:text-xl">
        I actively practice Data Structures and Algorithms on LeetCode to improve
        my problem-solving and logical thinking skills. I regularly solve problems
        covering topics such as arrays, strings, dynamic programming, graphs,
        and other important algorithmic concepts.
      </p>

      <p className="text-center max-w-xl text-lg">
        You can explore my submissions, solved problems, and coding progress on my
        LeetCode profile.
      </p>

      <a
        href="https://leetcode.com/Nikita-saxena/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        Visit My LeetCode Profile
      </a>

    </section>
  );
};

export default ProgrammingSection;