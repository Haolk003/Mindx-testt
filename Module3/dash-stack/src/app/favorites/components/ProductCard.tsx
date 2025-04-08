"use client"

import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { Heart, StarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
    product: {
      id: number
      name: string
      price: string
      rating: number
      reviews: number
      image: string
    }
  }
const ProductCard = ({product}:ProductCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          {/* Navigation arrows */}
          <button
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-sm hover:bg-white"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-sm hover:bg-white"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Product image */}
          <div className="aspect-square bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="h-full w-full object-contain p-4"
            />
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm font-bold text-gray-900">{product.price}</p>
            </div>
            <button className="text-rose-500" aria-label="Remove from favorites">
              <Heart className="h-5 w-5 fill-rose-500" />
            </button>
          </div>

          <div className="mb-3 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
            <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
          </div>

          <Button variant="outline" size="sm" className="w-full text-xs">
            Edit Product
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard