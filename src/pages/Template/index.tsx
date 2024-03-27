import { ReactNode } from 'react';

interface IPageTemplateProps {
  children: ReactNode;
}

export const PageTemplate: React.FC<IPageTemplateProps> = ({ children }) => {
  return <div className="max-h-[100vh] overflow-hidden">{children}</div>;
};
