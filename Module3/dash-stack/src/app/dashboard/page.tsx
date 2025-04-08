import { Card, CardContent } from "@/components/ui/card"
import { BellIcon } from "lucide-react"
import Image from "next/image"
import { DealTable } from "./components/deal-table"
import { SalesChart } from "./components/sales-chart"
import { StatsCard } from "./components/stats-card"
import Sidebar from "@/components/sidebar"

export default function Dashboard() {
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

        {/* Dashboard Content */}
        <main className="p-6">
          <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total User"
              value="40,689"
              change="8.5%"
              isUp={true}
              periodText="Up from yesterday"
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              }
            />
            <StatsCard
              title="Total Order"
              value="10293"
              change="1.3%"
              isUp={true}
              periodText="Up from past week"
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
              }
            />
            <StatsCard
              title="Total Sales"
              value="$89,000"
              change="4.3%"
              isUp={false}
              periodText="Down from yesterday"
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              }
            />
            <StatsCard
              title="Total Pending"
              value="2040"
              change="1.8%"
              isUp={true}
              periodText="Up from yesterday"
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              }
            />
          </div>

          {/* Sales Chart */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Sales Details</h2>
                <div className="inline-flex items-center rounded-md border px-3 py-1 text-sm">
                  October
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <SalesChart />
            </CardContent>
          </Card>

          {/* Deals Table */}
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Deals Details</h2>
                <div className="inline-flex items-center rounded-md border px-3 py-1 text-sm">
                  October
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <DealTable />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
