Why any is a Type Safety Hole and Why unknown is the Safer Alternative in TypeScript
Introduction

TypeScript improves JavaScript by adding static typing, helping developers catch errors before runtime. However, the any type weakens this safety system. It allows any operation without checks, which can lead to unexpected runtime errors. In contrast, unknown enforces validation through type narrowing, making it the safer and more reliable option.

Why any is Dangerous

When a variable is typed as any, TypeScript stops enforcing rules on it.

let data: any;

data = "hello";
data = 42;

data.toUpperCase();

Even though data is a number at runtime, TypeScript allows string operations. This makes any unsafe because it disables type checking completely.

Why unknown is Safer

The unknown type forces you to check the value before using it.

let data: unknown;

data = "hello";

To use it safely, we must narrow its type:
if (typeof data === "string") {
    console.log(data.toUpperCase());
}

What is Type Narrowing?

Type narrowing is the process of refining a broad type into a specific one using checks like:

typeof
instanceof
custom conditions

function process(value: unknown) {
    if (typeof value === "number") {
        return value * 2;
    }

    if (typeof value === "string") {
        return value.trim();
    }

    return null;
}

Conclusion
any removes type safety and should be avoided.
unknown enforces validation before usage.
Type narrowing ensures safe and predictable code

In modern TypeScript development, unknown is always the better choice for uncertain data.