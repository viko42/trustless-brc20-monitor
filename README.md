
# Token Price Monitoring - AI Generated project

This project enables monitoring of BRC-20 tokens for price changes and sends alerts via WhatsApp. It fetches token price data from contracts and compares the prices at different intervals to detect significant drops in real-time or over a one-hour period.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/viko42/token-price-monitoring.git
   ```

2. Install the dependencies:

   ```bash
   cd token-price-monitoring
   npm install
   ```

## Usage

1. Set up your WhatsApp alert service by providing the necessary credentials in the `.env.example` file.

2. Rename the file `.env.example` into `.env`.

3. Update the token contracts and their respective alert configurations in the `contracts.js` file.

4. Start the monitoring process:

   ```bash
   npm start
   ```

   This will start monitoring the specified tokens and send WhatsApp alerts when significant price drops are detected.

## Configuration

The project provides configuration options to customize the monitoring behavior. Below are the key files and their purposes:

- `alert.js`: Configure the WhatsApp alert service by providing credentials or configuration.

- `contracts.js`: Define the token contracts to monitor and their alert configurations.

- `fetchTransactions.js`: Implement the logic for fetching token price contracts.

Feel free to modify these files according to your specific requirements.

```
```
