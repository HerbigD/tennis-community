import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function News() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">网球新闻</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
            <div className="mt-8 flex justify-center">
              <button className="bg-[#00a1e0] text-white px-4 py-2 rounded-l-full hover:bg-[#0081b0] transition duration-300">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="bg-[#00a1e0] text-white px-4 py-2 rounded-r-full hover:bg-[#0081b0] transition duration-300 ml-2">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}