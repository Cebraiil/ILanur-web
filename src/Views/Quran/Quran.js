import Chapters from "./Chapters";
import React from "react";
import useFetch from "../../Other/useFetch";
import Test from "./Test";

function Quran() {

  const { error, isPending, data: chapters } = useFetch('http://api.alquran.cloud/v1/surah')

  return (
    <div className="">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { chapters && <Chapters chapters={chapters} /> }
    </div>
  );

}

export default Quran;
