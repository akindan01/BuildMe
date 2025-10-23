import React, { useState } from 'react';
import { Home, Search, MessageSquare, Heart, User, Menu, X, Bell, MapPin, TrendingUp, Building2, Sparkles, Calendar, Eye } from 'lucide-react';


const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState(3);


  const userData = {
    name: 'Akinremi Daniel',
    email: 'oluwajomiloju2650@gmail.com',
    initials: 'AD'
  };

  
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore Properties', icon: Search },
    { id: 'saved', label: 'Saved Properties', icon: Heart },
    { id: 'assistant', label: 'AI Assistant', icon: Sparkles },
    { id: 'chat', label: 'Messages', icon: MessageSquare },
    { id: 'profile', label: 'My Profile', icon: User },
  ];

  
  const clientStats = [
    { label: 'Properties Viewed', value: '24', icon: Eye, color: 'bg-green-600' },
    { label: 'Saved Properties', value: '8', icon: Heart, color: 'bg-red-500' },
    { label: 'Scheduled Viewings', value: '3', icon: Calendar, color: 'bg-orange-500' },
    { label: 'New Matches', value: '12', icon: TrendingUp, color: 'bg-blue-500' },
  ];

  const recommendedProperties = [
    { id: 1, title: '4 Bedroom Bungalow', location: 'Ado-Ekiti, Ekiti', price: '₦16,000,000', beds: 4, baths: 4, sqft: '4200',match: '95%' },
    { id: 2, title: '4 Bedroom Mansion in 3rd Extension Gra', location: 'GRA, Ado-Ekiti, Ekiti State', price: '₦45,000,000', beds: 4, baths: 3, sqft: '4500', match: '92%' },
    { id: 3, title: '3 Bedroom Block of Flats', location: 'Ado-Ekiti, Ekiti State', price: '₦72,000,000', beds: 3, baths: 3, sqft: '2,100', match: '88%' },
    { id: 4, title: '4 Bedroom Bungalow', location: 'Ado-Ekiti, Ekiti State', price: '₦65,000,000', beds: 4, sqft: '4600', match: '93%' },
  ];

  const upcomingTours = [
    { id: 1, property: '5 Bedroom Duplex with BQ', location: 'Ado-Ekiti, Ekiti State', date: 'Jan 14, 2026', price: '₦28,000,000', agent: 'Adebayo Falade' },
    { id: 2, property: '3 Bedroom Bungalow', location: 'Ikere-Ekiti, Ekiti State', date: 'Feb 26, 2026', price: '₦15,500,000', agent: 'Funmilayo Adeyemi' },
    { id: 3, property: '4 Bedroom Detached Duplex', location: 'Efon-Alaaye, Ekiti State', date: 'Feb 28, 2026', price: '₦22,000,000', agent: 'Oluwaseun Kolawole' },
  ];

  const recentActivity = [
    { id: 1, action: 'Saved property', property: '3 Bedroom Duplex, Ikere', time: '2 hours ago' },
    { id: 2, action: 'Scheduled viewing', property: '5 Bedroom Duplex, Ado-Ekiti', time: '5 hours ago' },
    { id: 3, action: 'Viewed property', property: '4 Bedroom Bungalow, Ikere', time: '1 day ago' },
    { id: 4, action: 'New match found', property: 'Terrace Duplex, Ekiti', time: '2 days ago' },
    { id: 5, action: 'New match found', property: '3 Bedroom Duplex, Efon-Alaye, Ekiti State', time: '30 mins ago'},
  ];

  
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <ClientDashboardHome stats={clientStats} recommended={recommendedProperties} tours={upcomingTours} activity={recentActivity} />;
      case 'explore':
        return <ExplorePlaceholder />;
      case 'assistant':
        return <AssistantPlaceholder />;
      case 'saved':
        return <SavedPlaceholder />;
      case 'chat':
        return <ChatPlaceholder />;
      case 'profile':
        return <ProfilePlaceholder />;
      default:
        return <NotFoundPlaceholder />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sb */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Lg */}
        <div className="p-6 border-b flex items-center justify-between">
          {isSidebarOpen && <h1 className="text-2xl font-bold bg-blue-600 bg-clip-text text-transparent">BuildMe</h1>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        
        <nav className="flex-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                {isSidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

      
        {isSidebarOpen && (
          <div className="p-4 border-t">
            <div className="bg-blue-600 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={20} />
                <h3 className="font-semibold">Virtual Assistant</h3>
              </div>
              <p className="text-sm opacity-90 mb-3">Find your dream home with Wuraola</p>
              <button 
                onClick={() => setCurrentPage('assistant')}
                className="w-full bg-white text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors"
              >
                Ask Wuraola
              </button>
            </div>
          </div>
        )}
      </div>

      
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {currentPage === 'dashboard' ? `Welcome back, ${userData.name.split(' ')[0]}!` : navItems.find(item => item.id === currentPage)?.label}
              </h2>
              {currentPage === 'dashboard' && (
                <p className="text-sm text-gray-600">Let's find your perfect property today</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
        
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search properties..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>

            
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <Bell size={24} className="text-gray-600" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg" onClick={() => setCurrentPage('profile')}>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {userData.initials}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-medium text-gray-800">{userData.name}</p>
                <p className="text-xs text-gray-500">View Profile</p>
              </div>
            </div>
          </div>
        </header>

        
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};


const ClientDashboardHome = ({ stats, recommended, tours, activity }) => {
  return (
    <div className="space-y-6">
      
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome! Find Your Dream Home</h2>
            <p className="text-green-100 mb-4">We've found 12 new properties in Ekiti matching your region</p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View New Matches
            </button>
          </div>
          <Home className="hidden lg:block text-6xl" />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Recommended For You</h3>
            <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recommended.map((property) => (
              <div key={property.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                <div className="text-5xl">{property.image}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">{property.title}</h4>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">{property.match} Match</span>
                  </div>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
                    <MapPin size={14} />
                    {property.location}
                  </p>
                  <div className="flex gap-3 text-xs text-gray-500">
                    <span>{property.beds} beds</span>
                    <span>•</span>
                    <span>{property.baths} baths</span>
                    <span>•</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600 text-xl">{property.price}</p>
                  <button className="mt-2 text-sm text-blue-600 hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Properties in Ekiti</h3>
          <div className="space-y-4">
            {tours.map((tour) => (
              <div key={tour.id} className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-semibold text-gray-800 text-sm mb-1">{tour.property}</h4>
                <p className="text-xs text-gray-600 flex items-center gap-1 mb-2">
                  <MapPin size={12} className="text-green-600" />
                  {tour.location}
                </p>
                <div className="space-y-1 text-xs text-gray-600 mb-2">
                  <p className="font-semibold text-green-700">{tour.price}</p>
                  <p className="flex items-center gap-2">
                    <Calendar size={14} className="text-green-600" />
                    Available: {tour.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <User size={14} className="text-green-600" />
                    Agent: {tour.agent}
                  </p>
                </div>
                <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg text-xs font-medium hover:bg-green-700 transition-colors">
                  Schedule Viewing
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {activity.map((item) => (
            <div key={item.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <p className="text-sm font-semibold text-gray-800 mb-1">{item.action}</p>
              <p className="text-sm text-gray-600 mb-2">{item.property}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const ExplorePlaceholder = () => {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    propertyType: 'all'
  });
  const [viewMode, setViewMode] = useState('grid');

  const properties = [
    { id: 1, title: '4 Bedroom Bungalow', location: 'Ado Ekiti, Ekiti', price: '₦16,000,000', beds: 4, baths: 4, sqft: '4200', type: 'bungalow', featured: true },
    { id: 2, title: '4 Bedroom Mansion in GRA', location: 'GRA, Ado Ekiti', price: '₦45,000,000', beds: 4, baths: 3, sqft: '4500', type: 'mansion', featured: true },
    { id: 3, title: '3 Bedroom Block of Flats', location: 'Ado Ekiti, Ekiti', price: '₦72,000,000', beds: 3, baths: 3, sqft: '2100', type: 'flat', featured: false },
    { id: 4, title: '5 Bedroom Duplex', location: 'Ikere, Ekiti', price: '₦28,000,000', beds: 5, baths: 4, sqft: '5000', type: 'duplex', featured: true },
    { id: 5, title: '2 Bedroom Apartment', location: 'Efon-Alaaye, Ekiti', price: '₦8,500,000', beds: 2, baths: 2, sqft: '1800', type: 'apartment', featured: false },
    { id: 6, title: '6 Bedroom Villa', location: 'Ado Ekiti, Ekiti', price: '₦95,000,000', beds: 6, baths: 5, sqft: '6500', type: 'villa', featured: true },
  ];

  return (
    <div className="space-y-6">

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Filter Properties</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Location"
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={filters.bedrooms}
            onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
          <select
            value={filters.propertyType}
            onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="bungalow">Bungalow</option>
            <option value="duplex">Duplex</option>
            <option value="mansion">Mansion</option>
            <option value="apartment">Apartment</option>
            <option value="flat">Flat</option>
            <option value="villa">Villa</option>
          </select>
        </div>
      </div>

  
      <div className="flex items-center justify-between">
        <p className="text-gray-600"><span className="font-bold text-gray-800">{properties.length}</span> properties found</p>
        <div className="flex gap-2">
          <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
            <Building2 size={20} />
          </button>
          <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
            <Menu size={20} />
          </button>
        </div>
      </div>

      
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden group">
            <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Home size={64} className="text-white opacity-50" />
              {property.featured && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  Featured
                </span>
              )}
              <button className="absolute top-4 left-4 bg-white p-2 rounded-full hover:bg-red-50 transition-colors">
                <Heart size={20} className="text-red-500" />
              </button>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600">{property.title}</h4>
              <p className="text-sm text-gray-600 flex items-center gap-1 mb-3">
                <MapPin size={14} />
                {property.location}
              </p>
              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span>{property.beds} beds</span>
                <span>•</span>
                <span>{property.baths} baths</span>
                <span>•</span>
                <span>{property.sqft} sqft</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-blue-600">{property.price}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AssistantPlaceholder = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'assistant', text: 'Hello! I\'m Wuraola, your AI property assistant. How can I help you find your dream home today?', time: '10:30 AM' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    'Show me 4-bedroom houses in Ekiti',
    'What\'s the average price in GRA?',
    'Properties under ₦20M',
    'Schedule a viewing'
  ];

  const getAIResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('4-bedroom') || msg.includes('4 bedroom')) {
      return {
        text: 'Great choice! I found 8 properties matching "4-bedroom houses in Ekiti". Here are the top matches:',
        properties: [
          { title: '4 Bedroom Bungalow', location: 'Ado Ekiti', price: '₦16,000,000', match: '95%' },
          { title: '4 Bedroom Mansion in GRA', location: 'GRA, Ado Ekiti', price: '₦45,000,000', match: '92%' },
          { title: '4 Bedroom Detached Duplex', location: 'Ikere, Ekiti', price: '₦22,000,000', match: '88%' }
        ]
      };
    } else if (msg.includes('price') || msg.includes('average')) {
      return {
        text: 'Based on current market data in GRA, Ado Ekiti:\n\n• Average property price: ₦35,000,000\n• Price range: ₦25M - ₦65M\n• Most common: 4-5 bedroom properties\n• Trend: Prices increased 8% in the last 6 months\n\nWould you like to see available properties in GRA?',
        properties: []
      };
    } else if (msg.includes('under') || msg.includes('20m') || msg.includes('budget')) {
      return {
        text: 'Perfect! I found 15 properties under ₦20,000,000 in Ekiti. Here are the best options:',
        properties: [
          { title: '4 Bedroom Bungalow', location: 'Ado Ekiti', price: '₦16,000,000', match: '96%' },
          { title: '3 Bedroom Duplex', location: 'Ikere', price: '₦18,500,000', match: '93%' },
          { title: '3 Bedroom Bungalow', location: 'Efon-Alaaye', price: '₦15,500,000', match: '90%' }
        ]
      };
    } else if (msg.includes('viewing') || msg.includes('schedule') || msg.includes('tour')) {
      return {
        text: 'I can help you schedule a property viewing! Here are your saved properties available for tours:\n\n1. 4 Bedroom Bungalow - Ado Ekiti (₦16M)\n2. 5 Bedroom Duplex - Ikere (₦28M)\n3. 3 Bedroom Block - Ado Ekiti (₦72M)\n\nWhich property would you like to visit? I can check available time slots with the agents.',
        properties: []
      };
    } else if (msg.includes('location') || msg.includes('area') || msg.includes('where')) {
      return {
        text: 'I can help you explore different locations in Ekiti! Popular areas include: GRA, Ado Ekiti - Premium properties (₦25M-₦65M) Ikere - Family homes (₦15M-₦30M)\n\n Efon-Alaaye - Affordable options (₦8M-₦20M)\n\n Ado Ekiti Center - Mixed residential (₦12M-₦45M)\n\nWhich area interests you most?',
        properties: []
      };
    } else if (msg.includes('thank') || msg.includes('thanks')) {
      return {
        text: 'You\'re very welcome! I\'m here anytime you need help finding your perfect property. Feel free to ask me anything about homes in Ekiti! 😊',
        properties: []
      };
    } else if (msg.includes('duplex')) {
      return {
        text: 'Excellent! I found 12 duplex properties in Ekiti. Here are your best matches:',
        properties: [
          { title: '5 Bedroom Duplex with BQ', location: 'Ado Ekiti', price: '₦28,000,000', match: '94%' },
          { title: '4 Bedroom Detached Duplex', location: 'GRA, Ado Ekiti', price: '₦45,000,000', match: '91%' },
          { title: '3 Bedroom Terrace Duplex', location: 'Ikere', price: '₦18,500,000', match: '87%' }
        ]
      };
    } else {
      return {
        text: 'I\'m here to help you find the perfect property! I can assist you with:\n\n Searching properties by bedrooms, location, or price\n Checking market prices and trends\n Scheduling property viewings\n  Managing your saved properties\n Property comparisons and recommendations\n\nWhat would you like to know?',
        properties: []
      };
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMsg = {
        id: messages.length + 1,
        sender: 'user',
        text: inputMessage,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
      
      setMessages(prev => [...prev, userMsg]);
      const currentInput = inputMessage;
      setInputMessage('');
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        const response = getAIResponse(currentInput);
        
        const assistantMsg = {
          id: messages.length + 2,
          sender: 'assistant',
          text: response.text,
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          properties: response.properties
        };
        
        setMessages(prev => [...prev, assistantMsg]);
      }, 1500);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-blue-600 rounded-xl shadow-lg p-6 text-white mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles size={32} />
          <div>
            <h3 className="text-2xl font-bold">Wuraola AI Assistant</h3>
            <p className="text-purple-100">Your intelligent property finder</p>
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <p className="text-sm text-gray-600 mb-3">Quick actions:</p>
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => setInputMessage(action)}
              className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-100 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      
      <div className="flex-1 bg-white rounded-xl shadow-sm p-6 overflow-y-auto mb-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-xl p-4`}>
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>{message.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask Wuraola anything about properties..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};


const SavedPlaceholder = () => {
  const [savedProperties, setSavedProperties] = useState([
    { id: 1, title: '4 Bedroom Bungalow', location: 'Ado Ekiti, Ekiti', price: '₦16,000,000', beds: 4, baths: 4, sqft: '4200', savedDate: '2 days ago' },
    { id: 2, title: '4 Bedroom Mansion in GRA', location: 'GRA, Ado Ekiti', price: '₦45,000,000', beds: 4, baths: 3, sqft: '4500', savedDate: '5 days ago' },
    { id: 3, title: '5 Bedroom Duplex', location: 'Ikere, Ekiti', price: '₦28,000,000', beds: 5, baths: 4, sqft: '5000', savedDate: '1 week ago' },
    { id: 4, title: '3 Bedroom Block of Flats', location: 'Ado Ekiti, Ekiti', price: '₦72,000,000', beds: 3, baths: 3, sqft: '2100', savedDate: '2 weeks ago' },
  ]);

  const removeProperty = (id) => {
    setSavedProperties(savedProperties.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-100 rounded-xl p-6">
        <div className="flex items-center gap-3">
          <Heart size={32} className="text-red-500" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Your Saved Properties</h3>
            <p className="text-gray-600">You have {savedProperties.length} properties saved</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {savedProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6">
            <div className="flex gap-4">
              <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home size={48} className="text-white opacity-50" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-lg text-gray-800">{property.title}</h4>
                  <button
                    onClick={() => removeProperty(property.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 flex items-center gap-1 mb-3">
                  <MapPin size={14} />
                  {property.location}
                </p>
                <div className="flex gap-3 text-xs text-gray-600 mb-3">
                  <span>{property.beds} beds</span>
                  <span>•</span>
                  <span>{property.baths} baths</span>
                  <span>•</span>
                  <span>{property.sqft} sqft</span>
                </div>
                <p className="text-xl font-bold text-blue-600 mb-2">{property.price}</p>
                <p className="text-xs text-gray-500 mb-3">Saved {property.savedDate}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                    View Details
                  </button>
                  <button className="px-4 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const ChatPlaceholder = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const conversations = [
    { id: 1, name: 'Adebayo Falade', role: 'Property Agent', lastMessage: 'The viewing is confirmed for tomorrow', time: '10:30 AM', unread: 2, avatar: 'AF' },
    { id: 2, name: 'Funmilayo Adeyemi', role: 'Property Agent', lastMessage: 'I have new listings in your area', time: 'Yesterday', unread: 0, avatar: 'FA' },
    { id: 3, name: 'BuildMe Support', role: 'Customer Support', lastMessage: 'How can we help you today?', time: '2 days ago', unread: 1, avatar: 'BS' },
    { id: 4, name: 'Oluwaseun Kolawole', role: 'Property Agent', lastMessage: 'The documents are ready', time: '3 days ago', unread: 0, avatar: 'OK' },
  ];

  const currentMessages = [
    { id: 1, sender: 'them', text: 'Hello! I saw you\'re interested in the 4 bedroom bungalow', time: '9:45 AM' },
    { id: 2, sender: 'them', text: 'Would you like to schedule a viewing?', time: '9:46 AM' },
    { id: 3, sender: 'me', text: 'Yes, I\'d love to see it!', time: '9:50 AM' },
    { id: 4, sender: 'them', text: 'Great! How about tomorrow at 2 PM?', time: '10:15 AM' },
    { id: 5, sender: 'me', text: 'Perfect! See you then', time: '10:20 AM' },
    { id: 6, sender: 'them', text: 'The viewing is confirmed for tomorrow', time: '10:30 AM' },
  ];

  const sendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput('');
    }
  };

  return (
    <div className="flex gap-4 h-[calc(100vh-200px)]">
      
      <div className="w-80 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Messages</h3>
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedChat(conv.id)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${selectedChat === conv.id ? 'bg-green-50' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {conv.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-800 truncate">{conv.name}</h4>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  <p className="text-xs text-gray-500 mt-1">{conv.role}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                    {conv.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-xl shadow-sm flex flex-col">
        
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              {conversations.find(c => c.id === selectedChat)?.avatar}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{conversations.find(c => c.id === selectedChat)?.name}</h4>
              <p className="text-xs text-gray-500">{conversations.find(c => c.id === selectedChat)?.role}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu size={20} className="text-gray-600" />
          </button>
        </div>

        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {currentMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md ${msg.sender === 'me' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-xl p-3`}>
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-green-100' : 'text-gray-500'}`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProfilePlaceholder = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Akinremi Daniel',
    email: 'oluwajomiloju2650@gmail.com',
    phone: '+234 803 456 7890',
    location: 'Ado Ekiti, Ekiti State',
    budget: '₦15,000,000 - ₦25,000,000',
    propertyType: 'Bungalow, Duplex',
    bedrooms: '3-4 bedrooms',
    bio: 'Looking for a comfortable family home in a peaceful neighborhood with good schools nearby.'
  });

  const activityStats = [
    { label: 'Properties Viewed', value: 24, icon: Eye },
    { label: 'Saved Properties', value: 8, icon: Heart },
    { label: 'Messages Sent', value: 45, icon: MessageSquare },
  ];

  const recentSearches = [
    '4 bedroom bungalow in Ado Ekiti',
    'Properties under ₦20M',
    'Duplex in GRA',
    'Houses near schools',
  ];

  return (
    <div className="space-y-6">

      <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold">
              AD
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-white text-blue-600 p-2 rounded-full hover:bg-gray-100">
                <User size={16} />
              </button>
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
            <p className="text-blue-100">{profile.email}</p>
            <p className="text-blue-100 mt-1">Member since January 2024</p>
          </div>
          <div className="hidden md:flex gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl font-bold">24</p>
              <p className="text-xs text-blue-100">Properties Viewed</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-blue-100">Saved</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Profile Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  disabled={!isEditing}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Property Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <input
                  type="text"
                  value={profile.budget}
                  onChange={(e) => setProfile({...profile, budget: e.target.value})}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <input
                  type="text"
                  value={profile.propertyType}
                  onChange={(e) => setProfile({...profile, propertyType: e.target.value})}
                  disabled={!isEditing}
                  placeholder="e.g., Bungalow, Duplex, Apartment"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Bedrooms</label>
                <input
                  type="text"
                  value={profile.bedrooms}
                  onChange={(e) => setProfile({...profile, bedrooms: e.target.value})}
                  disabled={!isEditing}
                  placeholder="e.g., 3-4 bedrooms"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Recent Searches */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Searches</h3>
            <div className="space-y-2">
              {recentSearches.map((search, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <Search size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-700">{search}</span>
                  </div>
                  <button className="text-blue-600 text-xs font-medium hover:underline">
                    Search Again
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sb */}
        <div className="space-y-6">
  
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Activity Overview</h3>
            <div className="space-y-4">
              {activityStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 p-2 rounded-lg">
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{stat.label}</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                <Search size={18} />
                <span className="text-sm font-medium">Find Properties</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                <Calendar size={18} />
                <span className="text-sm font-medium">Schedule Viewing</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                <Sparkles size={18} />
                <span className="text-sm font-medium">Ask AI Assistant</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                <Heart size={18} />
                <span className="text-sm font-medium">View Saved</span>
              </button>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Account Settings</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Notification Settings
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Privacy Settings
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const NotFoundPlaceholder = () => (
  <div className="bg-white rounded-xl shadow-sm p-8 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">404 - Page Not Found</h3>
    <p className="text-gray-600">The page you're looking for doesn't exist</p>
  </div>
);

export default Dashboard;