import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Classes from "./Classes";

function Receiver() {
  const [user, setUser] = useState(null);
  const [clearedList, setClearedList] = useState(null);
  const [object, setObject] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  useEffect(() => {
    const clean = (object, pathFilter) => {
      const cleaned = {};
      for (const property in object) {
        const shortDirectory = property.replace(pathFilter, "");
        cleaned[shortDirectory] = object[property];
      }
      return cleaned;
    };
    if (user) {
      const rootDirectory = `trees/users/${user.uid}/`;
      const pathFilter = `trees/users/${user.uid}/`;
      const docRef = doc(db, rootDirectory, "summary");

      onSnapshot(docRef, (doc) => {
        // console.log(doc.data());
        const cleaned = clean(doc.data(), pathFilter);
        // console.log(cleaned);
        setClearedList(cleaned);
      });
    }
  }, [user]);
  useEffect(() => {
    const BuildObject = (listData) => {
      const newObject = {};
      for (const property in listData) {
        const pathArray = property.split("/").slice(1);

        var createNestedObject = (base, path, value) => {
          for (var i = 0; i < path.length; i++) {
            if (i === path.length - 1) {
              base[path[i]] = Object.assign(base[path[i]] || {}, value);
            } else {
              base =
                base[path[i]] =
                base[path[i]] =
                base[path[i]] =
                base[path[i]] =
                base[path[i]] =
                base[path[i]] =
                base[path[i]] =
                base[path[i]] =
                base[path[i]] =
                  base[path[i]] || {};
            }
          }
        };
        createNestedObject(newObject, pathArray, clearedList[property]);
      }
      // console.log(newObject);
      return newObject;
    };
    if (user) {
      setObject(BuildObject(clearedList));
    }
  }, [clearedList, user]);
  useEffect(() => {
    if (object) {
      const projectsInfoGenerator = () => {
        if (object.LWongWeb) {
          const projects = object.LWongWeb.PROJECTS;
          // console.log(projects);
          const base = { classes: [] };
          for (const project in projects) {
            const projectClass = {
              class: project,
              projects: [],
            };

            if (projects[project].id !== undefined) {
              // console.log("projects[project]", projects[project]);

              const inner = projects[project];

              for (const property in inner) {
                if (inner[property].id !== undefined) {
                  // console.log(property, inner[property]);
                  const innerObject = {
                    name: inner[property].name,
                    listInfo: inner[property].listInfo,
                    details: [
                      {
                        title: inner[property].title1,
                        text: inner[property].text1,
                      },
                      {
                        title: inner[property].title2,
                        text: inner[property].text2,
                      },
                      {
                        title: inner[property].title3,
                        text: inner[property].text3,
                      },
                    ],
                  };
                  const photos = [];
                  inner[property].images.forEach((url) => {
                    const photo = {
                      src: url,
                      width: 1.5,
                      height: 1,
                    };
                    photos.push(photo);
                  });
                  innerObject["photos"] = photos;

                  console.log("inner object", innerObject);

                  projectClass["projects"].push(innerObject);
                }
              }
              base.classes.push(projectClass);
            }
          }
          return base;
        }
      };
      console.log(projectsInfoGenerator());
      setData(projectsInfoGenerator());
    }
  }, [object]);
  return (
    <div>
      <Classes data={data} />
    </div>
  );
}

export default Receiver;
