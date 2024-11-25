# LabInsights - Monitoring Lab PCs for Practical Exams

**LabInsights** is an application designed to monitor lab PCs during practical exams to detect and prevent students from using USB drives to copy programs, ensuring a fair and secure examination environment.

---

## How It Works

1. **Detection**: LabInsights actively monitors lab PCs to detect any unauthorized USB drive connections during exams.
2. **Prevention**: Once a USB drive is detected, the application logs the event and optionally disables further access to the device.
3. **Alerting**: Admins or invigilators are notified in real-time about the breach, ensuring immediate action can be taken.
4. **Lab Monitoring**: Invigilators or administrators can monitor all PCs in the lab from a centralized dashboard and view logs for USB activity.
5. **Log Analysis**: Generates detailed reports with timestamps for USB activity, helping in post-exam evaluations.

---

## Features

- **Real-Time Monitoring**: Continuously monitors USB device activity across all connected lab PCs.
- **Event Logging**: Maintains a detailed log of all USB activity, including timestamps and device details.
- **Alert System**: Sends notifications or alerts to invigilators when a USB drive is connected.
- **Cross-Platform Support**: Works seamlessly on major operating systems.
- **Customizable Policies**: Configure rules to block specific devices or whitelist trusted USB drives.

---

## Why Use LabInsights?

Many schools and colleges face challenges in maintaining exam integrity during practical exams. USB drives are often used by students to copy and transfer programs, which can lead to unfair practices. LabInsights provides a proactive solution by detecting USB connections in real-time, alerting invigilators, and ensuring that exams are conducted fairly. This system is especially effective in:

- Monitoring large-scale computer labs.
- Preventing the misuse of external storage devices.
- Maintaining detailed logs for better analysis and reporting.

---

## Tech Stack

- **Backend**: Python (Flask) for handling monitoring logic and server-side operations.
- **Frontend**: React for an intuitive admin dashboard to view logs and manage alerts.
- **Database**: MongoDB for storing logs and configuration details.
- **Tools**: Python libraries (e.g., `pyudev`, `os`, `psutil`) for hardware monitoring.

---

## Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/labinsight.git
   cd labinsight
   ```

2. Install dependencies for backend and frontend
   ```
   cd server
   npm install
   cd ../client
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the backend directory and add:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server
   ```
   cd server
   nodemon server.js
   ```

5. Start the frontend application
   ```
   cd client
   npm start
   ```

The application should now be running on `http://localhost:3000`

## Usage

## Usage

1. **Install the application** and set up the necessary environment.
2. **Log in** with your credentials (ensure you have access to the lab exam system).
3. **Start monitoring** lab computers by running the monitoring tool on each machine.
4. The system will automatically **detect secondary devices** (like USB drives) connected to the PC during the exam.
5. **View the list of detected devices** in real-time to monitor suspicious activities.
6. In case of unauthorized devices, **receive instant alerts** for further action.
7. **Report incidents** directly from the application for investigation and further action.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Demo

[labinsight.com](https://demo.com/)

