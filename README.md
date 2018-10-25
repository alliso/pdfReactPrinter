# ReactPdfPrinter
I am using [react-pdf](https://github.com/diegomura/react-pdf) and [html2canvas](https://github.com/niklasvh/html2canvas). 

I found 3 issues in react-pdf:
- The first issue is that the css that we can use it's a specific css for the library objects.
- The second issue is that for use some css properties we need to render the object in the server and not in the client. I couldn't change the font or make it bold.
- The last issue is that ReactPDF.render() should be a function but it's also only a function in the serverside.

I am using html2canvas to render some components as images in the pdf. I found 1 issue:
- The issue is that it is not rendering all the component. I have read that sometimes it has problems rendering css and in other webs I read that it doesn't have enough time to render all the item. I am trying to solve this but I didn't found the solution yet.


I am supposing that the component that we are going to export is in the same page as the export button. Something like this maybe: 

![alt text](./src/objects/exportPDF.png)

