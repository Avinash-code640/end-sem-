import React, { useState } from "react";
import Marks from "./Marks";
import Courses from "./Courses";
import Notifications from "./Notifications";

function Dashboard() {
  const [tab, setTab] = useState("marks");

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <div className="w-64 bg-indigo-700 text-white p-6 shadow-xl">
        <h1 className="text-2xl font-bold mb-10">Student Dashboard</h1>
        <div className="space-y-3">
          <button
            onClick={() => setTab("marks")}
            className={`w-full text-left py-3 px-4 rounded-lg transition ${
              tab === "marks" ? "bg-indigo-500" : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            📘 Marks
          </button>
          <button
            onClick={() => setTab("courses")}
            className={`w-full text-left py-3 px-4 rounded-lg transition ${
              tab === "courses" ? "bg-indigo-500" : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            📚 Courses
          </button>
          <button
            onClick={() => setTab("notifications")}
            className={`w-full text-left py-3 px-4 rounded-lg transition ${
              tab === "notifications" ? "bg-indigo-500" : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            🔔 Notifications
          </button>
        </div>
      </div>
      <div className="flex-1 p-10">
        {tab === "marks" && <Marks />}
        {tab === "courses" && <Courses />}
        {tab === "notifications" && <Notifications />}
      </div>
    </div>
  );
}

export default Dashboard;
