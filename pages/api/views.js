import db from "../../utils/firebase";

export default function handler(req, res) {
  return new Promise(async (resolve, reject) => {
    try {
      const { slug } = JSON.parse(req.body);
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

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      res.json({
        message: "Subscribed successfully",
        views: currentViews,
        ref,
      });
      resolve();
    } catch (e) {
      throw e;
    }
  }).catch((error) => {
    res.json(error);
    res.status(500).end();
  });
}
