import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import NewFIR from './pages/NewFIR';
import SavedFIRs from './pages/SavedFIRs';
import Search from './pages/Search';
import Help from './pages/Help';
import Settings from './pages/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  // Render the appropriate page based on activeTab
  const renderPage = () => {
    switch(activeTab) {
      case 'home':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'new':
        return <NewFIR />;
      case 'saved':
        return <SavedFIRs />;
      case 'search':
        return <Search />;
      case 'help':
        return <Help />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;