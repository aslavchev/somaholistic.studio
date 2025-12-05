/**
 * SOMA Studio - Logo Component
 *
 * Centralized logo styling for consistent branding across Header and Footer.
 * FAANG-level design with circular container, clean white background, and proper shadow depth.
 */

import logo from "@/assets/Logo_Soma.svg";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-10 h-10 p-2',
  md: 'w-14 h-14 p-3',
  lg: 'w-16 h-16 p-3.5'
};

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  return (
    <div
      className={`rounded-full bg-white shadow-md flex items-center justify-center ${sizeClasses[size]} ${className}`}
      data-testid="logo-container"
    >
      <img
        src={logo}
        alt="SOMA STUDIO"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
