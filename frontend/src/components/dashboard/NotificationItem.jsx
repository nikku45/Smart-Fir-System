function NotificationItem({ title, description, time, priority }) {
    const getPriorityColor = (priority) => {
      switch(priority) {
        case 'high': return 'border-l-red-500';
        case 'medium': return 'border-l-yellow-500';
        case 'low': return 'border-l-blue-500';
        default: return 'border-l-gray-300';
      }
    };
    
    return (
      <div className={`p-3 border-l-4 ${getPriorityColor(priority)} bg-gray-50 rounded-r-lg`}>
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
        <p className="text-xs text-gray-400 mt-2">{time}</p>
      </div>
    );
  }
  
  export default NotificationItem;