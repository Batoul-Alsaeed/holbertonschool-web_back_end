#!/usr/bin/env python3
"""Module that defines task_wait_random function.
This function returns an asyncio.Task wrapping wait_random coroutine.
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Returns an asyncio.Task for wait_random with given max_delay.
    """
    return asyncio.create_task(wait_random(max_delay))
