if (Mongo.ready()) createLwd();
if (Mongo.ready()) window.onload = renderLwd;

window.mobile = screen.width < 800;
var allTags;
const categoriesOrder = {
  artist: 1,
  copyright: 2,
  character: 3,
  species: 4,
  general: 5,
  unknown: 6,
  lore: 7,
  meta: 8,
  invalid: 9,
};
const ratings = ["general", "sensitive", "questionable", "explicit"];

async function createLwd() {
  // lastSearch = undefined;
  // deleteMode = false;
  // sortBy = LwdHashRouter.get("sortBy");
  // sortDirection = LwdHashRouter.get("sortDirection");
  // ratingFilter = "";
  // imageList = [];
  allTags = JSON.parse(localStorage.getItem("allTags")) || [];
  // watchlists = [];
  // formatedTags = JSON.parse(localStorage.getItem("formatedTags"));

  // autocompleteTags = allTags.map((tag) => ({
  //   textContent: tag.name,
  //   className: tag.category,
  // }));
}

async function renderLwd() {
  document.body.outerHTML = "<body></body>";

  window.snackbar = new LwdSnackbar();
  document.body.append((sideSection = createSideSection()));
  document.body.append((topSection = createTopSection()));

  pagesDefinitions = [
    { href: "galery", onCreate: createGaleryPage, onRender: renderGaleryPage },
    {
      href: "external_search",
      onCreate: createExternalSearchPage,
      onRender: renderExternalSearchPage,
    },
    // { href: "manage/tags", onCreate: () => {}, onRender: renderTagManagement },
    // { href: "watchlist", onCreate: () => {}, onRender: renderWatchlistPage },
    {
      href: "settings",
      onCreate: createSettingsPage,
      onRender: renderSettingsPage,
    },
  ];
  // LwdHashRouter.createPages(pagesDefinitions, (params) => new LwdPage(params));

  LwdHashRouter.createPages(pagesDefinitions);
}

function findImage(imageId) {
  imageIndex = imageList.findIndex((image) => image._id == imageId);

  return { ...imageList[imageIndex], index: imageIndex };
}

function applyAlias(tagList) {
  loopTagsToApplyAlias = (tags, aliases) => {
    matchAlias = (aliases, tag) =>
      aliases.find(({ from }) => from == tag)?.to || tag;

    return tags
      .reduce((acc, tag) => [...acc, matchAlias(aliases, tag)], [])
      .flat()
      .uniq()
      .sort();
  };

  return fetchAPI("aliases", {}).then(({ documents: aliases }) =>
    loopTagsToApplyAlias(tagList, aliases)
  );
}
