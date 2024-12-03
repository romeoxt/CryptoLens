export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-[#f5f5eb] text-xl font-bold">CryptoLens</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-[#f5f5eb] transition-colors">
                Tools
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f5f5eb] transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f5f5eb] transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f5f5eb] transition-colors">
                Pricing
              </a>
            </div>
          </div>

          <div>
            <button className="bg-[#f5f5eb] text-[#0e1015] px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

