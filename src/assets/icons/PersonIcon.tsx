import React from "react";

export interface PersonIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const PersonIcon: React.FC<PersonIconProps> = ({ className, ...props }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M9.00065 9.83335C11.334 9.83335 13.1673 8.00002 13.1673 5.75002V4.75002C13.1673 2.50002 11.334 0.666687 9.00065 0.666687C6.66732 0.666687 4.83398 2.50002 4.83398 4.75002V5.75002C4.83398 8.00002 6.66732 9.83335 9.00065 9.83335ZM6.50065 4.75002C6.50065 3.41669 7.58398 2.33335 9.00065 2.33335C10.4173 2.33335 11.5007 3.41669 11.5007 4.75002V5.75002C11.5007 7.08335 10.4173 8.16669 9.00065 8.16669C7.58398 8.16669 6.50065 7.08335 6.50065 5.75002V4.75002Z"
      fill="currentColor"
    />
    <path
      d="M14.0003 10.6667H4.00033C2.16699 10.6667 0.666992 12.1667 0.666992 14V17.3334H2.33366V14C2.33366 13.0834 3.08366 12.3334 4.00033 12.3334H14.0003C14.917 12.3334 15.667 13.0834 15.667 14V17.3334H17.3337V14C17.3337 12.1667 15.8337 10.6667 14.0003 10.6667Z"
      fill="currentColor"
    />
  </svg>
);

export default PersonIcon;