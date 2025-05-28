# Commission Calculator App

## Overview
The Commission Calculator App is a web application designed to help users calculate commissions based on various roles and performance metrics. It integrates with Firebase for data storage and retrieval, providing a seamless experience for managing commission calculations.

## Project Structure
```
commission-calculator-app
├── public
│   ├── index.html        # Main HTML structure of the application
│   ├── style.css         # CSS styles for the application
│   └── script.js         # JavaScript code for handling calculations and Firebase integration
├── firebase.json         # Firebase configuration file
├── vercel.json           # Vercel configuration file
└── README.md             # Documentation for the project
```

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- Firebase account and project set up
- Vercel account for deployment

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd commission-calculator-app
   ```

2. Install dependencies (if any):
   ```
   npm install
   ```

3. Configure Firebase:
   - Update the `firebase.json` file with your Firebase project settings.
   - Ensure that your Firebase project is set up for hosting.

4. Configure Vercel:
   - Update the `vercel.json` file with your deployment settings and environment variables.

### Running the Application
To run the application locally, open the `public/index.html` file in your web browser.

### Deployment
- Deploy the application to Firebase using:
  ```
  firebase deploy
  ```

- Deploy the application to Vercel using:
  ```
  vercel
  ```

## Usage
- Open the application in your web browser.
- Select a role and input the necessary data to calculate commissions.
- Save profiles and settings as needed.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.