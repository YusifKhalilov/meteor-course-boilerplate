import React from 'react';

import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <div className="page-content">
        Dashboard page content.
      </div>
    </div>
  );
};
