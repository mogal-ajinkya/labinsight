import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './processDetails.css';
import { backendurl } from '../../../constant';

const ProcessDetailsPage = () => {
  const { ipAddress } = useParams();
  const [processDetails, setProcessDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState({ field: '', ascending: true });

  useEffect(() => {
    const fetchProcessDetails = async () => {
      try {
        const response = await fetch(`http://${backendurl}/process_details/${ipAddress}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProcessDetails(data || []);
      } catch (error) {
        console.error("Error fetching process details:", error);
      }
    };

    fetchProcessDetails();

    // Cleanup function
    const timerId = setInterval(fetchProcessDetails, 10000);
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

  const handleSortBy = (field) => {
    if (field === sortBy.field) {
      setSortBy({ ...sortBy, ascending: !sortBy.ascending });
    } else {
      setSortBy({ field, ascending: true });
    }
  };

  const sortedData = [...processDetails].sort((a, b) => {
    const factor = sortBy.ascending ? 1 : -1;
    if (sortBy.field === 'CPU Percent' || sortBy.field === 'Memory Usage (MB)') {
      return factor * (parseFloat(a[sortBy.field]) - parseFloat(b[sortBy.field]));
    }
    return 0;
  });

  return (
    <div className='t1'>
      <main className="table" id="customers_table">
        <section className="table__header">
          <h1>Process Details for IP: {ipAddress}</h1>
          <div className="input-group">
            <input type="search" placeholder="Search Data..." onChange={searchTable} />
            <span className="material-symbols-outlined">search</span>
          </div>
        </section>
        {processDetails.length > 0 && (
          <section className="table__body">
            <table>
              <thead>
                <tr>
                  {Object.keys(processDetails[0]).filter(key => key !== '_id').map((key, index) => (
                    <th key={index}>
                      {key}
                      {(key === "CPU Percent" || key === "Memory Usage (MB)") && (
                        <span
                          className="icon-arrow"
                          onClick={() => handleSortBy(key)}
                          style={{ cursor: 'pointer' }}
                        >
                          {sortBy.field === key ? (sortBy.ascending ? '↑' : '↓') : '↓'}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.map((dataItem, index) => (
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

export default ProcessDetailsPage;
