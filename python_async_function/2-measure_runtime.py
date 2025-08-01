#!/usr/bin/env python3
"""Module that defines measure_time function.
This function measures the total execution time of wait_n
and returns the average time per execution.
"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the average execution time of wait_n over n runs.
    Returns total_time / n.
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total_time = end - start
    return total_time / n
