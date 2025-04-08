
import { BellIcon} from "lucide-react"
import Image from "next/image"
import Sidebar from "@/components/sidebar"
import ProductCard from "./components/ProductCard"

export default function Favorites() {
  // Sample favorite products data
  const favoriteProducts = [
    {
      id: 1,
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4,
      reviews: 112,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Air-Max-270",
      price: "$60.00",
      rating: 3,
      reviews: 34,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Beats Headphone",
      price: "$24.50",
      rating: 4,
      reviews: 14,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Amazfit Vip",
      price: "$89.99",
      rating: 5,
      reviews: 67,
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Gumbo Mouse",
      price: "$45.00",
      rating: 4,
      reviews: 28,
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Camera Tripod",
      price: "$35.75",
      rating: 3,
      reviews: 19,
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="ml-[52px] flex-1">
        {/* Header */}
        <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-white px-6">
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="w-full rounded-md border-gray-200 bg-gray-50 py-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button type="button" className="relative rounded-full bg-gray-100 p-1 text-gray-600">
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  2
                </span>
                <BellIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg"
                  alt="Noro Ray"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Noro Ray</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </header>

        {/* Favorites Content */}
        <main className="p-6">
          <h1 className="mb-6 text-2xl font-bold">Favorites</h1>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}


