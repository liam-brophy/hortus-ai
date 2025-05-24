import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`p-6 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

const CardBody = ({ children, className = '' }: CardBodyProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`p-6 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
