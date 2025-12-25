# API Documentation

## Overview

This module provides a small in-memory model for accounts and an interest calculation utility.

- Files: `input.ts`
- Exported APIs: `Account`, `calculateInterest`, `AccountService`, `AccountService.getAccount`, `AccountService.saveAccount`

---

## API List

- `Account` (interface)
- `calculateInterest(balance: number, rate: number): number` (function)
- `AccountService` (class)
  - `getAccount(id: string): Account | null`
  - `saveAccount(account: Account): void`

---

## Detailed Documentation

### Account

**Description**: Represents a user's account.

**Fields**:
- `id: string` — Unique account identifier.
- `balance: number` — Numeric account balance.

**Remarks**: This is a plain data interface; no runtime validation is performed by the interface itself.

**Example**:
```ts
const account: Account = { id: 'acct-1', balance: 1000 };
```

---

### calculateInterest(balance, rate)

**Description**: Calculates the interest amount for a given balance and rate.

**Parameters**:
- `balance: number` — Principal amount used to compute interest.
- `rate: number` — Interest rate as a multiplier (e.g., `0.05` for 5%).

**Returns**: `number` — The computed interest (`balance * rate`).

**Edge cases / Remarks**:
- The function does not perform input validation; callers should ensure both arguments are finite numbers.
- Negative balances or rates are accepted and will yield a result accordingly.

**Example**:
```ts
const interest = calculateInterest(1000, 0.05); // 50
```

---

### AccountService

**Description**: Service for managing `Account` objects in an in-memory store.

**Remarks**: Uses an internal `Map` keyed by account `id`. No persistence is implemented.

#### getAccount(id)

**Description**: Retrieves an account by its identifier.

**Parameters**:
- `id: string` — The account identifier to look up.

**Returns**: `Account | null` — The `Account` if found, otherwise `null`.

**Remarks**: Performs an in-memory lookup; no I/O is performed.

**Example**:
```ts
const svc = new AccountService();
const a = svc.getAccount('acct-1');
```

#### saveAccount(account)

**Description**: Saves or updates an account in the in-memory store.

**Parameters**:
- `account: Account` — The account to save. The `id` field is used as the key.

**Returns**: `void`

**Remarks**: If an account with the same `id` already exists, it will be overwritten.

**Example**:
```ts
const svc = new AccountService();
svc.saveAccount({ id: 'acct-1', balance: 500 });
```
