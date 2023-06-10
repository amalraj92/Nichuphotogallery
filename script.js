function handleFileUpload(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const imageSrc = e.target.result;
      const imageAlt = file.name;

      addPhotoContainer(imageSrc, imageAlt);
    };

    reader.readAsDataURL(file);
  }
}

function addPhotoContainer(imageSrc, imageAlt) {
  const gallery = document.getElementById('gallery');

  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo-container');

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = imageAlt;

  photoContainer.appendChild(img);
  gallery.appendChild(photoContainer);
}
