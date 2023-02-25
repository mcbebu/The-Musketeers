var productCode = document.getElementById("product-code");
var productName = document.getElementById("product-name");

function generateCode() {
    const productName = document.getElementById("product-name").value;
    const productCode = generateProductCode(productName);
    document.getElementById("product-code").textContent = `Product Code: ${productCode}`;
  }
  
  function getInitials(productName) {
    const words = productName.split(" ");
    let initials = "";
    words.forEach(word => {
      initials += word[0];
    });
    return initials;
  }
  
  function generateProductCode(productName) {
    const prefix = "PRD";
      const suffix = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
      const initials = getInitials(productName).toUpperCase();
      const code = `${prefix}${initials}${suffix}`;
    return code;
  }