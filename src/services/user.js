import firebase from 'firebase'

const get = (id, callback) => {
  firebase.database()
    .ref(`user/${id}`)
    .once('value', (snapshot) => {
      callback(snapshot.val())
    })
}

const set = (id, data) => {
  return firebase.database().ref(`user/${id}`).set(data)
}

const list = (callback) => {
  firebase.database().ref('user')
  .on('value', (snapshots) => {
    const result = []
    snapshots.forEach((snapshot) => {
      const user = snapshot.val()
      user.$id = snapshot.key
      result.push(user)
    })
    console.log(result)
    callback(result)
  })
}

const subscribe = (id, callback) => {
  firebase.database()
    .ref(`user/${id}`)
    .on('value', (snapshot) => {
      callback(snapshot.val())
    })
}

export default {
  get,
  set,
  subscribe,
  list
}
