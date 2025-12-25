# API Documentation

## Overview

This module provides interfaces and services for managing accounts, including interest calculation.

## API List

- Account (interface)
- calculateInterest (function)
- AccountService (class)
  - getAccount (method)
  - saveAccount (method)

## Detailed Documentation

### Account

Represents an account with an ID and balance.

**Properties:**

- `id: string` - The unique identifier for the account.
- `balance: number` - The current balance of the account.

### calculateInterest

Calculates the interest based on balance and rate.

**Parameters:**

- `balance: number` - The account balance.
- `rate: number` - The interest rate.

**Returns:** `number` - The calculated interest.

**Example:**

```typescript
const interest = calculateInterest(1000, 0.05); // 50
```

### AccountService

Service for managing accounts.

#### getAccount

Retrieves an account by ID.

**Parameters:**

- `id: string` - The account ID.

**Returns:** `Account | null` - The account or null if not found.

**Example:**

```typescript
const service = new AccountService();
const account = service.getAccount('123');
```

#### saveAccount

Saves an account.

**Parameters:**

- `account: Account` - The account to save.

**Example:**

```typescript
const service = new AccountService();
service.saveAccount({ id: '123', balance: 1000 });
```