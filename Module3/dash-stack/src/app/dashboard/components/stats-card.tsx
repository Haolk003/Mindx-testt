import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatsCardProps {
  title: string
  value: string
  change: string
  isUp: boolean
  periodText: string
  icon: ReactNode
}

export function StatsCard({ title, value, change, isUp, periodText, icon }: StatsCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="mt-2 text-2xl font-bold">{value}</h3>
            <div className="mt-2 flex items-center">
              <span
                className={`mr-1 flex items-center text-xs font-medium ${isUp ? "text-green-500" : "text-red-500"}`}
              >
                {isUp ? <ArrowUpIcon className="mr-1 h-3 w-3" /> : <ArrowDownIcon className="mr-1 h-3 w-3" />}
                {change}
              </span>
              <span className="text-xs text-gray-500">{periodText}</span>
            </div>
          </div>
          {icon}
        </div>
      </CardContent>
    </Card>
  )
}
