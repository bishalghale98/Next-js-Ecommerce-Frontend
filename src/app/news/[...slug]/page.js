import React from "react";

const AllNewsPage = async ({ params, searchParams }) => {
  const { slug } = await params;
  const query = await searchParams;
  console.log(query);

  return (
    <div>
      AllNewsPage <h1 className="text-5xl">{slug[0]}</h1>
      <h2 className="text-3xl">{slug[1]}</h2>
      <h3 className="text-2xl">{slug[2]}</h3>
      <p>{query.level}</p>
    </div>
  );
};

export default AllNewsPage;
