# API Documentation

## Overview

This module provides banking account management functionality, including account representation, interest calculation, and account service operations.

---

## API List

1. **Account** (Interface)
2. **calculateInterest()** (Function)
3. **AccountService** (Class)
   - `getAccount()` (Method)
   - `saveAccount()` (Method)

---

## Detailed API Documentation

### 1. Account (Interface)

**Description:**  
Represents a bank account with a unique identifier and balance.

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier for the account |
| `balance` | `number` | The current account balance in currency units |

**Example:**

```typescript
const account: Account = {
  id: 'ACC-001',
  balance: 5000
};
```

---

### 2. calculateInterest()

**Description:**  
Calculates interest on a given balance based on the provided rate. This is a pure function with no side effects.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `balance` | `number` | The principal balance on which to calculate interest |
| `rate` | `number` | The interest rate as a decimal (e.g., 0.05 for 5%) |

**Return Type:** `number`

**Return Description:**  
The calculated interest amount. Formula: `balance * rate`

**Example:**

```typescript
const principal = 1000;
const annualRate = 0.05;
const interest = calculateInterest(principal, annualRate);
console.log(interest); // Output: 50
```

---

### 3. AccountService (Class)

**Description:**  
Service for managing bank accounts. Provides methods to retrieve and persist account information. Uses an internal Map for in-memory storage.

**Constructor:**  
Default constructor initializes an empty accounts Map.

#### 3.1 getAccount()

**Description:**  
Retrieves an account by its unique identifier. Returns null if no account exists with the given id.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | `string` | The unique identifier of the account to retrieve |

**Return Type:** `Account | null`

**Return Description:**  
The account object if found, `null` if no account exists with the given id.

**Example:**

```typescript
const service = new AccountService();
const account = service.getAccount('ACC-001');

if (account) {
  console.log(`Account Balance: ${account.balance}`);
} else {
  console.log('Account not found');
}
```

#### 3.2 saveAccount()

**Description:**  
Saves or updates an account in the service. If an account with the same id already exists, it will be overwritten with the new account data.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `account` | `Account` | The account object to save or update |

**Return Type:** `void`

**Example:**

```typescript
const service = new AccountService();

const newAccount: Account = {
  id: 'ACC-002',
  balance: 2500
};

service.saveAccount(newAccount);

// To update an existing account:
const updatedAccount: Account = {
  id: 'ACC-002',
  balance: 3000  // Updated balance
};

service.saveAccount(updatedAccount);
```

---

## Summary

All exported APIs have been documented with JSDoc comments and this markdown file. The documentation covers:
- ✅ Interface structure and property descriptions
- ✅ Function parameters and return values
- ✅ Class purpose and method behaviors
- ✅ Usage examples for practical implementation
- ✅ Edge cases and null-safety considerations
