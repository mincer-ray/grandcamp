import React from 'react';

const Alerts = ({ errors }) => {
  if (errors.responseJSON != undefined) {
    return (
      <ul className="alert group">
        { errors.responseJSON.map((error, i) =>
          <li key={ i }>{ error }</li>
        )}
      </ul>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Alerts;
