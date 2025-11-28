import React from "react";

function Notifications() {
  const notifications = [
    "Your assignment marks are updated.",
    "Tomorrow is a holiday.",
    "New course material has been uploaded.",
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">🔔 Notifications</h2>
      <div className="space-y-4">
        {notifications.map((n, i) => (
          <div
            key={i}
            className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500 shadow"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
