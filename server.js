let app = require('express')()


app.get('/a', async (req,res)=>{
    await setTimeout(function(){},500)
    await setTimeout(function(){},500)
    await setTimeout(function(){},500)
    res.send('all timeouts resolved in a')
})
app.get('/b', async(req,res)=>{
    let a =  setTimeout(function(){},500)
    let b =  setTimeout(function(){},500)
    let c =  setTimeout(function(){},500)
    await Promise.all([a,b,c])
    res.send('all timeouts resolved in b');
})

app.listen(8080, () => {
    console.log("server listening on 8080")
})