type Predicate<Type> = (value: unknown) => value is Type;

export default function not<Type>(predicate: Predicate<Type>): <Value>(value: Value) => value is Exclude<Value, Type>;
