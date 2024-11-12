import Image from 'next/image'
import { Search, Filter } from 'lucide-react'

export default function Tournaments() {
  const tournaments = [
    { name: '澳大利亚网球公开赛', location: '墨尔本，澳大利亚', date: '2025年1月', category: '大满贯' },
    { name: '法国网球公开赛', location: '巴黎，法国', date: '2024年5月-6月', category: '大满贯' },
    { name: '温布尔登网球锦标赛', location: '伦敦，英国', date: '2024年7月', category: '大满贯' },
    { name: '美国网球公开赛', location: '纽约，美国', date: '2024年8月-9月', category: '大满贯' },
    { name: '印第安维尔斯大师赛', location: '印第安维尔斯，美国', date: '2025年3月', category: 'ATP/WTA 1000' },
    { name: '迈阿密公开赛', location: '迈阿密，美国', date: '2025年3月', category: 'ATP/WTA 1000' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">网球赛事</h1>
            <div className="mb-8 flex items-center space-x-4">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="搜索赛事..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00a1e0]"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <button className="flex items-center bg-[#00a1e0] text-white px-4 py-2 rounded-full hover:bg-[#0081b0] transition duration-300">
                <Filter className="mr-2 w-5 h-5" /> 筛选
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tournaments.map((tournament, i) => (
                <div key={i} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=${tournament.name}`}
                    alt={tournament.name}
                    width={400}
                    height={200}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{tournament.name}</h3>
                    <p className="text-gray-600 mb-1">地点: {tournament.location}</p>
                    <p className="text-gray-600 mb-1">日期: {tournament.date}</p>
                    <p className="text-gray-600 mb-4">类别: {tournament.category}</p>
                    <button className="w-full bg-[#00a1e0] text-white px-4 py-2 rounded-full hover:bg-[#0081b0] transition duration-300">
                      查看详情
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}