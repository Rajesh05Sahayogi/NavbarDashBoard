import React from 'react';

function Button({ label, variant }) {
  const baseClasses = "gap-2.5 self-stretch p-2 rounded-md";
  const variantClasses = variant === 'primary' ? "bg-blue-600" : "bg-blue-300";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {label}
    </button>
  );
}

export default Button;