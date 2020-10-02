exports.test = (req, res, next) => {
  res.status(200).send({success:true})
}

exports.save = (req, res, next) => {
  console.log(req.body);
  
  res.status(200).send(req.body)
}