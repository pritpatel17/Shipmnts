import React from "react";
import mockData from "./mockData";

const MyTable = () => {
  return (
    <div>
      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Age</th>
            <th>Hire Date</th>
            <th>Is Active</th>
            <th>Salary</th>
            <th>Department</th>
            <th>ProjectsCompleted</th>
            <th>LastLogin</th>
            <th>AccessLevel</th>
          </tr>
        </thead>
        <tbody>
          {mockData((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.age}</td>
              <td>{user.hireDate}</td>
              <td>{user.isActive}</td>
              <td>{user.salary}</td>
              <td>{user.department}</td>
              <td>{user.projectsCompleted}</td>
              <td>{user.lastLogin}</td>
              <td>{user.accessLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
