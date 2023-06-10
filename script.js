const fileUpload = document.getElementById('file-upload');
const photoGrid = document.getElementById('photo-grid');

fileUpload.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageSrc = e.target.result;
      const imageAlt = file.name;

      addPhoto(imageSrc, imageAlt);
    };

    reader.readAsDataURL(file);
  }
}

function addPhoto(imageSrc, imageAlt) {
  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo-container');

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = imageAlt;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

  deleteButton.addEventListener('click', function () {
    photoContainer.remove();
  });

  photoContainer.appendChild(img);
  photoContainer.appendChild(deleteButton);
  photoGrid.appendChild(photoContainer);
}
