import express from "express";
import mongoose from "mongoose";
const app=express();
app.use(express.json())
const mongoURI='mongodb://0.0.0.0:27017/blogs'
mongoose.connect(mongoURI);

const db = mongoose.connection;        

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const blogSchema = new mongoose.Schema({
  id: [{}],
  blogTitle:String,
  blogContent:String,
  authorId:String
});

const Blog = mongoose.model('blog', blogSchema);

app.get('/getAllBlogs', async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/blogs/insert', async (req, res) => {
    try {
        const {id,blogTitle,blogContent,authorId}=req.body
        let saved;
        if (req.body) {
            const newblog=new Blog({id,blogContent,blogTitle,authorId})
            saved=await newNote.save();
        }
      res.json(saved);
    } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

