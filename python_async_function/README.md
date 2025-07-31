# Python Async Project

This project introduces asynchronous programming in Python using `async`/`await` and the `asyncio` module.  
The goal is to learn how to execute coroutines concurrently and measure performance in an efficient way.

---

## Concepts Covered

- `async` and `await` syntax
- Running async functions with `asyncio.run()`
- Creating and managing asyncio `Tasks`
- Concurrent execution using `asyncio.as_completed`
- Measuring execution time with the `time` module
- Using `random.uniform` for async delays

---

## Files Overview

| File | Description |
|------|-------------|
| `0-basic_async_syntax.py` | Defines `wait_random`, a coroutine that waits for a random delay and returns it. |
| `1-concurrent_coroutines.py` | Defines `wait_n`, which runs multiple `wait_random` calls concurrently. |
| `2-measure_runtime.py` | Measures average runtime of concurrent async calls. |
| `3-tasks.py` | Returns an `asyncio.Task` wrapping `wait_random`. |
| `4-tasks.py` | Concurrently runs multiple `task_wait_random` and returns delays. |

---

## Key Takeaway

Asynchronous programming allows for efficient handling of concurrent tasks without blocking execution.  
This is especially useful when working with I/O-bound operations like networking, APIs, or timed delays.

---

## Requirements

- Python 3.9
- Follows `pycodestyle` (2.5)
- All files executable and end with a new line
- Each function and module is type-annotated and documented
