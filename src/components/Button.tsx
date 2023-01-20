import React from 'react';

export default function Button(config: {
    type: 'success' | 'error' | 'warning' | 'info';
    size: 'small' | 'medium' | 'large';
    text: string;
}) {
    return <div className="btn">{config.text}</div>;
}
