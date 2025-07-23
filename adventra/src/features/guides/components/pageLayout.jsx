const PageLayout = ({ children }) => {
  return (
    <div className="bg-white px-10 md:px-40 py-5 flex justify-center">
      <div className="flex flex-col w-full max-w-screen-xl">{children}</div>
    </div>
  );
};
export default PageLayout;
