import React from 'react'

function Users() {
  return render();
}

function render() {
  return (
    <div className='UsersPage'>
      <div className='header'><h2>USERS</h2></div>
      <div className="text"><p>This is an example of a table with static / fixed data in the table.</p></div>
      <div>
        <table className='table' align='center'>
          <tbody>
            <tr>
              <th>ID</th>
              <th>MAC</th>
              <th>IP</th>
            </tr>
            <tr>
              <td>1</td>
              <td>FF:1A:4C:4A:AA:FF</td>
              <td>192.168.1.101</td>
            </tr>
            <tr>
              <td>2</td>
              <td>00:1A:4C:4A:AA:FF</td>
              <td>192.168.1.102</td>
            </tr>
            <tr>
              <td>3</td>
              <td>FF:00:4C:4D:A2:FF</td>
              <td>192.168.1.103</td>
            </tr>
            <tr>
              <td>4</td>
              <td>00:1A:1A:1B:AA:00</td>
              <td>192.168.1.104</td>
            </tr>
            <tr>
              <td>5</td>
              <td>4C:1A:02:4A:04:2D</td>
              <td>192.168.1.105</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users

