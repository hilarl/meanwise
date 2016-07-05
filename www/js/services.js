angular.module('starter.services', [])

.factory('Roles', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Web Developer',
    description: 'A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications, or distributed network applications that are run over HTTP from a web server to a web browser.',
    face: 'img/ben.png',
    color: "#7986CB"
  }, {
    id: 1,
    name: 'Software Engineer',
    description: 'A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of the software and systems that make computers or anything containing software work.',
    face: 'img/max.png',
    color: "#FF8A65"
  }, {
    id: 2,
    name: 'DevOps Admin',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    color: "#26C6DA"
  }, {
    id: 3,
    name: 'Full Stack Engineer',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    color: "#EC407A"
  }, {
    id: 5,
    name: 'Front End Engineer',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    color: "#26A69A"
  }, {
    id: 7,
    name: 'Tech Support',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    color: "#29B6F6"
  }, {
    id: 8,
    name: 'System Architect',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    color: "#ef5350"
  }, {
    id: 9,
    name: 'Server Admin',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    color: "#FFCA28"
  }, {
    id: 10,
    name: 'Full Stack Generalist',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    color: "#78909C"
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
