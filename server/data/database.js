import data from './data.json';

class Friend {}

class Viewer {}

const viewer = new Viewer();
viewer.id = require('crypto').randomBytes(10).toString('hex').toString();
viewer.name = 'current-user';

const friends = data.map((obj) => {
  const friend = new Friend();

  friend.id = require('crypto').randomBytes(10).toString('hex').toString();
  friend.firstName = obj.firstName;
  friend.lastName = obj.lastName;
  friend.gender = obj.gender;
  friend.language = obj.language;
  friend.email = obj.email;
  friend.image = obj.image;
  friend.viewer = viewer;

  return friend;
});

viewer.friends = friends;

module.exports = {
  getFriend: (id) => {
    return friends.find((w) => w.id === id);
  },
  getViewer: () => viewer,
  getFriends: () => friends,
  updateFriend: (friend) => {
    const friendToUpdate = friends.find((w) => w.id === friend.id);

    if (!friendToUpdate) {
      return null;
    }

    friendToUpdate.firstName = friend.firstName;
    friendToUpdate.lastName = friend.lastName;
    friendToUpdate.gender = friend.gender;
    friendToUpdate.language = friend.language;
    friendToUpdate.email = friend.email;
    friendToUpdate.image = friend.image;
    friendToUpdate.viewer = viewer;

    return friendToUpdate;
  },
  Friend,
  Viewer,
};
