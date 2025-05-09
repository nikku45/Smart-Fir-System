import { Mic, Search, File } from 'lucide-react';

function HowItWorks() {
  return (
    <>
      <h3 className="text-xl font-semibold text-gray-800 mb-6">How It Works</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Mic className="h-6 w-6 text-indigo-600" />
          </div>
          <h4 className="font-medium text-gray-900 mb-2">Narrate or Type</h4>
          <p className="text-gray-600 text-sm">
            Share your incident details by speaking in your language or typing it directly.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Search className="h-6 w-6 text-indigo-600" />
          </div>
          <h4 className="font-medium text-gray-900 mb-2">AI Analysis</h4>
          <p className="text-gray-600 text-sm">
            Our AI analyzes your incident and identifies relevant legal sections automatically.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <File className="h-6 w-6 text-indigo-600" />
          </div>
          <h4 className="font-medium text-gray-900 mb-2">Complete FIR</h4>
          <p className="text-gray-600 text-sm">
            Review, confirm and submit your legally accurate FIR with proper sections.
          </p>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;