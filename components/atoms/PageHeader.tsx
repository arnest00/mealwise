type PageHeaderProps = {
  children: React.ReactNode,
};

const PageHeader = ({ children }: PageHeaderProps) => (
  <div className="cmp-page-header">
    {children}
  </div>
);

export default PageHeader;
