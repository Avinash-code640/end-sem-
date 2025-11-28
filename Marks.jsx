import React from "react";

function Marks() {
  const marks = [
    { subject: "Maths", score: 92 },
    { subject: "Physics", score: 88 },
    { subject: "Chemistry", score: 90 },
    { subject: "English", score: 85 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">📘 Marks</h2>
      <div className="grid grid-cols-2 gap-6">
        {marks.map((m, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-600"
          >
            <h3 className="text-xl font-semibold">{m.subject}</h3>
            <p className="text-3xl mt-3 font-bold text-indigo-700">{m.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marks;
