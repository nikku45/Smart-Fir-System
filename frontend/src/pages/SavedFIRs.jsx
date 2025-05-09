import RecentFIRItem from '../components/dashboard/RecentFIRItem';
import { Search, Filter } from 'lucide-react';

function SavedFIRs() {
  const firs = [
    {
      id: 'FIR-2025-0505',
      title: 'Vehicle Theft Report',
      date: 'May 5, 2025',
      status: 'Processing',
      location: 'Greenway Mall, Sector 14'
    },
    {
      id: 'FIR-2025-0423',
      title: 'Mobile Phone Snatching',
      date: 'April 23, 2025',
      status: 'Assigned',
      location: 'Central Market, M.G. Road'
    },
    {
      id: 'FIR-2025-0412',
      title: 'Shop Break-in Report',
      date: 'April 12, 2025',
      status: 'Investigation',
      location: 'Lakeside Commercial Complex'
    },
    {
      id: 'FIR-2025-0331',
      title: 'Identity Theft Complaint',
      date: 'March 31, 2025',
      status: 'Closed',
      location: 'Online Fraud'
    },
    {
      id: 'FIR-2025-0315',
      title: 'Workplace Harassment',
      date: 'March 15, 2025',
      status: 'Review',
      location: 'TechStar Office, IT Park'
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Saved FIRs</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FIRs..."
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {firs.map(fir => (
              <div key={fir.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{fir.title}</h3>
                      <div className="flex items-center text-xs text-gray-500 space-x-3">
                        <span>{fir.id}</span>
                        <span>•</span>
                        <span>{fir.date}</span>
                        <span>•</span>
                        <span>{fir.location}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${fir.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${fir.status === 'Assigned' ? 'bg-blue-100 text-blue-800' : ''}
                      ${fir.status === 'Investigation' ? 'bg-green-100 text-green-800' : ''}
                      ${fir.status === 'Closed' ? 'bg-gray-100 text-gray-800' : ''}
                      ${fir.status === 'Review' ? 'bg-purple-100 text-purple-800' : ''}
                    `}>
                      {fir.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <button className="text-xs text-indigo-600 hover:text-indigo-800">View Details</button>
                  <button className="text-xs text-gray-500 hover:text-gray-700">Download PDF</button>
                  <button className="text-xs text-gray-500 hover:text-gray-700">Share</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Showing 5 of 12 FIRs</p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 bg-indigo-600 border border-indigo-600 rounded-md text-sm text-white hover:bg-indigo-700">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">3</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedFIRs;