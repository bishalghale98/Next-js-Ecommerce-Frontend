"use client"

import React from "react";

function RootError({ error }) {
  return <div>{error.message}</div>;
}

export default RootError;
