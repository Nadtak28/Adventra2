const ContentContainer = ({ children }) => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      {children}
    </div>
  );
};

export default ContentContainer;