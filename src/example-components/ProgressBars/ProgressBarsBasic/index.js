import React, { Fragment } from 'react';

import { LinearProgress } from '@material-ui/core';

export default function LivePreviewExample() {
  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (completed > 100) {
        setCompleted(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setCompleted(completed + diff);
        setBuffer(completed + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    function tick() {
      progress.current();
    }
    const timer = setInterval(tick, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Fragment>
      <LinearProgress value={25} className="mb-3" />
      <LinearProgress variant="determinate" value={45} className="mb-3" />
      <div className="divider mb-3" />
      <LinearProgress value={25} color="secondary" className="mb-3" />
      <LinearProgress
        variant="determinate"
        color="secondary"
        value={45}
        className="mb-4"
      />
      <div className="divider mb-4" />
      <LinearProgress
        variant="buffer"
        value={completed}
        valueBuffer={buffer}
        className="mb-3"
      />
      <LinearProgress
        variant="buffer"
        value={completed}
        valueBuffer={buffer}
        className="mb-4"
        color="secondary"
      />
      <div className="divider mb-4" />
      <LinearProgress variant="query" className="mb-3" />
      <LinearProgress variant="query" className="mb-3" color="secondary" />
    </Fragment>
  );
}
