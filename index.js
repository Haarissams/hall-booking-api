const express = require('express');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(bodyParser.json()); 



app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
    res.send('A server is working good !');
  });



const PORT = 4000|| 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
