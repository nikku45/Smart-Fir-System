import { Mic, Search, File } from 'lucide-react';
import HowItWorks from './HowItWorks';

function HomePage({ setActiveTab }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="bg-indigo-700 px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            File FIRs Easily with AI Assistance
          </h2>
          <p className="text-indigo-100 mb-8">
            Our AI-powered system helps you create accurate FIRs with proper legal sections. 
            Just narrate or type your incident in your preferred language.
          </p>
          <button 
            className="px-6 py-3 bg-white text-indigo-700 rounded-md font-medium shadow-md hover:bg-indigo-50"
            onClick={() => setActiveTab('new')}
          >
            File New FIR
          </button>
        </div>
      </div>
      
      <div className="px-6 py-8">
        <HowItWorks />
      </div>
    </div>
  );
}

export default HomePage;