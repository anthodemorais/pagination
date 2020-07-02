const express = require('express'),
      router = express.Router()
let { Film } = require('../database')

router.get('/', (request, response) => {

    let page = parseInt(request.query.page);
    let limit = parseInt(request.query.limit);
    let order = request.query.order;

    page = page ? page : 1
    limit = limit ? limit : 20
    order = order ? order : "id"
    
    Film.findAndCountAll({
        limit: limit,
        offset: (page-1) * limit,
        order: [order]
    })
    .then(result => {
        count = result.count
        response.render('film', {
            films: result.rows,
            count: result.count,
            limit: limit,
            order: order
        });
    })
    .catch(err => { response.send(err) })
    .finally(err => response.status(404))
})

module.exports = router
