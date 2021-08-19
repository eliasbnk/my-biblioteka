import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

export const LoadingScreen = () => {
  return (
    <Dimmer active inverted>
      <Loader active inline='centered' size='large'>
        Loading...
      </Loader>
    </Dimmer>
  );
};
