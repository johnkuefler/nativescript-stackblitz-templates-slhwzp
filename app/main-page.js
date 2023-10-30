const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const frameModule = require("@nativescript/core/ui/frame");

exports.pageLoaded = function(args) {
  const page = args.object;
  const listView = page.getViewById("myListView");

  const itemList = new ObservableArray([
    { name: 'Jim Bob', profilePicture: 'https://i.pravatar.cc/300', title: 'COO'},
    { name: 'Suzy Test', profilePicture: 'https://i.pravatar.cc/300', title: 'CIO' },
    { name: 'Charlie Brown', profilePicture: 'https://i.pravatar.cc/300', title: 'CEO' },
    { name: 'Linda Smith', profilePicture: 'https://i.pravatar.cc/300', title: 'CFO' },
    { name: 'Jim Bob', profilePicture: 'https://i.pravatar.cc/300', title: 'COO' },
    { name: 'Suzy Test', profilePicture: 'https://i.pravatar.cc/300', title: 'CIO' },
    { name: 'Charlie Brown', profilePicture: 'https://i.pravatar.cc/300', title: 'CEO' },
    { name: 'Linda Smith', profilePicture: 'https://i.pravatar.cc/300', title: 'CFO' },
    { name: 'Jim Bob', profilePicture: 'https://i.pravatar.cc/300', title: 'COO' },
    { name: 'Suzy Test', profilePicture: 'https://i.pravatar.cc/300', title: 'CIO' },
    { name: 'Charlie Brown', profilePicture: 'https://i.pravatar.cc/300', title: 'CEO' },
    { name: 'Linda Smith', profilePicture: 'https://i.pravatar.cc/300', title: 'CFO' },
    { name: 'Jim Bob', profilePicture: 'https://i.pravatar.cc/300', title: 'COO' },
    { name: 'Suzy Test', profilePicture: 'https://i.pravatar.cc/300', title: 'CIO' },
    { name: 'Charlie Brown', profilePicture: 'https://i.pravatar.cc/300', title: 'CEO' },
    { name: 'Linda Smith', profilePicture: 'https://i.pravatar.cc/300', title: 'CFO' },

    // ...
  ]);
  listView.items = itemList;
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
