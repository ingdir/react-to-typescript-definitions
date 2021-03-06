/// <reference types="react" />
declare module 'component' {
  export interface ComponentProps {
    text: string;
    className?: string;
  }

  export default function Component(props: ComponentProps): JSX.Element;
}
