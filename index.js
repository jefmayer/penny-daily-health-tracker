/*MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		
		yield findDocuments(db, null)*/
	
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
		dbo.collection('daily').insertOne(doc, function(err, res) {
			if (err) throw err;
			console.log('Document inserted.');
			db.close();
		});*/
		/*db.close();
	}
});*/


const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

var MongoClient = require('mongodb').MongoClient,
		co = require('co'),
		assert = require('assert')
  
var url = process.env.MONGOLAB_URI

var find = function (db) {
  return co(function * () {
    // Get the documents collection
    const dbo = db.db('pennydata')
    const collection = dbo.collection('daily')
    const docs = yield collection.find({}).toArray()
    return docs
  })
}

express()
  .use(express.static(path.join(__dirname, 'public')))
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/getRecords', function(req, res) {
	  co(function * () {
		  const db = yield MongoClient.connect(url)
			// console.log('Connected successfully to server')
			res.end(JSON.stringify(yield find(db, null)))
		  db.close()
		}).catch(err => console.log(err))
	})
	.post('/addRecord', function(req, res) {
		console.log('Add record')
		
		co(function * () {
		  const db = yield MongoClient.connect(url)
		  var dbo = db.db('pennydata')
			var doc = {
				date: req.body.date,
				mobility: req.body.mobility,
				activity: req.body.activity,
				appetite: req.body.appetite,
				pain: req.body.pain,
				stress: req.body.stress,
				notes: req.body.notes
			}
			console.log(doc)
			console.log(dbo.collection('daily').updateOne(
				{ date: req.body.date },
				{ $set: doc },
				{ upsert: true }
			))
			db.close();
			
			/*dbo.collection('daily').update(doc, function(err, res) {
				if (err) throw err;
				console.log('Document inserted.');
				db.close();
			})*/
		}).catch(err => console.log(err))
	})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))