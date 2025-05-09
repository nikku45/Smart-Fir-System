import { User } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Smart FIR System</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="h-5 w-5 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">User</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;