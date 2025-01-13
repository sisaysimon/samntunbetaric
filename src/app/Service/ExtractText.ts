
  
  function extractHTML(json) {
    let htmlContent = "";
  
    if (json.children && Array.isArray(json.children)) {
      json.children.forEach((child) => {
        if (child.type === "paragraph") {
          htmlContent += `<p className="text-base  mb-2">`;
          child.children.forEach((subChild) => {
            if (subChild.bold) {
              htmlContent += `<b className="font-bold text-lg text-red-400">${subChild.text}</b>`;
            } else if (subChild.text) {
              htmlContent += subChild.text;
            }
          });
          htmlContent += "</p>";
        } else if (child.type && child.type.startsWith("h")) {
          htmlContent += `<${child.type} className="text-${child.type} font-semibold text-red-700 mb-2">`;
          child.children.forEach((subChild) => {
            if (subChild.text) {
              htmlContent += subChild.text;
            }
          });
          htmlContent += `</${child.type}>`;
        } else if (child.type === "ul") {
          htmlContent += `<ul className="list-disc pl-5 mb-2 text-red-700">`;
          child.children.forEach((listItem) => {
            htmlContent += `<li className="text-base text-green-600">`;
            listItem.children.forEach((subChild) => {
              if (subChild.text) {
                htmlContent += subChild.text;
              }
            });
            htmlContent += `</li>`;
          });
          htmlContent += `</ul>`;
        } else if (child.type === "image") {
          htmlContent += `<img src="${child.url}" alt="${child.alt}" className="w-full h-auto rounded-lg mb-4" />`;
        } else if (child.type === "link") {
          child.children.forEach((subChild) => {
            if (subChild.text) {
              htmlContent += `<a href="${child.url}" className="text-blue-600 underline">${subChild.text}</a>`;
            }
          });
        }
      });
    }
  
    return htmlContent;
  }
  
  export default extractHTML
  