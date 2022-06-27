import React from "react";
import Image from "next/image";
import Photo from "../../components/Photo";
import Link from "next/link";

const Photos = ({ photos }) => {
  return (
    <>
      <h1>
        list of photos Rendered by On Demand ISR(On Demand Incremental Static
        Regeneration) with data
      </h1>
      <hr />
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      <h2>Pros</h2>
      <li>Same as ISR but better</li>
      <li>Allow to update static pages after build time per page level</li>

      <h2>Cons</h2>
      <li>build time increases along with pages</li>
      <li>
        having stale data and changes will require rebuild for the entire app
      </li>
      <h2>Use cases</h2>
      <li></li>

      <hr />
      <h1>List of Photos</h1>

      {photos.map((photo) => {
        return (
          <>
            <Link href={`/photos-on-demand-isr/${photo.id}`}>
              <p>title: {photo.title}</p>
            </Link>
            <br />
            {/* <Image
              alt={photo.title}
              src={photo.url}
              width={500}
              height={500}
              layout="fill"
            /> */}
          </>
        );
      })}
    </>
  );
};

export default Photos;

export async function getStaticProps() {
  console.log("updating photo info");
  const response = await fetch("http:localhost:4000/photos");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      photos: data,
    },
  };
}
