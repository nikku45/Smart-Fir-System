import { useState } from 'react';
import StepIndicator from '../components/common/StepIndicator';
import VoiceRecorder from '../components/fir/VoiceRecorder';
import IncidentForm from '../components/fir/IncidentForm';
import AIAnalysisResults from '../components/fir/AIAnalysisResults';

function NewFIR() {
  const [incidentText, setIncidentText] = useState('');
  const [showSections, setShowSections] = useState(false);
  
  const handleAnalyze = () => {
    if (incidentText.trim().length > 0) {
      setShowSections(true);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">File New FIR</h2>
          
          <StepIndicator currentStep={showSections ? 2 : 1} />
          
          <VoiceRecorder />
          
          <IncidentForm 
            incidentText={incidentText} 
            setIncidentText={setIncidentText} 
          />
          
          <div className="flex justify-end">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 mr-3 hover:bg-gray-50">
              Clear
            </button>
            <button 
              className="px-4 py-2 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700 flex items-center"
              onClick={handleAnalyze}
            >
              Analyze incident{/* Analyze Incident <ChevronRight className="ml-2 h-4 w-4" /> */}
            </button>
          </div>
        </div>
        
        {showSections && <AIAnalysisResults />}
      </div>
    </div>
  );
}

export default NewFIR;