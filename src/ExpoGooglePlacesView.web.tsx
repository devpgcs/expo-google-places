import * as React from 'react';

import { ExpoGooglePlacesViewProps } from './ExpoGooglePlaces.types';

export default function ExpoGooglePlacesView(props: ExpoGooglePlacesViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
