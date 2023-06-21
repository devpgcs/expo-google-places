import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoGooglePlacesViewProps } from './ExpoGooglePlaces.types';

const NativeView: React.ComponentType<ExpoGooglePlacesViewProps> =
  requireNativeViewManager('ExpoGooglePlaces');

export default function ExpoGooglePlacesView(props: ExpoGooglePlacesViewProps) {
  return <NativeView {...props} />;
}
