// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  nameError.textContent = "";
  emailError.textContent = "";

  let valid = true;

  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  }
});

// Add Image to Gallery
function addImage() {
  const urlInput = document.getElementById("imageURL");
  const url = urlInput.value.trim();
  const gallery = document.getElementById("imageGallery");

  if (url !== "") {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = url;
    img.alt = "User added image";

    const btn = document.createElement("button");
    btn.textContent = "×";
    btn.className = "remove-btn";
    btn.onclick = () => item.remove();

    item.appendChild(img);
    item.appendChild(btn);
    gallery.appendChild(item);
    urlInput.value = "";
  }
}
