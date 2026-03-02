import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FaCode, FaCheck, FaStar, FaTrophy } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';
import codolioCard from '../assets/achievement/profileCard.png';

const ProblemSolving = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCodolioData = async () => {
      try {
        const response = await fetch('https://api.codolio.io/user/zaGgcLqF');

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error("Codolio API Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCodolioData();
  }, []);

  return (
    <SectionWrapper id="problem-solving" title="Problem Solving">
      <div className="max-w-4xl mx-auto">

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        )}

        {/* Show Codolio Card if API fails */}
        {!loading && error && (
          <div className="flex justify-center py-12">
            <a
              href="https://codolio.com/profile/zaGgcLqF"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src={codolioCard}
                alt="Codolio Profile Card"
                className="rounded-xl shadow-lg border border-white/10 w-[400px] h-auto object-contain"
              />
            </a>
          </div>
        )}

        {/* Stats Section */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-8">

            {/* Total Solved */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-center p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-600/30 border border-purple-500/30 backdrop-blur-md"
            >
              <div className="flex items-center justify-center mb-4">
                <FaCode className="text-5xl text-purple-500 mr-4" />
                <div>
                  <h3 className="text-5xl font-bold text-white">
                    {stats?.total?.solved || '900+'}
                  </h3>
                  <p className="text-gray-300 text-lg">Total Problems Solved</p>
                </div>
              </div>
            </motion.div>

            {/* Easy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center mb-4">
                <FaCheck className="text-2xl text-green-500 mr-3" />
                <h4 className="text-xl font-semibold text-white">Easy</h4>
              </div>
              <p className="text-4xl font-bold text-green-400">
                {stats?.total?.easy || '300+'}
              </p>
            </motion.div>

            {/* Medium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center mb-4">
                <FaStar className="text-2xl text-yellow-500 mr-3" />
                <h4 className="text-xl font-semibold text-white">Medium</h4>
              </div>
              <p className="text-4xl font-bold text-yellow-400">
                {stats?.total?.medium || '450+'}
              </p>
            </motion.div>

            {/* Hard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-full md:col-span-1 md:col-start-1 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center mb-4">
                <FaTrophy className="text-2xl text-red-500 mr-3" />
                <h4 className="text-xl font-semibold text-white">Hard</h4>
              </div>
              <p className="text-4xl font-bold text-red-400">
                {stats?.total?.hard || '150+'}
              </p>
            </motion.div>

            {/* Platform Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-full grid grid-cols-3 gap-4 mt-4"
            >

              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <SiLeetcode className="text-3xl mx-auto mb-2 text-yellow-500" />
                <p className="text-sm text-gray-300">LeetCode</p>
                <p className="text-lg font-bold text-white">
                  {stats?.leetcode?.solved || '400+'}
                </p>
              </a>

              <a
                href="https://codeforces.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <SiCodeforces className="text-3xl mx-auto mb-2 text-blue-500" />
                <p className="text-sm text-gray-300">Codeforces</p>
                <p className="text-lg font-bold text-white">
                  {stats?.codeforces?.solved || '300+'}
                </p>
              </a>

              <a
                href="https://www.codechef.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <SiCodechef className="text-3xl mx-auto mb-2 text-red-500" />
                <p className="text-sm text-gray-300">CodeChef</p>
                <p className="text-lg font-bold text-white">
                  {stats?.codechef?.solved || '200+'}
                </p>
              </a>

            </motion.div>
          </div>
        )}

      </div>
    </SectionWrapper>
  );
};

export default ProblemSolving;