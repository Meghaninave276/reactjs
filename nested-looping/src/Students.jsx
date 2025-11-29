import React from "react";

export default function Students({ student }) {
  return (
    <div>
      <h3>students name:</h3>
      {student &&
        student.map((student, index) => (
          <div>
            <ul>
              <li>name:{student.name}</li>
              <li>age:{student.age}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}
