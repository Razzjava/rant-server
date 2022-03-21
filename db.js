const Database = require("@replit/database")
const db = new Database()


// get data - based on one key

const getData = (key)=>{	
db.get(key).then(value => {
	const data = JSON.parse(value)
	console.log(data)
});
}

//get all data
const getAllData = async () =>{
	try{
	const data = await db.getAll()
	return data 
	} catch (e){
		console.log(e)
	}
}



//set data
const setData = (key,data)=>{
	const newData = JSON.stringify(data)
	db.set(key, newData).then(() => {});

}

//update data

const updateData = (key, newData)=>{
	const data = JSON.stringify(newData)
	db.set(key, data).then(() => {});
}

//delete data

const deleteData = (key) =>{
	db.delete(key).then(() => {
		console.log('message deleted')
	});
}

// update likes

const updateLike = async (key, like) =>{
	const data = await db.get(key)
	const newData = JSON.parse(data)
	newData.likes = like
	const sendData = JSON.stringify(newData)
	db.set(key, sendData).then(() => {});

}

// update dislikes

const updateDislike = async (key, like) =>{
	const data = await db.get(key)
	const newData = JSON.parse(data)
	newData.likes = like
	const sendData = JSON.stringify(newData)
	db.set(key, sendData).then(() => {});

}

//saving reports

const saveReports = async(key, reports) =>{
	const data = await db.get(key)
	const newData = JSON.parse(data)
	newData.reports = reports
	const sendData = JSON.stringify(newData)
	db.set(key, sendData).then(() => {});

}


const dbFunctions = {
	getData,
	getAllData,
	setData,
	updateData,
	updateLike,
	updateDislike,
	deleteData,
	saveReports

	

}

module.exports = dbFunctions;