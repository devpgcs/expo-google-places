import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoGooglePlaces.web.ts
// and on native platforms to ExpoGooglePlaces.ts
import ExpoGooglePlacesModule from './ExpoGooglePlacesModule';
import ExpoGooglePlacesView from './ExpoGooglePlacesView';
import { ChangeEventPayload, ExpoGooglePlacesViewProps } from './ExpoGooglePlaces.types';

// Get the native constant value.
export const PI = ExpoGooglePlacesModule.PI;

export function hello(): string {
  return ExpoGooglePlacesModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoGooglePlacesModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoGooglePlacesModule ?? NativeModulesProxy.ExpoGooglePlaces);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoGooglePlacesView, ExpoGooglePlacesViewProps, ChangeEventPayload };
