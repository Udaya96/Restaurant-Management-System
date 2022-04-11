import admin from './model'

export const create = (req, res) => {
    admin.create(req.body, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }