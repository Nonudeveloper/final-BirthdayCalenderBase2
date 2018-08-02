import { observable, action } from 'mobx';
import api from '../api';

class birthdayStore {

  @observable users = [];
  @observable isLoadingUsers = false;

  @action loadUsers(username) {
    api.birthday.get(username)
      .then(action((users) => (this.users = users)))
  }

  @action AddUser(username) {
    api.birthday.post(username)
      .then(action((user) => (this.users.push(user))))
  }

  @action editUser(user) {
    api.birthday.put(user)
      .then(action((users) => (this.users = this.users.map(u=>u.id==user.id ? user : u))))
  }

  @action deleteUser(userId) {
    api.birthday.del(userId)
      .then(action((users) => (this.users = this.users.filter(u=>u.id!==userId))))
  }

}
export default new birthdayStore();