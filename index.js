const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = process.env.MONGOLAB_URI;

MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', url);
	
		// DB operations
		/*var dbo = db.db('pennydata');
		var doc = {
			date: "10/10/2018",
			mobility: 7,
			activity: 10,
			appetite: 4,
			pain: 4,
			stress: 9,
			notes: "She threw up at 8am, but possibly this was because of the salmon skin she'd had the night before. She ran down the front stairs to pee, galloped around the yard, and was eager to go for a walk. She peed inside before her afternoon walk, seemed to have a panic attack while going to poop, and was very anxious, taking the better part of an hour to calm down. She ate breakfast later (12pm) and dinner later (8:30pm)"
		};
		dbo.collection("daily").insertOne(doc, function(err, res) {
			if (err) throw err;
			console.log('Document inserted.');
			db.close();
		});*/
		db.close();
	}
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))