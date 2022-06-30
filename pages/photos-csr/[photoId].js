import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const PhotoDetail = () => {
  const router = useRouter();

  const { photoId } = router.query;
  console.log("router", router);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/photos");
      const data = await response.json();
      console.log("data-csr", data);
      setPhotos(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h2>loading...</h2>;
  }

  return (
    <>
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      {photos
        .filter((photo) => {
          console.log("photo", photo, "photoID", photoId);
          return Number(photoId) === photo.id;
        })
        .map((photo) => {
          return (
            <>
              <div>Photo Detail of Photo #{photo.id}</div>
              <p>title: {photo.title}</p>
              <p>url: {photo.url}</p>
            </>
          );
        })}
    </>
  );
};

export default PhotoDetail;
