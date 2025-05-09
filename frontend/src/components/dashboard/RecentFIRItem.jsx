import { FileText } from 'lucide-react';

function RecentFIRItem({ title, date, status }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Assigned': return 'bg-blue-100 text-blue-800';
      case 'Investigation': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-indigo-100 rounded-md flex items-center justify-center mr-3">
          <FileText className="h-4 w-4 text-indigo-600" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900">{title}</h4>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(status)}`}>
        {status}
      </span>
    </div>
  );
}

export default RecentFIRItem;