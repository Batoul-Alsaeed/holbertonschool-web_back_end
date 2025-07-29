#!/usr/bin/env python3
"""Module for annotating iterable of sequences with length."""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return list of tuples containing the element and its length."""
    return [(i, len(i)) for i in lst]
