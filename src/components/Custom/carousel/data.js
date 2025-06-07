import Comp from "./Comp";

const comp = (url, text) => {
  return (
    <div>
      <Comp url={url} text={text} />
    </div>
  );
};
export const data = {
  images: [
    comp(
      "https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/trees%2Fusers%2FbhzfBvdgxZYrvKvDaXz5iaQzIjn1%2Froot%2FLWongWeb%2FPROJECTS%2FPUBLIC%20BUILDINGS%2FPRESIDENTIAL%20OFFICE%20BUILDING%2FPRESIDENTIAL%20OFFICE%20BUILDING_e086d563-fe61-4b4e-8252-e302b7f9d14f?alt=media&token=63f0441b-3dea-4167-aaee-9926dc859c06",
      "PRESIDENTIAL BUILDING"
    ),
    comp(
      "https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/trees%2Fusers%2FbhzfBvdgxZYrvKvDaXz5iaQzIjn1%2Froot%2FLWongWeb%2FPROJECTS%2FAIRPORTS%2FMAPUTO%20INTERNATIONAL%20AIRPORT%2FMAPUTO%20INTERNATIONAL%20AIRPORT_3c58c0d2-feb5-473c-8078-e98dec6dbaac?alt=media&token=bf1faeeb-9ed7-40dd-8e64-ff6a22d2cf8c",
      "VILANKULO AIRPORT"
    ),
    comp(
      "https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/trees%2Fusers%2FbhzfBvdgxZYrvKvDaXz5iaQzIjn1%2Froot%2FLWongWeb%2FPROJECTS%2FOFFICES%2FJIANGXI%2FJIANGXI_e1129b25-f20c-4f72-a816-236bd9fe7633?alt=media&token=7e5336fb-b7ba-41e0-8c48-e788cd8c03a6",
      "JIANGXI OFFICES"
    ),
  ],
};
