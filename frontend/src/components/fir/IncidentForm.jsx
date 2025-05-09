import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

function IncidentForm({ incidentText, setIncidentText }) {
  const [language, setLanguage] = useState('English');
  const [wordCount, setWordCount] = useState(0);
  const [showPrompts, setShowPrompts] = useState(true);
  
  const handleTextChange = (e) => {
    const text = e.target.value;
    setIncidentText(text);
    
    // Count words
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(words);
  };
  
  const sampleText = "On May 5th around 8:30 PM, my car was parked outside Greenway Mall. When I returned at 10:15 PM, I found the driver's side window broken and my laptop bag stolen from the backseat. The bag contained my Dell XPS laptop, company documents, and my wallet with ID cards.";
  
  const promptQuestions = [
    "What happened? (Describe the incident)",
    "When did it happen? (Date and time)",
    "Where did it happen? (Location details)",
    "Who was involved? (People involved, if any)",
    "What was stolen/damaged? (Property details)",
    "Were there any witnesses? (Witness information)",
    "Any other relevant details? (Additional context)"
  ];
  
  const handleUseSample = () => {
    setIncidentText(sampleText);
    setWordCount(sampleText.trim().split(/\s+/).length);
  };
  
  const handleClear = () => {
    setIncidentText('');
    setWordCount(0);
  };
  
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700">Describe the incident in detail</label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">Language:</span>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-300 rounded-md text-sm px-2 py-1"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Bengali</option>
              <option>Tamil</option>
              <option>Telugu</option>
            </select>
          </div>
          <button 
            onClick={() => setShowPrompts(!showPrompts)}
            className="text-xs text-indigo-600 hover:text-indigo-800"
          >
            {showPrompts ? 'Hide prompts' : 'Show prompts'}
          </button>
        </div>
      </div>
      
      <div className="relative">
        <textarea
          value={incidentText}
          onChange={handleTextChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 min-h-[200px]"
          placeholder="Type your incident details here. Try to be as specific as possible with dates, times, locations, and descriptions."
        ></textarea>
        
        <div className="absolute bottom-3 right-3 flex items-center text-xs text-gray-500">
          <span>{wordCount} words</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center text-xs text-gray-500">
          <AlertCircle className="h-3 w-3 mr-1" />
          <span>Your information is protected and encrypted</span>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleUseSample} 
            className="text-xs text-indigo-600 hover:text-indigo-800"
          >
            Use sample text
          </button>
          <button 
            onClick={handleClear}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
        </div>
      </div>
      
      {showPrompts && (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Guiding Questions</h4>
          <ul className="space-y-2">
            {promptQuestions.map((question, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start">
                <span className="h-4 w-4 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 flex-shrink-0">
                  {index + 1}
                </span>
                {question}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default IncidentForm;