function SidebarIcon({ icon, active, onClick }) {
    return (
      <button 
        className={`h-10 w-10 rounded-lg flex items-center justify-center ${
          active 
            ? 'bg-indigo-700 text-white' 
            : 'text-indigo-300 hover:bg-indigo-700/50 hover:text-white'
        }`}
        onClick={onClick}
      >
        {icon}
      </button>
    );
  }
  
  export default SidebarIcon;