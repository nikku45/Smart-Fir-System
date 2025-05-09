import HomePage from '../components/dashboard/HomePage';
import RecentFIRItem from '../components/dashboard/RecentFIRItem';
import NotificationItem from '../components/dashboard/NotificationItem';

function Dashboard({ setActiveTab }) {
  return (
    <div className="max-w-4xl mx-auto">
      <HomePage setActiveTab={setActiveTab} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="font-medium text-gray-900 mb-4">Recent FIRs</h3>
            <div className="space-y-4">
              <RecentFIRItem
                title="Vehicle Theft Report"
                date="May 5, 2025"
                status="Processing"
              />
              <RecentFIRItem
                title="Mobile Phone Snatching"
                date="April 23, 2025"
                status="Assigned"
              />
              <RecentFIRItem
                title="Shop Break-in Report"
                date="April 12, 2025"
                status="Investigation"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="font-medium text-gray-900 mb-4">Updates & Notifications</h3>
            <div className="space-y-4">
              <NotificationItem 
                title="Investigation Update"
                description="Officer Singh has been assigned to your case #FIR-2025-0423."
                time="2 hours ago"
                priority="medium"
              />
              <NotificationItem 
                title="Document Request"
                description="Please upload insurance details for your stolen vehicle case."
                time="1 day ago"
                priority="high"
              />
              <NotificationItem 
                title="System Maintenance"
                description="The Smart FIR System will be under maintenance on May 10, 2025."
                time="3 days ago"
                priority="low"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;