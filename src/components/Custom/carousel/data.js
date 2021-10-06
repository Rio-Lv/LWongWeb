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
      "https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/home_carousel%2F1.png?alt=media&token=138963a0-80f1-4352-84f7-900527670499",
      "0"
    ),
    comp(
      "https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/home_carousel%2Fhome_carousel_1000%2F2_1000x1000.png?alt=media&token=dab7b226-dcdb-4169-947a-f7fec4186932",
      "1"
    ),
    comp(
      "https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/home_carousel%2Fhome_carousel_1000%2F3_1000x1000.png?alt=media&token=843f4697-cf69-4069-9467-37977df64624",
      "2"
    ),
    comp(
      "https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/home_carousel%2Fhome_carousel_1000%2F4%20(1)_1000x1000.png?alt=media&token=d4145ebb-fe64-4722-9b8b-c5819de3db15",
      "3"
    ),
    comp(
      "https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/home_carousel%2Fhome_carousel_1000%2F4%20(2)_1000x1000.png?alt=media&token=2f2a2b89-73c5-452c-8558-cdc3e6540b63",
      "4"
    ),
    comp(
      "https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/home_carousel%2Fhome_carousel_1000%2F4%20(4)_1000x1000.png?alt=media&token=eff29639-27ff-4505-9b0d-9bf2d8b6cc70",
      "5"
    ),
  ],
};
