import React from 'react'

function Dashboard() {
  
  return (
    <div>
        <h1 className="text-3xl font-bold underline mb-2">Dashboard</h1>
        <p className="text-lg mb-10">
          This is the dashboard page. You can view your dashboard here.
        </p>
        <h2 className='text-3xl font-bold mb-2'>Resources:</h2>
        <ul className='font-medium'>
          <li><strong>Users</strong> {'->'} Protected by Managers privileges</li>
          <li><strong>Products</strong> {'->'} All Users can <strong>View</strong> Product List</li>
          <li><strong>Profile</strong> {'->'} All Users can <strong>View</strong> their Profile List</li>
          <li><strong>Reports</strong> {'->'} Protected by Sales Reps privileges</li>
          <li><strong>Sales History</strong> {'->'} Protected by Sales Reps privileges</li>
          <li><strong>Orders</strong> {'->'} Protected by Sales Reps privileges</li>
          <li><strong>Tickets</strong> {'->'} Protected by Sales Reps privileges</li>
          <li><strong>Permissions</strong> {'->'} Protected by Admin privileges</li>
          <li><strong>System settings</strong> {'->'} Only users with Admin privileges can <strong>Read, Create, Update, Delete</strong> Settings</li>
        </ul>
    </div>
  )
}

export default Dashboard