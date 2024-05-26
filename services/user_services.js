const userList = [
  {id:1, name: 'Oleg', email: '123@gmail.com', password: 123},
  {id:2, name: 'stranger', email: 'hmm@gmail.com', password: 'something'},
  {id:3, name: 'Andrii', email: 'sofa@gmail.com', password: 'ILoveNodeJS'},
]

function getAllUserList() {
  return [...userList]
}

module.exports = {
  getAllUserList
}
