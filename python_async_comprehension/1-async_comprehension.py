#!/usr/bin/env python3
"""Import async_generator and return a list of values using async comprehension."""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Return list of values yielded by async_generator."""
    return [value async for value in async_generator()]
