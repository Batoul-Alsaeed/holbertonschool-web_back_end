#!/usr/bin/env python3
"""Module for annotated function to sum list of mixed numbers."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of a list of integers and floats."""
    return sum(mxd_lst)
