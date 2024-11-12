'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Month = 'June' | 'July' | 'August';

interface Event {
  date: string;
  tournament: string;
  location: string;
  category: string;
}

const schedule: Record<Month, Event[]> = {
  June: [
    { date: '2024-06-01', tournament: '法国网球公开赛', location: '巴黎，法国', category: '大满贯' },
    { date: '2024-06-15', tournament: '斯图加特公开赛', location: '斯图加特，德国', category: 'ATP 250' },
    { date: '2024-06-22', tournament: '伊斯特本国际赛', location: '伊斯特本，英国', category: 'WTA 500' },
  ],
  July: [
    { date: '2024-06-28', tournament: '温布尔登网球锦标赛', location: '伦敦，英国', category: '大满贯' },
    { date: '2024-07-15', tournament: '汉堡欧洲公开赛', location: '汉堡，德国', category: 'ATP 500' },
    { date: '2024-07-22', tournament: '巴尔的摩公开赛', location: '巴尔的摩，美国', category: 'WTA 250' },
  ],
  August: [
    { date: '2024-08-05', tournament: '加拿大公开赛', location: '多伦多，加拿大', category: 'ATP/WTA 1000' },
    { date: '2024-08-12', tournament: '辛辛那提大师赛', location: '辛辛那提，美国', category: 'ATP/WTA 1000' },
    { date: '2024-08-26', tournament: '美国网球公开赛', location: '纽约，美国', category: '大满贯' },
  ],
}

export default function Schedule() {
  const [activeMonth, setActiveMonth] = useState<Month>('June');

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">赛程</h1>
            <div className="flex mb-6 space-x-2">
              {Object.keys(schedule).map((month) => (
                <button
                  key={month}
                  className={`px-4 py-2 ${activeMonth === month ? 'bg-[#00a1e0] text-white' : 'bg-gray-200'} rounded-md`}
                  onClick={() => setActiveMonth(month as Month)}
                >
                  {month}
                </button>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-[#00a1e0] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">日期</th>
                    <th className="py-3 px-4 text-left">赛事</th>
                    <th className="py-3 px-4 text-left">地点</th>
                    <th className="py-3 px-4 text-left">类别</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule[activeMonth].map((event, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4">{event.date}</td>
                      <td className="py-3 px-4">{event.tournament}</td>
                      <td className="py-3 px-4">{event.location}</td>
                      <td className="py-3 px-4">{event.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <button className="flex items-center bg-[#00a1e0] text-white px-4 py-2 rounded-full hover:bg-[#0081b0] transition duration-300">
                查看更多月份 <ChevronDown className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}