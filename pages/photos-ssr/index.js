import React from "react";
import Link from "next/link";
import Image from "next/image";

const Photos = ({ photos }) => {
  return (
    <>
      <h1>
        list of photos Rendered by SSR (Server Side Regeneration) with data
      </h1>
      <hr />
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      <h2>Pros</h2>
      <li>Similar to SSG that pre-renders HTML + JSON but at request time</li>
      <li>Every page can be served updated data with user specific content</li>
      <h2>Cons</h2>
      <li></li>
      <h2>Use cases</h2>
      <li>
        social media or ecommerce sites where dynamic and personalized content
        with SEO is important
      </li>

      <hr />
      <h1>List of Photos</h1>

      {photos.map((photo) => {
        return (
          <>
            <a>
              photo#:{photo.id} | album: {photo.album}
            </a>
            {/* todo: fix album not defined 
            <Link href={`/photos-ssr/${album}`}> */}
            <p>title: {photo.title}</p>
            {/* </Link> */}

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

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/photos");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      photos: data,
    },
  };
}
