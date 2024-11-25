import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import SummaryCards from "./components/dashboard/summarycards/summaryCards";
import NetworkDetailsPage from "./components/dashboard/network_details/networkDetails";
import ProcessDetailsPage from "./components/dashboard/processDetails/processDetails";
import ConnectedDevicesPage from "./components/dashboard/connectedDevices.jsx/connectedDevices";
import Home from "./components/home/home";
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Login from "./components/login/login";
import { backendurl } from "./constant";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

 
//  useEffect(() => {
//   const fetchConnectedDevices = () => {
//     fetch('/connected_devices')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response; // Parse JSON response here
//       })
//       .then(data => {
//         console.log('Response data:', data); // Log the response data

//         if (data.message === 'Secondary device detected') {
//           console.log(`Secondary device detected on IP address ${data.ipAddress}`);
//         } else {
//           console.log('No secondary device detected');
//         }
//       })
//       .catch(error => console.error('Error fetching connected devices:', error));
//   };

//   fetchConnectedDevices();

//   // Set a timer to fetch connected devices every 60 seconds
//   const timerId = setInterval(fetchConnectedDevices, 60000);

//   // Clean up function to clear the timer when the component unmounts
//   return () => clearInterval(timerId);
// }, []);


// const [alertMessage, setAlertMessage] = useState('');

  // useEffect(() => {
  //   const fetchConnectedDevices = async () => {
  //     try {
  //       // Make a POST request to the backend endpoint
  //       const response = await axios.post('/connected_devices', formData);
  //       console.log(response);
  //       // Check the response for secondary device detection
  //       if (response.data.message === 'Secondary device detected') {
  //         // Display an alert if a secondary device is detected
  //         // setAlertMessage('Secondary device is detected');
  //         alert('Secondary device is detected');
  //       } else {
  //         // No secondary device detected
  //         // setAlertMessage('No secondary device detected');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching connected devices:', error);
  //       // setAlertMessage('Error fetching connected devices');
  //       alert('Error fetching connected devices');
  //     }
  //   };

  //   // Call the function to fetch connected devices on component mount
  //   fetchConnectedDevices();

  //   // Set a timer to fetch connected devices every 60 seconds
  //   const timerId = setInterval(fetchConnectedDevices, 60000);

  //   // Clean up function to clear the timer when the component unmounts
  //   return () => clearInterval(timerId);
  // }, []);

  useEffect(() => {
    const fetchConnectedDevices = () => {
      // Make a GET request to the backend API endpoint
      fetch(`http://${backendurl}/check_secondary_device`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Check if secondary devices are detected
          if (data.message === "Secondary devices detected") {
            // Display toast popup for each IP address
            data.secondaryDevicesIPs.forEach(ip => {
              toast.success(`Secondary device detected on IP address ${ip}`);
            });
          } else {
            // No secondary devices detected
            console.log("No secondary devices detected");
          }
        })
        .catch(error => {
          // Handle errors
          console.error('There was a problem with the fetch operation:', error);
        });
    };
  
    fetchConnectedDevices();
  
    // Set a timer to fetch connected devices every 7 seconds
    const timerId = setInterval(fetchConnectedDevices, 7000);
  
    // Clean up function to clear the timer when the component unmounts
    return () => clearInterval(timerId);
  }, []);
  
  
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login/>} />
          <Route element={<BaseLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/summarycards/:ipAddress" element={<SummaryCards />} />
            <Route path="/network-details/:ipAddress" element={<NetworkDetailsPage />} />
            <Route path="/process-details/:ipAddress" element={<ProcessDetailsPage />} />
            <Route path="/connected-devices/:ipAddress" element={<ConnectedDevicesPage />} />
            
          </Route>
        </Routes>

        {/* <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button> */}
      </Router>
    </>
  );
}

export default App;
