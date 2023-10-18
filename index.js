const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/',(req,res)=>{
  res.end(`
  <div>
    <nav>
      <ul>
        <li>
        <a href="/">home link</a>
        </li>
        <li>
        <a href="/about">about link</a>
        </li>
      </ul>
    </nav>
    <h1>Home page</h1>
  </div>
  `)
})

app.get('/about',(req,res)=>{
  res.end(`
  <div>
    <nav>
      <ul>
        <li><a href="/">home link</a></li>
        <li><a href="/about">about link</a></li>
      </ul>
    </nav>
    <h1>About page</h1>
  </div>
  `)
})

app.listen(PORT,()=>{
  console.log('server has been started...')
})