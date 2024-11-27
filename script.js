// Words for typing effect
const words = ["Student", "UX/UI Designer", "Web Developer", "App Developer", "Creator"];
let index = 0;

const typedElement = document.getElementById("typing-effect");

function typeWord(word, callback) {
  typedElement.textContent = ""; // Clear current text
  let i = 0;

  const typingInterval = setInterval(() => {
    typedElement.textContent += word[i];
    i++;
    if (i === word.length) {
      clearInterval(typingInterval);
      if (callback) callback();
    }
  }, 150); // Type each letter every 150ms
}

function deleteWord(callback) {
  let i = typedElement.textContent.length;

  const deletingInterval = setInterval(() => {
    typedElement.textContent = typedElement.textContent.slice(0, i - 1);
    i--;
    if (i === 0) {
      clearInterval(deletingInterval);
      if (callback) callback();
    }
  }, 50); // Delete each letter every 50ms
}

function changeWord() {
  index = (index + 1) % words.length; // Cycle through words array
  typeWord(words[index], () => {
    setTimeout(() => {
      deleteWord(() => {
        setTimeout(changeWord, 1000); // Wait 1 second before changing to the next word
      });
    }, 2000); // Wait 2 seconds before starting to delete
  });
}

// Start the typing effect
typeWord(words[index], () => {
  setTimeout(() => {
    deleteWord(() => {
      setTimeout(changeWord, 1000); // Wait 1 second before starting the next cycle
    });
  }, 2000); // Wait 2 seconds before starting to delete
});

// Responsive Navbar Toggle
function toggleNavbar() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// Accessibility Panel and Features
document.addEventListener('DOMContentLoaded', () => {
  const accessibilityBtn = document.getElementById('accessibility-btn');
  const accessibilityPanel = document.getElementById('accessibility-panel');
  const closePanelBtn = document.getElementById('close-panel');

  // Accessibility Feature Buttons
  const features = {
    dyslexiaFont: () => {
      document.body.style.fontFamily = '"OpenDyslexic", Arial, sans-serif';
      alert("Dyslexia-friendly font activated!");
    },
    contrastMode: () => {
      document.body.style.filter = document.body.style.filter === 'contrast(1.5)' ? 'none' : 'contrast(1.5)';
      alert("High contrast mode toggled!");
    },
    screenReader: () => {
      alert("Screen reader mode activated!");
    },
    colorBlindMode: () => {
      document.body.style.filter = document.body.style.filter === 'grayscale(100%)' ? 'none' : 'grayscale(100%)';
      alert("Color blind mode toggled!");
    }
  };

  // Toggle off-canvas panel visibility
  accessibilityBtn.addEventListener('click', () => {
    accessibilityPanel.classList.toggle('active');
    accessibilityPanel.classList.toggle('hidden');
  });

  closePanelBtn.addEventListener('click', () => {
    accessibilityPanel.classList.add('hidden');
    accessibilityPanel.classList.remove('active');
  });

  // Add event listeners to buttons
  Object.keys(features).forEach(featureId => {
    const button = document.getElementById(featureId);
    if (button) button.addEventListener('click', features[featureId]);
  });
});