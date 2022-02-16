import Express from "express";
import "dotenv/config";
import firebaseConfig from "../config/firebaseConfig";
import { initializeApp } from "firebase/app";
import { DocumentData, getFirestore, doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const routes = Express.Router();
initializeApp(firebaseConfig);
const db = getFirestore();

routes.get("/getProjects", (req, res) => {
  getDocs(collection(db, "projectDetails"))
    .then((querySnapshort) => {
      const projectsData: DocumentData[] = [];
      querySnapshort.forEach((doc) => {
        projectsData.push(doc.data());
      });
      return res.send(projectsData);
    })
    .catch((e) => {
      return res.send(e);
    });
});

routes.get("/recentProjects", (req, res) => {
  getDocs(collection(db, "recentProjectDetails"))
    .then((querySnapshort) => {
      const recentProjectsData: DocumentData[] = [];
      querySnapshort.forEach((doc) => {
        recentProjectsData.push(doc.data());
      });
      return res.status(200).send(recentProjectsData);
    })
    .catch((e) => {
      return res.status(500).send(e);
    });
});

routes.get("/projectDetails/:projectId", async (req, res) => {
  const projectId = req.params.projectId;
  const docRef = doc(db, "projectDetails", projectId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    res.status(200).json(docSnap.data());
  } else {
    res.status(404).send("No Data Found");
  }
});

export default routes;
