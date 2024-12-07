import React from 'react';

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200 400c110.457 0 200-89.543 200-200S310.457 0 200 0 0 89.543 0 200s89.543 200 200 200z"
        fill="none"
        stroke="currentColor"
        strokeWidth="40"
      />
      <path
        d="M130 280V160l70-40 70 40v120M130 160l140 0M200 120v160"
        fill="none"
        stroke="currentColor"
        strokeWidth="30"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}