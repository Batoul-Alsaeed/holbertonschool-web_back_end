#!/usr/bin/env python3
""" Description: Run async_comprehension 4 times in parallel and measure
                 the total execution time.
"""

from asyncio import gather
from time import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Return the time it takes to run 4 async_comprehension calls in parallel"""
    first_time = time()
    await gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    next_time = time()

    return next_time - first_time
