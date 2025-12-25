# API Reference — input.ts

## Overview
This module provides a minimal in-memory account model and utilities:

- `Account` — interface describing an account record.
- `calculateInterest(balance, rate)` — utility to compute interest amount.
- `AccountService` — an in-memory repository for storing and retrieving `Account` objects.

All APIs are synchronous and operate in-process (no persistence).

## API List
- Account (interface)
- calculateInterest(balance: number, rate: number): number
- AccountService (class)
  - getAccount(id: string): Account | null
  - saveAccount(account: Account): void

## Detailed documentation

### Account
- Type: interface
- Description: Represents a basic account record held in memory.
- Properties:
  - `id: string` — unique identifier for the account.
  - `balance: number` — current balance; may be negative.
- Example:

  const a: Account = { id: 'acct-1', balance: 100.0 };

### calculateInterest(balance: number, rate: number): number
- Description: Calculate the interest amount using simple multiplication: `balance * rate`.
- Parameters:
  - `balance` — principal amount to calculate interest on.
  - `rate` — interest rate as a decimal (e.g. `0.05` for 5%).
- Returns: number — interest amount (raw product; no rounding).
- Notes / edge cases:
  - Returns negative values if `balance` or `rate` is negative.
  - Returns `NaN` if either argument is not a finite number.
  - The function performs no validation and throws no exceptions.
- Example:

  calculateInterest(1000, 0.05) // 50

### AccountService
- Description: In-memory repository for `Account` objects. Data is stored in a Map keyed by `account.id` and is not persisted outside the running process.
- Methods:
  - getAccount(id: string): Account | null
    - Description: Retrieve the account with the given `id`.
    - Returns: the `Account` if found; otherwise `null`.
    - Edge cases: No validation on `id`; empty string is accepted as a key.
    - Example: `service.getAccount('acct-1')`

  - saveAccount(account: Account): void
    - Description: Store or replace the provided `Account` in memory using `account.id` as the key.
    - Side effects: Overwrites any existing account with the same `id`.
    - Validation: None — caller must ensure `account` is valid.
    - Example: `service.saveAccount({ id: 'acct-1', balance: 200 })`

## Evidence & citations
All public APIs were scanned in `input.ts`.
- `Account` — lines 3–6
- `calculateInterest` — lines 8–10
- `AccountService` — lines 12–22 (methods at lines 15–17 and 19–21)

