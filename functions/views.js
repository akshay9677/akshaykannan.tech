const db = require("./helpers/firebase.init");
exports.handler = async (event, context, callback) => {
  const { slug } = JSON.parse(event.body);
  const ref = db.collection("views").doc(slug);

  let doc = await ref.get();
  let currentViews;
  if (doc.exists) {
    let { views } = doc.data();
    currentViews = views + 1;
    ref.update({ views: currentViews });
  } else {
    currentViews = 1;
    ref.set({ views: 1 });
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      views: currentViews,
    }),
  });
};
