import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  button?: ReactNode;
  className?: string;
}
export const SectionHeader = ({
  title,
  subtitle,
  button,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={`flex justify-between items-center mb-6 ${className}`}>
      <div>
        <h2 className="text-2xl font-bold text-dark-gray">{title}</h2>
        <span>{subtitle}</span>
      </div>
      {button}
    </div>
  );
};
