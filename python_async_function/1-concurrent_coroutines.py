#!/usr/bin/env python3
"""Module that defines wait_n coroutine.
This coroutine runs wait_random concurrently n times and
returns a list of the delays in order of completion.
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute wait_random n times concurrently with max_delay,
    return list of delays in the order they complete.
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)
    return delays
