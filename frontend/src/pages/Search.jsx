import { useState } from 'react';
import { Search as SearchIcon, Filter, ChevronDown, Calendar, Tag, MapPin, UserCircle } from 'lucide-react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length > 0) {
      setIsSearching(true);
      
      // Simulate API call delay
      setTimeout(() => {
        // Mock search results - in a real app, this would query an API
        setSearchResults([
          {
            id: 'FIR-2025-0423',
            title: 'Mobile Phone Snatching',
            date: 'April 23, 2025',
            location: 'Central Market, M.G. Road',
            status: 'Assigned',
            type: 'Theft',
            matchedOn: 'Description contains "mobile phone"'
          },
          {
            id: 'FIR-2024-1202',
            title: 'Mobile Theft at Metro Station',
            date: 'December 2, 2024',
            location: 'City Metro, Line 3, Platform 2',
            status: 'Closed',
            type: 'Theft',
            matchedOn: 'Title contains "mobile"'
          },
          {
            id: 'FIR-2025-0318',
            title: 'Vehicle Break-in',
            date: 'March 18, 2025',
            location: 'Downtown Parking Lot, Block C',
            status: 'Investigation',
            type: 'Theft',
            matchedOn: 'Related to "property theft"'
          }
        ]);
        
        setIsSearching(false);
      }, 1000);
    }
  };
  
  const tabOptions = [
    { id: 'all', label: 'All Results' },
    { id: 'firs', label: 'FIRs' },
    { id: 'sections', label: 'Legal Sections' },
    { id: 'locations', label: 'Locations' }
  ];
  
  const filterSections = [
    {
      title: 'Time Period',
      icon: <Calendar className="h-4 w-4" />,
      options: ['Last week', 'Last month', 'Last 3 months', 'Last year', 'Custom range']
    },
    {
      title: 'Case Type',
      icon: <Tag className="h-4 w-4" />,
      options: ['Theft', 'Assault', 'Fraud', 'Property Damage', 'Cybercrime', 'Others']
    },
    {
      title: 'Location',
      icon: <MapPin className="h-4 w-4" />,
      options: ['North Zone', 'South Zone', 'East Zone', 'West Zone', 'Central Zone']
    },
    {
      title: 'Officer',
      icon: <UserCircle className="h-4 w-4" />,
      options: ['Any Officer', 'Officer Singh', 'Officer Kumar', 'Officer Sharma', 'Officer Verma']
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Search FIRs</h2>
          
          <form onSubmit={handleSearch}>
            <div className="flex items-center mb-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by FIR number, title, or content..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                type="button"
                className="ml-3 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-1" />
                Filters
                <ChevronDown className={`h-4 w-4 ml-1 transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              <button
                type="submit"
                className={`ml-3 px-4 py-2 rounded-md text-sm font-medium text-white ${
                  searchTerm.trim().length > 0 
                  ? 'bg-indigo-600 hover:bg-indigo-700' 
                  : 'bg-indigo-400 cursor-not-allowed'
                }`}
                disabled={searchTerm.trim().length === 0 || isSearching}
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </div>
            
            {showFilters && (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filterSections.map((section, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-2">
                        <div className="mr-2 text-indigo-600">
                          {section.icon}
                        </div>
                        <h4 className="text-sm font-medium text-gray-700">{section.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {section.options.map((option, optIndex) => (
                          <button
                            key={optIndex}
                            type="button"
                            className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-100"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="text-sm text-indigo-600 hover:text-indigo-800 mr-4"
                  >
                    Reset All
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </form>
          
          {searchResults.length > 0 && (
            <>
              <div className="border-b border-gray-200 mb-4">
                <nav className="flex -mb-px">
                  {tabOptions.map((tab) => (
                    <button
                      key={tab.id}
                      className={`mr-8 py-4 px-1 text-sm font-medium ${
                        activeTab === tab.id
                          ? 'border-b-2 border-indigo-500 text-indigo-600'
                          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500">Found {searchResults.length} results for "{searchTerm}"</p>
              </div>
              
              <div className="space-y-4">
                {searchResults.map((result) => (
                  <div key={result.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mr-4">
                          <SearchIcon className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{result.title}</h3>
                          <div className="flex items-center text-xs text-gray-500 space-x-3">
                            <span>{result.id}</span>
                            <span>•</span>
                            <span>{result.date}</span>
                            <span>•</span>
                            <span>{result.location}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className={`
                          inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${result.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${result.status === 'Assigned' ? 'bg-blue-100 text-blue-800' : ''}
                          ${result.status === 'Investigation' ? 'bg-green-100 text-green-800' : ''}
                          ${result.status === 'Closed' ? 'bg-gray-100 text-gray-800' : ''}
                        `}>
                          {result.status}
                        </span>
                      </div>
                    </div>
                    <div className="pl-14">
                      <p className="text-xs text-gray-500 mb-2">
                        <span className="text-indigo-600">Match: </span>
                        {result.matchedOn}
                      </p>
                      <div className="flex items-center justify-start space-x-4">
                        <button className="text-xs text-indigo-600 hover:text-indigo-800">View Details</button>
                        <button className="text-xs text-gray-500 hover:text-gray-700">Download PDF</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          
          {searchTerm.trim().length > 0 && searchResults.length === 0 && !isSearching && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
              <p className="text-gray-500 text-sm">Try different keywords or filters</p>
            </div>
          )}
          
          {isSearching && (
            <div className="text-center py-12">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Searching...</h3>
              <p className="text-gray-500 text-sm">Looking for relevant results</p>
            </div>
          )}
          
          {!searchTerm.trim().length && searchResults.length === 0 && !isSearching && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Start Searching</h3>
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Enter FIR number, keywords, or use filters to find relevant FIRs and legal information.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-xs text-gray-600">Try searching for:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button 
                    className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-indigo-50 hover:border-indigo-300"
                    onClick={() => setSearchTerm('mobile theft')}
                  >
                    mobile theft
                  </button>
                  <button 
                    className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-indigo-50 hover:border-indigo-300"
                    onClick={() => setSearchTerm('FIR-2025')}
                  >
                    FIR-2025
                  </button>
                  <button 
                    className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-indigo-50 hover:border-indigo-300"
                    onClick={() => setSearchTerm('vehicle')}
                  >
                    vehicle
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;