import { 
    Home, FileText, Bookmark, Search, 
    HelpCircle, Settings, LogOut 
  } from 'lucide-react';
  import SidebarIcon from './SidebarIcon';
  
  function Sidebar({ activeTab, setActiveTab }) {
    return (
      <div className="w-20 bg-indigo-800 flex flex-col items-center py-6">
        <div className="mb-8">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
            <FileText className="h-6 w-6 text-indigo-800" />
          </div>
        </div>
        
        <nav className="flex-1 flex flex-col gap-6">
          <SidebarIcon 
            icon={<Home />} 
            active={activeTab === 'home'} 
            onClick={() => setActiveTab('home')} 
          />
          <SidebarIcon 
            icon={<FileText />} 
            active={activeTab === 'new'} 
            onClick={() => setActiveTab('new')} 
          />
          <SidebarIcon 
            icon={<Bookmark />} 
            active={activeTab === 'saved'} 
            onClick={() => setActiveTab('saved')} 
          />
          <SidebarIcon 
            icon={<Search />} 
            active={activeTab === 'search'} 
            onClick={() => setActiveTab('search')} 
          />
          <SidebarIcon 
            icon={<HelpCircle />} 
            active={activeTab === 'help'} 
            onClick={() => setActiveTab('help')} 
          />
        </nav>
        
        <div className="mt-auto">
          <SidebarIcon 
            icon={<Settings />} 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')} 
          />
          <SidebarIcon icon={<LogOut />} active={false} />
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  