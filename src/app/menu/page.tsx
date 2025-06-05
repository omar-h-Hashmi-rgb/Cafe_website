import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import menuData from '@/data/menu.json'
import contactData from '@/data/contact.json'

export const metadata = {
  title: 'Menu - Bella Vista Cafe',
  description: 'Explore our carefully crafted menu featuring fresh, locally-sourced ingredients and creative dishes.',
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of dishes, each prepared with the finest ingredients 
            and a passion for culinary excellence.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuData.categories.map((category, categoryIndex) => (
            <div key={category.id} className={categoryIndex > 0 ? 'mt-20' : ''}>
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                  {category.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Category Items */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="flex flex-col sm:flex-row">
                      {/* Item Image */}
                      <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 200px"
                        />
                        {item.popular && (
                          <div className="absolute top-3 left-3">
                            <div className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                              <Star className="h-3 w-3 fill-current" />
                              Popular
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-2xl font-bold text-primary ml-4">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Dietary Information */}
                        {item.dietary.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.dietary.map((diet) => (
                              <Badge key={diet} variant="secondary" className="text-xs">
                                {diet.charAt(0).toUpperCase() + diet.slice(1)}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Experience These Flavors?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today or make a reservation to secure your table
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${contactData.contact.phone}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Call to Order
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-primary transition-colors"
            >
              Make a Reservation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}