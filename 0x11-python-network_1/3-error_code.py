#!/usr/bin/python3
""" takes in a URL, sends a request to the URL and
displays the body of the response (decoded in utf-8). """

if __name__ == "__main__":
    import urllib.request
    from sys import argv

    try:
        with urllib.request.urlopen(argv[1]) as resp:
            html = resp.read()
        print(html.decode())
    except urllib.error.HTTPError as e:
        print(f"Error code: {e.code}")
