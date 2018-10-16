# ReactPdfPrinter
I am using [react-pdf](https://github.com/diegomura/react-pdf). I found 3 issues:
- The first issue is that the css that we can use it's a specific css for the library objects.
- The second issue is that for use some css properties we need to render the object in the server and not in the client. I couldn't change the font or make it bold.
- The last issue is that ReactPDF.render() should be a function but it's also only a function in the serverside.

I know that it is no a pretty way but it's working.
