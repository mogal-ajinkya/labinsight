import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext, useEffect, useRef, useState,} from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { MdReadMore } from "react-icons/md";
import {backendurl} from "../../../constant";

import { Link } from "react-router-dom";

const AreaTop = () => {
  const [ipCollections, setIpCollections] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(`http://${backendurl}/ips`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
      
        setIpCollections(data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    const intervalId = setInterval(fetchCollections, 1000); // Fetch data every 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [setIpCollections]);

  const filteredIPs = ipCollections.filter((ip) =>
  ip && ip.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <h1 className="area-top-title">Lab Devices</h1>
        <div className="search">
          <span class="material-symbols-outlined">search</span>
          <input
          type="text"
          className="searchip"
          placeholder="Search IP Address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        
        
        {/* <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="searchip"
          placeholder="Search IP Address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
      </div>
      <div>
        <ul class="list">
          {/* {console.log(ipCollections)} */}
          {Array.isArray(ipCollections) && filteredIPs.filter(ip => ip).map((ip,index) => (
        <li className="list-item">
        <div key={index} className="listinside">
          <div
              class="content">
              IP: {ip}
          </div>
          <Link className="moreicon"  to={{
                pathname: `/summarycards/${ip}`,
              }}>
            <MdReadMore style={{ fontSize: '2em' }}/>
          </Link>
          
        </div>
        </li>
      ))
      }
        </ul>
      </div>
    </section>
  );
};

export default AreaTop;
