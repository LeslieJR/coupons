# Coupons API

 REST API using Node and Express and React App with Chartjs that feeds from the API

## Features

- Retrieve statistical data

## Getting Started

### Prerequisites

Ensure you have the following tools installed:
- Node.js (v18)
- npm (v9)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/LeslieJR/coupons.git
   ```
2. Navigate to the directory:
   ```bash
   cd coupons/server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## Endpoints

### **GET /coupons**

## Examples

### Fetch statistics for all type of promotions:

```bash
curl -X GET 'http://localhost:8080/api/coupons'
```

### Fetch statistics for a specific type of promotions:

```bash
curl -X GET 'http://localhost:8080/api/couponsByType/:type'
```

### Fetch statistics for a specific retailer:

```bash
curl -X GET 'http://localhost:8080/api/couponsByRetailer/:retailer'
```

## Error Handling

Errors are returned in the following format:

```json
{
   "status": "error",
   "message": "Description of what went wrong"
}
```