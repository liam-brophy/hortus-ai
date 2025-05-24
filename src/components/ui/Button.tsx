import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-lg focus:outline-none transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
