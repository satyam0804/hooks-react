# React Hooks

- useState() : The react useState() allows us to track the state in a funtion component.

- useEffects() : This hook lets you perform side effects in the fucntional component. "Side effects are the component that can affect other components or can't be done during redering.

- useMemo() : useMemo() is used for caching a specific calculation or value.

- useCallback() : This hook is used to memoise the function, which can be help to optimize performance. If the function is a child component then everytime a parent change then the whole component re-render even if the child component not changed. In this case we wrap child component in useCallback() hook.

- useRef() : The useRef Hook allows you to persist values between renders.
