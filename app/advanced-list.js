const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const frameModule = require("@nativescript/core/ui/frame");

exports.pageLoaded = async function(args) {
  const page = args.object;
  const listView = page.getViewById("myListView");


  let userData = await getUserData();

  console.log(userData);

  listView.items = userData;
};

async function getUserData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await response.json();
  
  data.forEach(user => {
    let [firstName, lastName] = user.name.split(' ');
    user.initials = `${firstName[0]}${lastName[0]}`;
  });

  let colors = ['background-color:blue', 'background-color:orange','background-color:green','background-color:red','background-color:yellow']

  data.forEach(user => {
    user.squareColor = colors[Math.floor(Math.random() * colors.length)];
  });

  return data;
}

exports.onItemTap = function(args) {
  const listView = args.object;
  const index = args.index;
  const tappedItem = listView.items.getItem(index);

  frameModule.Frame.topmost().navigate({
    moduleName: "detail-page",
    context: tappedItem,
    animated: true
  });
};
