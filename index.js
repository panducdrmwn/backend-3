const express = require('express')

const app = express();

app.get('/project3', (req, res) => {
    res.status(200).json({
        success: true,
        data:{
            message:'projeckt3'
        }
    })
})

const PORT = 3002;

app.listen(PORT, ()=>console.log('jalan no goh'));