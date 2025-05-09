import { ChevronRight } from 'lucide-react';

function StepIndicator({ currentStep }) {
  const steps = [
    { number: 1, name: 'Narrate Incident' },
    { number: 2, name: 'Review & Confirm' },
    { number: 3, name: 'Submit' }
  ];
  
  return (
    <div className="flex items-center mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className={`
            ${currentStep >= step.number ? 'bg-indigo-600' : 'bg-gray-300'} 
            rounded-full h-8 w-8 flex items-center justify-center
          `}>
            <span className="text-white text-sm font-medium">{step.number}</span>
          </div>
          <span className={`
            ml-2 text-sm font-medium 
            ${currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'}
          `}>
            {step.name}
          </span>
          
          {index < steps.length - 1 && (
            <ChevronRight className="mx-4 text-gray-400" />
          )}
        </div>
      ))}
    </div>
  );
}

export default StepIndicator;