import React from 'react';

interface SubscriptionProps {
  iconComponent: JSX.Element;
  name: string;
  price: string;
  benefits?: string[]; // Making benefits optional
}

const Subscription: React.FC<SubscriptionProps> = ({ iconComponent, name, price, benefits }) => {
  return (
    <div>
      {/* Render the iconComponent passed as prop */}
      {iconComponent}
      <h2>{name}</h2>
      <p>{price}</p>
      <ul>
        {/* Check if benefits exists and is an array before mapping */}
        {benefits && Array.isArray(benefits) ? (
          benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))
        ) : (
          // Render a message or placeholder if benefits is not available
          <li>No benefits available</li>
        )}
      </ul>
    </div>
  );
}

export default Subscription;
