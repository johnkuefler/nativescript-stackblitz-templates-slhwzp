const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const frameModule = require("@nativescript/core/ui/frame");

exports.pageLoaded = async function(args) {
  const page = args.object;
  const listView = page.getViewById("myListView");

  //const userData = await axios.get('https://jsonplaceholder.typicode.com/users')

  const userData = [];

  listView.items = userData;
};

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
