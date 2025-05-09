import { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

function VoiceRecorder() {
  const [recording, setRecording] = useState(false);
  
  const handleRecord = () => {
    setRecording(!recording);
  };
  
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-700">Record your statement</h3>
        <div className="flex items-center space-x-2">
          <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
            <option>English</option>
            <option>Hindi</option>
            <option>Bengali</option>
            <option>Tamil</option>
            <option>Telugu</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-center mb-6">
        <button 
          onClick={handleRecord}
          className={`h-16 w-16 rounded-full flex items-center justify-center ${recording ? 'bg-red-500' : 'bg-indigo-600'} shadow-lg hover:opacity-90 transition-opacity`}
        >
          {recording ? <MicOff className="h-8 w-8 text-white" /> : <Mic className="h-8 w-8 text-white" />}
        </button>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        {recording ? 'Recording... Click to stop' : 'Click to start recording'}
      </div>
    </div>
  );
}

export default VoiceRecorder;