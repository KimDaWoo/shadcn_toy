import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li><Link href="/" className="block py-2 px-4 hover:bg-gray-700">Home</Link></li>
          <li><Link href="/calendar" className="block py-2 px-4 hover:bg-gray-700">Calendar</Link></li>
          {/* 추가 SNB 항목을 여기에 넣을 수 있습니다 */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
