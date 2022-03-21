const express = require('express')
const app = express();
const {
	getData,
	getAllData,
	setData,
	updateData,
	updateLike,
	updateDislike,
	deleteData,
	saveReports
	
} = require('./db.js')
const cors = require('cors')

const port = 3000;

//configuring cors

// const corsOptions = {
// 	origin: 'https://rant.razzjava.repl.co',
// }

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.get('/', (req,res)=>{
	res.send('Welcome to rant server, please read the README file by clicking on the code tab.')
})


// sending data to ui
app.get('/rants' ,async (req, res)=>{
	try{
 	const data = await getAllData()		
	 if(Object.keys(data).length > 0){
		 res.send(data)
	 } else{
		 res.status(204).send()
	 }
	} catch (e){
		console.log(e)
	}
	
 })

// saving rants
 app.post('/rants',(req,res)=>{
	 const {rant, id, likes, dislikes} = req.body
	
	res.status(204).send()
	const data = {rant, id,likes,dislikes}
	setData(id,data)
	
 })

//saving likes on post
app.post('/likes', (req,res)=>{
	const {like, id} = req.body
	res.status(204).send()
	updateLike(id, like)

})

// saving dislikes
app.post('/dislikes', (req,res)=>{
	const {dislike, id} = req.body
	res.status(204).send()
	updateDislike(id, dislike)
	
})

//saving reports 
app.post('/reports', (req,res)=>{
	const {reports, id} = req.body
	saveReports(id, reports)
	res.status(204).send()

})

// delete reports
app.post('/delete', (req,res)=>{
	const {id} = req.body
	deleteData(id)
	res.status(204).send()
})




app.listen(port, ()=>{
	console.log(`App is listening on port ${port}`)
})