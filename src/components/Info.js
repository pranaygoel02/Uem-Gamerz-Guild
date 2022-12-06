import React from 'react'

function Info() {
  return (
    <div className='absolute top-8 right-0 flex flex-col gap-2'>
          <p className='px-4 py-2 bg-red-600 rounded-md'>Sample Data Format</p>
          <table className='bg-black/95 rounded-md shadow-md w-max'>
            <tr>
              <th className='p-2'>Name</th>
              <th className='p-2'>Position</th>
            </tr>
            <tr>
              <td>Name Surname</td>
              <td>1st</td>
            </tr>
            <tr>
              <td>Name Surname</td>
              <td>2nd</td>
            </tr>
            <tr>
              <td>Name Surname</td>
              <td>3rd</td>
            </tr>
            <tr>
              <td>Name Surname</td>
            </tr>
            <tr>
              <td>Name Surname</td>
            </tr>
          </table>
        </div>
  )
}

export default Info