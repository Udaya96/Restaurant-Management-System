import menu from './menu.model'
export const create = (req, res) => {
  menu.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

 export const show = (req, res) =>
 menu.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

 export const index = (req, res) =>
  sendAllmenu(res);

 export const searchmenu = (req, res) => {
  console.log(req.query);
  menu.find( req.query, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const update = (req, res) => {
  menu.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
menu.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllmenu = (res) => {
    menu.find((er, Menu) => {
      if (!er) {
        res.send(Menu);
      } else {
        res.send(er);
      }
    })
  }