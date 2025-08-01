#!/usr/bin/env python3
"""Module that defines task_wait_n coroutine.
This coroutine runs task_wait_random concurrently n times and
returns a list of delays ordered by completion time.
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Run task_wait_random n times concurrently with max_delay,
    and return list of delays in the order of completion.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
