// deprecated: moved to lucide-react-native; kept to avoid accidental imports until fully removed
declare module 'react-native-vector-icons/MaterialIcons' {
  import { ComponentType } from 'react';
  import { TextProps } from 'react-native';
  const Icon: ComponentType<
    TextProps & { name?: string; size?: number; color?: string }
  >;
  export default Icon;
}

declare module 'react-native-vector-icons' {
  export * from 'react-native-vector-icons/MaterialIcons';
}
