exports.onNavigatingTo = function(args) {
    const page = args.object;
    const context = page.navigationContext;
  
    const detailLabel = page.getViewById("detail");
    detailLabel.text = context.name;

    const profileImage = page.getViewById("image");
    profileImage.src = context.profilePicture;

    const titleLabel = page.getViewById("title");
    titleLabel.text = context.title;
  };
  