#!/usr/bin/env python3
"""Module for function returning a multiplier function."""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by the given multiplier."""
    def multiplier_func(value: float) -> float:
        return value * multiplier

    return multiplier_func
