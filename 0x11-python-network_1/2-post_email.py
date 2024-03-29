#!/usr/bin/python3
""" takes in a URL and an email, sends a POST request to the
passed URL with the email as a parameter, and displays the body
of the response (decoded in utf-8) """

if __name__ == "__main__":
    import urllib.request
    import urllib.parse
    from sys import argv

    url = argv[1]
    data = urllib.parse.urlencode({"email": argv[2]})
    data = data.encode('ascii')
    with urllib.request.urlopen(url, data) as resp:
        html = resp.read().decode('utf-8')
    print(html)
