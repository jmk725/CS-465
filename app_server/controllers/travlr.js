/* GET home page */
const travel = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    travel
};
