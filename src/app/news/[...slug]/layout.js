function layout({ children }) {
  return (
    <div>
      {children}

      <div className="my-5 bg-slate-900 py-5">
        <h2 className="text-2xl ">Related News</h2>
      </div>
    </div>
  );
}

export default layout;
