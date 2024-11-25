import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { backendurl } from '../../../constant';
const ConnectedDevicesPage = () => {
  const { ipAddress } = useParams();
  const [connectedDevices, setConnectedDevices] = useState([]);

  useEffect(() => {
    const fetchConnectedDevices = async () => {
      try {
        const response = await fetch(`http://${backendurl}/connected_devices/${ipAddress}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        setConnectedDevices(data || []);
      } catch (error) {
        console.error("Error fetching process details:", error);
      }
      
    };

    fetchConnectedDevices();
    

    // Set a timer to fetch connected devices every 60 seconds
    const timerId = setInterval(fetchConnectedDevices, 5000);
    // Clean up function to clear the timer when the component unmounts
  return () => clearInterval(timerId);
    // return () => {
    //   // Perform cleanup if needed
    // };
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const searchTable = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const tableData = row.textContent.toLowerCase();
      row.classList.toggle('hide', tableData.indexOf(searchValue) < 0);
    });
  };

  return (
    <div className='t1'>

  
    <main className="table" id="customers_table">
      <section className="table__header">
        <h1>Connected Devices for IP: {ipAddress}</h1>
        <div className="input-group">
          <input type="search" placeholder="Search Data..." onChange={searchTable} />
          <span className="material-symbols-outlined">search</span>
        </div>
      </section>
     {connectedDevices.length > 0 && (
        <section className="table__body">
          <table>
            <thead>
              <tr>
                {Object.keys(connectedDevices[0]).filter(key => key !== '_id').map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {connectedDevices.map((dataItem, index) => (
                <tr key={index}>
                  {Object.entries(dataItem).filter(([key]) => key !== '_id').map(([key, value], subIndex) => (
                    <td key={subIndex} className="table-cell">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )} 
    </main>
    </div>   
  );
};

export default ConnectedDevicesPage;
