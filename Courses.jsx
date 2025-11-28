import React from "react";

function Courses() {
  const courses = ["React Basics", "DSA", "C Programming", "DBMS"];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">📚 Courses</h2>
      <div className="space-y-4">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-5 rounded-lg text-lg font-semibold border-l-4 border-green-500"
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
