const button = document.getElementById('download-button');

button.addEventListener('mouseover', () => {
  button.style.transform = 'scale(1.1)';
  button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});

button.addEventListener('mouseout', () => {
  button.style.transform = 'scale(1)';
  button.style.boxShadow = 'none';
});

button.addEventListener('click', () => {
  button.style.transform = 'scale(0.9)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 150);
});


//Donwload//

document.addEventListener('DOMContentLoaded', () => {
  // Caminho do arquivo e nome para download
  const filePath = 'https://raw.githubusercontent.com/alvaro5801/site.sd/main/projeto.SD.mp4' // Link de download direto
  const fileName = 'Video.mp4';

  // Seleciona o botão pelo ID
  const button = document.getElementById('download-button');

  if (button) {
      // Adiciona um único evento ao botão
      button.addEventListener('click', (event) => {
          event.preventDefault(); // Impede o comportamento padrão do botão

          // Iniciar o download automaticamente
          console.log('Iniciando download:', fileName);
          const link = document.createElement('a');
          link.href = filePath;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);  // Remove o link após o download
      });
  } else {
      console.error('Botão não encontrado no DOM!');
  }
});
