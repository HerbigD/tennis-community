'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Tab = 'wta' | 'atp';

interface Player {
  rank: number;
  name: string;
  country: string;
  points: number;
}

const rankings = {
  wta: [
    { rank: 1, name: '伊加·斯瓦泰克', country: '波兰', points: 10835 },
    { rank: 2, name: '阿丽娜·萨巴伦卡', country: '白俄罗斯', points: 8565 },
    { rank: 3, name: '杰西卡·佩古拉', country: '美国', points: 5000 },
    { rank: 4, name: '埃琳娜·雷巴金娜', country: '哈萨克斯坦', points: 4975 },
    { rank: 5, name: '科科·高芙', country: '美国', points: 4195 },
  ],
  atp: [
    { rank: 1, name: '诺瓦克·德约科维奇', country: '塞尔维亚', points: 11795 },
    { rank: 2, name: '卡洛斯·阿尔卡拉斯', country: '西班牙', points: 8855 },
    { rank: 3, name: '达尼尔·梅德韦杰夫', country: '俄罗斯', points: 7600 },
    { rank: 4, name: '扬尼克·辛纳', country: '意大利', points: 6490 },
    { rank: 5, name: '亚历山大·兹维列夫', country: '德国', points: 5030 },
  ],
};

const Ranking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('wta');

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">网球排名</h1>
            <div className="flex mb-6">
              <button
                className={`px-4 py-2 ${activeTab === 'wta' ? 'bg-[#00a1e0] text-white' : 'bg-gray-200'} rounded-l-md`}
                onClick={() => setActiveTab('wta')}
              >
                WTA 排名
              </button>
              <button
                className={`px-4 py-2 ${activeTab === 'atp' ? 'bg-[#00a1e0] text-white' : 'bg-gray-200'} rounded-r-md`}
                onClick={() => setActiveTab('atp')}
              >
                ATP 排名
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-[#00a1e0] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">排名</th>
                    <th className="py-3 px-4 text-left">球员</th>
                    <th className="py-3 px-4 text-left">国籍</th>
                    <th className="py-3 px-4 text-left">积分</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings[activeTab].map((player, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4">{player.rank}</td>
                      <td className="py-3 px-4">{player.name}</td>
                      <td className="py-3 px-4">{player.country}</td>
                      <td className="py-3 px-4">{player.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <button className="flex items-center bg-[#00a1e0] text-white px-4 py-2 rounded-full hover:bg-[#0081b0] transition duration-300">
                查看更多 <ChevronDown className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ranking;