import { useState } from 'react';
import StepIndicator from '../common/StepIndicator';
import VoiceRecorder from './VoiceRecorder';
import IncidentForm from './IncidentForm';
import AIAnalysisResults from './AIAnalysisResults';
import { ChevronRight } from 'lucide-react';
import InfoAlert from '../common/InfoAlert';

function NewFIRPage() {
  const [incidentText, setIncidentText] = useState('');
  const [showSections, setShowSections] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const handleAnalyze = () => {
    if (incidentText.trim().length > 0) {
      setShowSections(true);
      setCurrentStep(2);
    } else {
      // Show an error or prompt the user to enter text
    }
  };
  
  const handleSubmit = () => {
    setCurrentStep(3);
    // Logic to submit the FIR
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">File New FIR</h2>
          
          <StepIndicator currentStep={currentStep} />
          
          {currentStep === 1 && (
            <>
              <InfoAlert 
                message="Provide details about the incident in your preferred language. You can either record your statement or type it directly."
                type="info"
              />
              
              <VoiceRecorder setIncidentText={setIncidentText} />
              
              <IncidentForm 
                incidentText={incidentText} 
                setIncidentText={setIncidentText} 
              />
              
              <div className="flex justify-end mt-6">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 mr-3 hover:bg-gray-50"
                  onClick={() => setIncidentText('')}
                >
                  Clear
                </button>
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium text-white flex items-center ${
                    incidentText.trim().length > 0 
                    ? 'bg-indigo-600 hover:bg-indigo-700' 
                    : 'bg-indigo-400 cursor-not-allowed'
                  }`}
                  onClick={handleAnalyze}
                  disabled={incidentText.trim().length === 0}
                >
                  Analyze Incident <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </>
          )}
          
          {currentStep === 2 && (
            <>
              <AIAnalysisResults incidentText={incidentText} />
              
              <div className="flex justify-between mt-6">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setCurrentStep(1);
                    setShowSections(false);
                  }}
                >
                  Back
                </button>
                <button 
                  className="px-4 py-2 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700 flex items-center"
                  onClick={handleSubmit}
                >
                  Submit FIR <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </>
          )}
          
          {currentStep === 3 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">FIR Submitted Successfully</h3>
              <p className="text-gray-600 mb-6">Your FIR has been submitted with reference ID: FIR-2025-0509-001</p>
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View Details
                </button>
                <button 
                  className="px-4 py-2 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700"
                  onClick={() => {
                    setCurrentStep(1);
                    setShowSections(false);
                    setIncidentText('');
                  }}
                >
                  File Another FIR
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewFIRPage;