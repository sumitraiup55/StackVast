# StackVast

A full-stack trading platform clone with separate backend, dashboard, and frontend applications.

## Features
- User authentication and authorization
- Real-time trading dashboard
- Portfolio and holdings management
- Order placement and tracking
- Responsive landing and marketing pages

## Project Structure
- **backend/**: Node.js/Express API server
- **dashboard/**: React dashboard for user analytics
- **frontend/**: React landing and marketing pages

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/stackvast.git
   cd stackvast
   ```
2. Install dependencies for each app:
   ```sh
   cd backend && npm install
   cd ../dashboard && npm install
   cd ../frontend && npm install
   ```
3. Copy `.env.example` to `.env` in `backend/` and fill in your environment variables.

### Running Locally
- **Backend**:
  ```sh
  cd backend
  npm start
  ```
- **Dashboard**:
  ```sh
  cd dashboard
  npm start
  ```
- **Frontend**:
  ```sh
  cd frontend
  npm start
  ```

## Environment Variables
See `backend/.env.example` for required variables.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

## License
See `LICENSE` file for details.

## Contact
For questions or support, please open an issue on the GitHub repository.
