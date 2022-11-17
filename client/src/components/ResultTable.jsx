import React from 'react';

function ResultTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>javed</td>
            <td>2</td>
            <td>6</td>
            <td>passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
