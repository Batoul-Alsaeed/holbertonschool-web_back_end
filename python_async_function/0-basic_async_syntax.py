#!/usr/bin/env python3
"""Module that defines wait_random coroutine.
This coroutine waits for a random delay between 0 and max_delay
and returns the delay value.
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Waits for a random delay between 0 and max_delay (inclusive)
    and returns it."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
