import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Classes from "./Classes";

function Receiver(props) {
  const [user, setUser] = useState("bhzfBvdgxZYrvKvDaXz5iaQzIjn1");
  const [clearedList, setClearedList] = useState(null);
  const [object, setObject] = useState(null);
  const [data, setData] = useState(null);

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
      const rootDirectory = `trees/users/${user}/`;
      const pathFilter = `trees/users/${user}/`;
      const docRef = doc(db, rootDirectory, "summary");

      onSnapshot(docRef, (doc) => {
        const cleaned = clean(doc.data(), pathFilter);

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

      return newObject;
    };
    if (user) {
      setObject(BuildObject(clearedList));
    }
  }, [clearedList, user]);
  useEffect(() => {
    if (object) {
      console.log(object);
      const projectsInfoGenerator = () => {
        if (object.root) {
          const projects = object.root.LWongWeb.PROJECTS;

          const base = { classes: [] };
          for (const project in projects) {
            const projectClass = {
              class: project,
              index: projects[project].index,
              projects: [],
            };

            if (projects[project].id !== undefined) {
              const inner = projects[project];

              for (const property in inner) {
                if (inner[property].id !== undefined) {
                  const innerObject = {
                    name: inner[property].name,
                    listInfo: inner[property].listInfo,
                    index: inner[property].index,
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

                  projectClass["projects"].push(innerObject);
                  projectClass["projects"].sort((a, b) => a.index - b.index);
                }
              }
              base.classes.push(projectClass);
            }
          }
          base.classes.sort((a, b) => a.index - b.index);

          return base;
        }
      };

      setData(projectsInfoGenerator());
    } else {
      console.log("no Object");
    }
  }, [object]);
  return (
    <div>
      <Classes dispId={props.dispId} data={data} />
    </div>
  );
}

export default Receiver;
