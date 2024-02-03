import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('signin.ejs');
})
  
app.get('/signup', (req, res) => {
  res.render('signup.ejs')
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
})