document.getElementById('shipmentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('/create-shipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => response.json())
    .then(data => {
      alert('Shipment created successfully! Tracking Number: ' + data.trackingNumber);
      this.reset();
    })
    .catch(error => {
      console.error('Error creating shipment:', error);
      alert('Failed to create shipment. Please try again.');
    });
  });      
      
      
      // Server-side code (app.js)
      import express from 'express';
      import { json } from 'body-parser';
      import { createConnection } from 'mysql';
      const app = express();
      
      app.use(json());
      
      // Replace with your actual database configuration
      const db = createConnection({
        host: 'localhost',
        user: 'sierral1_user',
        password: '16@Kehinde123',
        database: 'sierral1_db',
      });
      
      db.connect((err) => {
        if (err) throw err;
        console.log('Connected to the database');
      });
      
      // Create a new shipment
      app.post('/create-shipment', (req, res) => {
        const { senderAddress, recipientAddress, packageContents, totalAmount } = req.body;
      
        // Generate a tracking number (simplified example, you can use a more complex logic)
        const trackingNumber = generateTrackingNumber();
      
        const shipment = {
          senderAddress,
          recipientAddress,
          packageContents,
          totalAmount,
          trackingNumber,
        };
      
        // Save shipment data to the database
        db.query('INSERT INTO shipments SET ?', shipment, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to create shipment' });
          }
      
          res.json({ trackingNumber }); // Send the tracking number back to the client
        });
      });
      
      // Function to generate a tracking number (simplified example)
      function generateTrackingNumber() {
        return 'TN' + Date.now(); // This is a simple example; use a more complex generation logic in practice
      }
      
      const port = process.env.PORT || 3000;
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
      