import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './networkDetails.css';
import Modal from './modal'; // Import your modal component here
import { backendurl } from '../../../constant';

const NetworkDetailsPage = () => {
  const { ipAddress } = useParams();
  const [networkDetails, setNetworkDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const fetchNetworkDetails = async () => {
      try {
        const response = await fetch(`http://${backendurl}/network_details/${ipAddress}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setNetworkDetails(data || []);
      } catch (error) {
        console.error("Error fetching network details:", error);
      }
    };

    fetchNetworkDetails();
    
    const timerId = setInterval(fetchNetworkDetails,10000);
    // Clean up function to clear the timer when the component unmounts
  return () => clearInterval(timerId);
    // return () => {
    //   // Perform cleanup if needed
    // };
  }, []);
 

  const searchTable = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const tableData = row.textContent.toLowerCase();
      row.classList.toggle('hide', tableData.indexOf(searchValue) < 0);
    });
  };

  const filterByDate = () => {
    const filteredData = networkDetails.filter(data => {
      const timestamp = new Date(data.timestamp);
      return timestamp >= new Date(startDate) && timestamp <= new Date(endDate);
    });
    setNetworkDetails(filteredData);
    setIsOpen(false); // Close the modal after filtering
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}:${(date.getSeconds() < 10 ? '0' : '') + date.getSeconds()}`;
    return `${formattedDate}, ${formattedTime}`;
  };

  return (
    <div className='t1'>
      <main className="table" id="customers_table">
        <section className="table__header">
          <h1>Network Details for IP: {ipAddress}</h1>
          <div className="input-group">
            <input type="search" placeholder="Search Data..." onChange={searchTable} />
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="date-filter">
            {/* <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} /> */}
            <button className="fil" onClick={() => setIsOpen(true)}>Filter by Timestamp</button> {/* Open the modal */}
          </div>
        </section>
        {networkDetails.length > 0 && (
          <section className="table__body">
            <table>
              <thead>
                <tr>
                  {Object.keys(networkDetails[0]).filter(key => key !== '_id').map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {networkDetails.map((dataItem, index) => (
                  <tr key={index}>
                    {Object.entries(dataItem).filter(([key]) => key !== '_id').map(([key, value], subIndex) => (
                      <td key={subIndex} className="table-cell">{key === 'timestamp' ? formatDate(value) : value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
      {/* Render the modal only when isOpen is true */}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} onSubmit={filterByDate}>
          <div className="modal-content1">
            
            <h2>Filter by Timestamp</h2>
            <div>
              <label>Start Timestamp: </label>
              <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <br />
              <br />
              <label>End Timestamp:</label>
              <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              <br />
            </div>
            <button onClick={filterByDate}>Apply Filter</button>
          </div>
        </Modal>
      )}
    </div> 
  );
};

export default NetworkDetailsPage;
