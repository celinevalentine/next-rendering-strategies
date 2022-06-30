import React, { useState, useEffect } from "react";
import Link from "next/link";

const Photos = () => {
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
      <h1>
        list of photos Rendered by CSR(Client Side Regeneration) with data
      </h1>
      <hr />
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      <h2>Pros</h2>
      <li>Highly personalized</li>
      <li>Allow to update static pages after build time per page level</li>

      <h2>Cons</h2>
      <li>cannot pre-render pages</li>
      <li> Bad for SEO</li>
      <h2>Use cases</h2>
      <li>user dashboard page</li>

      <hr />
      <h1>List of Photos</h1>

      {photos.map((photo) => {
        return (
          <>
            <Link href={`photos-csr/${photo.id}`}>
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
