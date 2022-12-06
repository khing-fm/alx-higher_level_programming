#!/usr/bin/pyhton3


def no_c(my_string):
    copy_str = [x for x in my_string if x != 'c' or x != 'c']
    return ("".join(copy_str))
