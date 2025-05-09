import { useState } from 'react';
import LegalSectionItem from './LegalSectionItem';
import InfoAlert from '../common/InfoAlert';

function AIAnalysisResults({ incidentText }) {
  const [sections, setSections] = useState([
    {
      id: 1,
      section: "379 IPC",
      description: "Theft",
      relevance: "The incident involves property (laptop, wallet) being dishonestly taken without consent.",
      confidence: 0.92
    },
    {
      id: 2,
      section: "427 IPC",
      description: "Mischief causing damage",
      relevance: "The car window was broken, causing damage to property.",
      confidence: 0.85
    },
    {
      id: 3,
      section: "511 IPC",
      description: "Attempting to commit offences",
      relevance: "May be applicable if there's evidence of attempted theft of the car itself.",
      confidence: 0.64
    }
  ]);
  
  const [editedIncident, setEditedIncident] = useState(incidentText);
  
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-3">AI Analysis Results</h3>
        <InfoAlert 
          message="Our AI has analyzed your incident and identified the following legal sections. Please review and confirm."
          type="info" 
        />
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Incident Summary</h4>
        <textarea
          value={editedIncident}
          onChange={(e) => setEditedIncident(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          rows="5"
        ></textarea>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-gray-700">Identified Legal Sections</h4>
          <span className="text-xs text-gray-500">AI Confidence Score</span>
        </div>
        
        <div className="space-y-3">
          {sections.map(section => (
            <LegalSectionItem 
              key={section.id}
              section={section.section}
              description={section.description}
              relevance={section.relevance}
              confidence={section.confidence}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Additional Information Needed</h4>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="ml-2 text-xs text-gray-600">
              Please provide the exact location (address) where the incident occurred.
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="ml-2 text-xs text-gray-600">
              Include any identifying details of your vehicle (registration number, make, model, color).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAnalysisResults;