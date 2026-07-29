const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
};

// GET travel view
const travel = async (req, res) => {
  await fetch(tripsEndpoint, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      return response.json();
    })
    .then(json => {
      let message = null;

      if (!(json instanceof Array)) {
        message = 'API lookup error';
        json = [];
      } else if (!json.length) {
        message = 'No trips exist in our database!';
      }

      res.render('travlr', {
        title: 'Travlr Getaways',
        trips: json,
        message
      });
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
};

module.exports = {
  travel
};