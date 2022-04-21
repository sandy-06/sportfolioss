
exports.getAbout = (req, res)=>{
    res.send('hello for get about')
}


exports.addAbout = (req, res)=>{
    res.send('hello for post router')
}

exports.getAboutId= (req, res)=>{
    res.send('hello from specific post router')
}

exports.updateAbout= (req, res)=>{
    res.send('hello from updated post router')
}

exports.deleteAbout= (req, res)=>{
    res.send('hello from updated delete router')
}