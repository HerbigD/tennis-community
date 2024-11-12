import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#00a1e0] text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-2xl font-bold">TennisInfo</Link>
              <div className="hidden md:flex space-x-4">
                <Link href="/news" className="hover:underline">新闻</Link>
                <Link href="/rankings" className="hover:underline">排名</Link>
                <Link href="/schedule" className="hover:underline">赛程</Link>
                <div className="relative group">
                  <button className="flex items-center hover:underline">
                    更多 <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 py-2 rounded-md">
                    <Link href="/players" className="block px-4 py-2 hover:bg-gray-100">球员</Link>
                    <Link href="/tournaments" className="block px-4 py-2 hover:bg-gray-100">赛事</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="md:hidden">
                <Search className="w-6 h-6" />
              </button>
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="搜索..."
                  className="bg-white text-black px-4 py-2 rounded-full focus:outline-none"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh] bg-gray-200">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Featured news"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 py-8 text-white">
              <h2 className="text-4xl font-bold mb-4">斯瓦泰克在罗兰·加洛斯夺冠</h2>
              <p className="text-xl mb-4">波兰选手成功卫冕法网女单冠军</p>
              <Link href="/news/1" className="bg-[#00a1e0] text-white px-6 py-2 rounded-full hover:bg-[#0081b0] transition duration-300">
                阅读更多
              </Link>
            </div>
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button className="bg-white rounded-full p-2 shadow-md">
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button className="bg-white rounded-full p-2 shadow-md">
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">最新新闻</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=News ${i}`}
                    alt={`News ${i}`}
                    width={400}
                    height={200}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">网球新闻标题 {i}</h3>
                    <p className="text-gray-600 mb-4">这里是新闻的简短描述，吸引读者点击阅读更多...</p>
                    <Link href={`/news/${i}`} className="text-[#00a1e0] hover:underline">
                      阅读更多
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">即将举行的比赛</h2>
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
                  {[
                    { date: '2024-06-01', tournament: '法国网球公开赛', location: '巴黎，法国', category: '大满贯' },
                    { date: '2024-06-28', tournament: '温布尔登网球锦标赛', location: '伦敦，英国', category: '大满贯' },
                    { date: '2024-08-26', tournament: '美国网球公开赛', location: '纽约，美国', category: '大满贯' },
                  ].map((match, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4">{match.date}</td>
                      <td className="py-3 px-4">{match.tournament}</td>
                      <td className="py-3 px-4">{match.location}</td>
                      <td className="py-3 px-4">{match.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">球员排名</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">WTA 排名</h3>
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
                    {[
                      { rank: 1, name: '伊加·斯瓦泰克', country: '波兰', points: 10835 },
                      { rank: 2, name: '阿丽娜·萨巴伦卡', country: '白俄罗斯', points: 8565 },
                      { rank: 3, name: '杰西卡·佩古拉', country: '美国', points: 5000 },
                    ].map((player, i) => (
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
              <div>
                <h3 className="text-2xl font-semibold mb-4">ATP 排名</h3>
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
                    {[
                      { rank: 1, name: '诺瓦克·德约科维奇', country: '塞尔维亚', points: 11795 },
                      { rank: 2, name: '卡洛斯·阿尔卡拉斯', country: '西班牙', points: 8855 },
                      { rank: 3, name: '达尼尔·梅德韦杰夫', country: '俄罗斯', points: 7600 },
                    ].map((player, i) => (
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
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">关于我们</h3>
              <p>TennisInfo 是您获取最新网球资讯、赛程和球员信息的首选平台。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><Link href="/news" className="hover:underline">新闻</Link></li>
                <li><Link href="/rankings" className="hover:underline">排名</Link></li>
                <li><Link href="/schedule" className="hover:underline">赛程</Link></li>
                <li><Link href="/players" className="hover:underline">球员</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">联系我们</h3>
              <p>邮箱: info@tennisinfo.com</p>
              <p>电话: +1 234 567 8900</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 TennisInfo. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
