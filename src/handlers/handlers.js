const handlers = {};

handlers.renderIndex = (req, res) => {
	res.render('index');
};

module.exports = handlers;
