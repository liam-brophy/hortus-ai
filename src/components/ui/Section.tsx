import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  bgColor?: string;
}

const Section = ({ 
  children, 
  className = '', 
  containerSize = 'lg',
  bgColor = 'bg-white'
}: SectionProps) => {
  return (
    <section className={`py-16 ${bgColor} ${className}`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
