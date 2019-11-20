const findAll = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query('select * from pendencias', (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

const findById = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query('select * from pendencias where id = ' + id, (err, results) => {
      if (err) {
        reject(err)
      } else {
        if (results.length > 0) {
          resolve(results[0])
        } else {
          resolve({})
        }
      }
    })
  })
}

const deleteOne = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query('delete from pendencias where id = ' + id + ' limit 1', (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

const create = (connection, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`
      insert into pendencias (ul, local, responsavel, termo, bens, descricao) 
      values ('${data.ul}','${data.local}','${data.responsavel}','${data.termo}','${data.bens}','${data.descricao}')
      `, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

const update = (connection, id, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`
      update pendencias set 
        ul='${data.ul}',
        local='${data.local}',
        responsavel='${data.responsavel}', 
        termo='${data.termo}',
        bens='${data.bens}',
        descricao='${data.descricao}' 
      where id=${id}`,
      (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
  })
}

module.exports = {
  findAll,
  findById,
  deleteOne,
  create,
  update
}