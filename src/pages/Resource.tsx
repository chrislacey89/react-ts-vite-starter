import React from 'react';
import { useParams } from 'react-router-dom';

function Resource() {
  const { resourceId } = useParams<{ resourceId?: string }>();
  return (
    <div>
      <h1>Resource: {resourceId}</h1>
    </div>
  );
}

export default Resource;
