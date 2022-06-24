import React from "react";
import { useRouter } from "next/router";

const PhotoDetail = ({ photo }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <div>Photo Detail of Photo #{photo.id}</div>
      <p>title: {photo.title}</p>
      <p>url: {photo.url}</p>
    </>
  );
};

export default PhotoDetail;

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await response.json();
  const paths = data.map((photo) => {
    return {
      params: {
        photoId: `${photo.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params.photoId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      photo: data,
    },
  };
}
