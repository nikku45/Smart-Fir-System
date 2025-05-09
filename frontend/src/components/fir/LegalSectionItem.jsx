import { Info } from 'lucide-react';
import { useState } from 'react';

function LegalSectionItem({ section, description, relevance, confidence }) {
  const [showDetails, setShowDetails] = useState(false);
  
  // Convert confidence score to percentage
  const confidencePercentage = Math.round(confidence * 100);
  
  // Determine the color based on confidence score
  const getConfidenceColor = (score) => {
    if (score >= 0.8) return 'bg-green-500';
    if (score >= 0.6) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div 
        className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <div className="h-8 w-8 bg-indigo-100 rounded-md flex items-center justify-center">
              <svg className="h-5 w-5 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900">{section}</h4>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div 
                className={`${getConfidenceColor(confidence)} h-2 rounded-full`} 
                style={{ width: `${confidencePercentage}%` }}
              ></div>
            </div>
            <span className="ml-2 text-xs text-gray-500">{confidencePercentage}%</span>
          </div>
          <svg className={`h-5 w-5 text-gray-400 transform ${showDetails ? 'rotate-180' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      
      {showDetails && (
        <div className="p-3 bg-gray-50 border-t border-gray-200">
          <div className="flex items-start mb-2">
            <Info className="h-4 w-4 text-indigo-600 mr-2 mt-0.5" />
            <p className="text-xs text-gray-600">{relevance}</p>
          </div>
          <div className="flex justify-end">
            <button className="text-xs text-indigo-600 hover:text-indigo-800">
              Learn more about {section}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LegalSectionItem;