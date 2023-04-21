# Word-File-Counter
A web tool where you can upload a plain text file, to get a JSON with the count of each word.
To use it you have to accest to this URL: [https://javierribaldelrio.github.io/Word-File-Counter/](https://javierribaldelrio.github.io/Word-File-Counter/)

## Installation

You can download the source code with the following command:

```bash
$ git clone https://github.com/JavierRibaldelRio/Word-File-Counter.git
```


## License

Word File Counter is under Mit License, see [LICENSE](LICENSE) for more details 

## JSON Example

From *Lorem ipsum* text

```json
{
    "totalWords": 278,
    "diferentWords": 152,
    "characters": 1986,
    "count": [
        {
            "word": "lacus",
            "count": 5
        },
        {
            "word": "at",
            "count": 4
        },
        {
            "word": "mi",
            "count": 4
        },
        {
            "word": "phasellus",
            "count": 4
        },
        ...
    ]
}
```