const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'sample.db',
    define:{
        timestamps: false
    }
})


//tables definition
const StudentLogIn = sequelize.define('student_login', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: Sequelize.TEXT
})

const Professor = sequelize.define('professor', {
    email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
    },
    password: Sequelize.TEXT
})


const Student = sequelize.define('student', {
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    group:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

const Team = sequelize.define('team', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
})

const Project = sequelize.define('project', {
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    ddl1: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    ddl2: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    ddl3: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    grade: {  //final grade
        type: Sequelize.FLOAT
    }
})


const File = sequelize.define('file', {
    name:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

const Grade = sequelize.define('grade', {   
    grade: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})



sequelize.sync()
	.then(() => console.log('created'))
	.catch((error) => console.log(error))

const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
	try{
		await sequelize.sync({force : true})
		res.status(201).json({message : 'created'})
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})

//for student
app.get('/students', async (req, res) => {
    try {
        const students = await Student.findAll()
        res.status(200).json(students)
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.post('/students', async (req, res) => {
    try {
        const student = req.body
        await Student.create(student)
        res.status(200).json({message: 'created'})
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.get('/students/:id', async (req, res) => {
	try{
		const student = await Student.findByPk(req.params.id)
		if (student){
			res.status(200).json(student)
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})
app.put('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        if(student){
            await student.update(req.body, {
                fields: ['name', 'group']
            })
        res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.delete('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        if(student){
            await student.destroy()
            res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})

//for projects



app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.status(200).json(projects)
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.post('/projects', async (req, res) => {
    try {
        const project = req.body
        await Project.create(project)
        res.status(200).json({message: 'created'})
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.get('/projects/:id', async (req, res) => {
	try{
		const project = await Project.findByPk(req.params.id)
		if (project){
			res.status(200).json(project)
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})
app.put('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id)
        if(project){
            await student.update(req.body, {
                fields: ['name', 'ddl1', 'ddl2', 'ddl3', 'grade']
            })
        res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.delete('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id)
        if(project){
            await project.destroy()
            res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})

//for teams
app.get('/teams', async (req, res) => {
    try {
        const teams = await Team.findAll()
        res.status(200).json(teams)
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.post('/teams', async (req, res) => {
    try {
        const team = req.body
        await Team.create(team)
        res.status(200).json({message: 'created'})
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.get('/teams/:id', async (req, res) => {
	try{
		const team = await Team.findByPk(req.params.id)
		if (team){
			res.status(200).json(team)
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})
app.put('/teams/:id', async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id)
        if(team){
            await team.update(req.body, {
                fields: ['name']
            })
        res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.delete('/teams/:id', async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id)
        if(team){
            await team.destroy()
            res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})

//for file
app.get('/files', async (req, res) => {
    try {
        const files = await File.findAll()
        res.status(200).json(files)
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.post('/files', async (req, res) => {
    try {
        const file = req.body
        await File.create(file)
        res.status(200).json({message: 'created'})
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.get('/files/:id', async (req, res) => {
	try{
		const file = await File.findByPk(req.params.id)
		if (file){
			res.status(200).json(file)
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})
app.put('/files/:id', async (req, res) => {
    try {
        const file = await File.findByPk(req.params.id)
        if(file){
            await file.update(req.body, {
                fields: ['name']
            })
        res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.delete('/files/:id', async (req, res) => {
    try {
        const file = await File.findByPk(req.params.id)
        if(file){
            await file.destroy()
            res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})

//for grade
app.get('/grades', async (req, res) => {
    try {
        const grades = await Grade.findAll()
        res.status(200).json(grades)
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.post('/grades', async (req, res) => {
    try {
        const grade = req.body
        await Grade.create(grade)
        res.status(200).json({message: 'created'})
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.get('/grades/:id', async (req, res) => {
	try{
		const grade = await Grade.findByPk(req.params.id)
		if (grade){
			res.status(200).json(grade)
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})
app.put('/grades/:id', async (req, res) => {
    try {
        const grade = await Grade.findByPk(req.params.id)
        if(grade){
            await grade.update(req.body, {
                fields: ['grade']
            })
        res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})
app.delete('/grades/:id', async (req, res) => {
    try {
        const grade = await Grade.findByPk(req.params.id)
        if(grade){
            await grade.destroy()
            res.status(202).json({message:'accepted'})
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err){
        console.warn(err)
        res.status(500).json({message: 'some error occured'})
    }
})

app.get("/", function(req, res){
    res.send("Express here!")
})


app.listen(5051, function(){
    console.log("express server is running on port 5051");
})