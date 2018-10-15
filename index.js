const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000

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
		}).catch(err => console.log(err))
	})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))