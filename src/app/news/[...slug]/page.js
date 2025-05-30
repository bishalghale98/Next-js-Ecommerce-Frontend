import React from "react";

const AllNewsPage = async ({ params }) => {
  const { slug } = await params;

  console.log(slug);
  return (
    <div>
      AllNewsPage <h1 className="text-5xl">{slug[0]}</h1>
      <h2 className="text-3xl">{slug[1]}</h2>
      <h3 className="text-2xl">{slug[2]}</h3>
    </div>
  );
};

export default AllNewsPage;
