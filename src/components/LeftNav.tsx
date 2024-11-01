import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderKanban,
  Calendar,
  Users,
  HardHat,
  UserCircle,
  Building2,
  MapPin,
  LogOut,
  ChevronDown
} from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  subItems?: { title: string; href: string }[];
}

const navItems: NavItem[] = [
  { title: 'Dashboard', href: '/', icon: LayoutDashboard },
  { title: 'Projects', href: '/projects', icon: FolderKanban },
  { title: 'Schedule', href: '/schedule', icon: Calendar },
  { title: 'Customers', href: '/customers', icon: Users },
  { title: 'Crews', href: '/crews', icon: HardHat },
  { title: 'Employees', href: '/employees', icon: UserCircle },
  { title: 'Vendors', href: '/vendors', icon: Building2 },
  {
    title: 'Locations',
    href: '/locations',
    icon: MapPin,
    subItems: [
      { title: 'Neighborhood', href: '/locations/neighborhood' },
      { title: 'City', href: '/locations/city' },
      { title: 'County', href: '/locations/county' },
      { title: 'State', href: '/locations/state' },
      { title: 'Inspection Jurisdiction', href: '/locations/inspection' },
    ],
  },
];

const LeftNav: React.FC = () => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-4 border-b">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <LayoutDashboard className="h-6 w-6" />
          <span>Nies Foundations</span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <div key={item.href}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                  >
                    {React.createElement(item.icon, { className: "h-4 w-4" })}
                    <span>{item.title}</span>
                    <ChevronDown className={`ml-auto h-4 w-4 transform transition-transform ${
                      openSubmenu === item.href ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {openSubmenu === item.href && (
                    <div className="ml-6 space-y-1 mt-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={`block px-3 py-2 text-sm rounded-md ${
                            location.pathname === subItem.href
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${
                    location.pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {React.createElement(item.icon, { className: "h-4 w-4" })}
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center gap-2 mb-4">
          <UserCircle className="h-10 w-10" />
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-500">john@example.com</p>
          </div>
        </div>
        <Link
          to="/logout"
          className="flex items-center gap-2 px-3 py-2 text-sm rounded-md text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default LeftNav;