document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  // Flag to determine whether typing is allowed
  let typingAllowed = false;

  // Function to simulate typing animation
  function typeText(element, text, speed, callback) {
    let index = 0;

    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        // Typing is done, allow user input
        typingAllowed = true;
        if (callback) callback();
      }
    }

    type();
  }

  // Call the function to simulate typing after a 10-second delay
  const helpMessageElement = document.getElementById("output");
  const helpMessage = "Type help to get the list of all commands.\n \n";
  const typingSpeed = 60;
  const delayTime = 4000;

  // Delay the execution by 10 seconds
  setTimeout(() => {
    typeText(helpMessageElement, helpMessage, typingSpeed, () => {
      // Allow user input after typing is done
      typingAllowed = true;
      // Enable the input field
      input.disabled = false;
    });
  }, delayTime);

  input.disabled = true;
  // Disable the input field initially
  const projectsDictionary = {
    1: {
      name: "TODO app (Flutter)",
      link: "https://github.com/Pujan-Dev/Todo-app",
    },
    2: {
      name: "Timmer (HTML, CSS, JS)",
      link: "https://github.com/Pujan-Dev/Timmer_javascript",
    },
    3: {
      name: "Calculator (HTML, CSS, JS)",
      link: "https://github.com/Pujan-Dev/Calculator",
    },
    4: {
      name: "Move mouse cursor with eye (Python)",
      link: "https://github.com/Pujan-Dev/move-mouse-with-python-",
    },
    5: {
      name: "Youtube Video Downloader (Python)",
      link: "https://github.com/Pujan-Dev/youtubevideodownloader",
    },
  };

  input.addEventListener("keyup", function (event) {
    if (typingAllowed && event.key === "Enter") {
      handleCommand(input.value);
      input.value = "";
      return;
    }
  });
  document.addEventListener("click", function () {
    // If typing is allowed, focus on the input field
    if (typingAllowed) {
      input.focus();
    }
  });

  function handleCommand(command) {
    command = command.trim();
    const response = executeCommand(command);
    output.innerHTML += `$ ${command}\n${response}\n`;
    output.scrollTop = output.scrollHeight;
  }
  function intro() {
    return (
      "\nHey there! 🌟 I'm" +
      ' <label class="RED">Pujan Neupane</label>' +
      ",the 18-year-old " +
      '<label class="GREEN" >tech enthusiast</label>' +
      " from the vibrant landscapes of " +
      '<label class="Turquoise">Nepal</label>' +
      ". 🏔️ I'm on a wild ride, juggling my roles as a " +
      '<label class="BLUE"> computer engineering </label>' +
      "student, coding wizard, and gaming aficionado! 🎮💻\n \nPicture this: I'm not just deciphering lines of code; I'm on a quest to conquer the digital realm" +
      '<label class="GOLD"> one algorithm at a time.</label>' +
      " 🚀 When I'm not in the virtual trenches, you can find me navigating the twists and turns of my academic journey, armed with a backpack full of textbooks and " +
      '<label class="PURPLE">a determined spirit.</label>' +
      " 📚👩‍💻\n \nBut wait, there's more—I'm not your typical student. I've got a secret life as a gaming maestro, navigating pixelated worlds and conquering epic quests. 🧙‍♂️🎮 So buckle up, because my life is a rollercoaster of circuits," +
      '<label class="TEAL"> caffeine-fueled </label>' +
      "coding sessions, and epic gaming victories! 🚀✨\n"
    );
  }
  function projects() {
    return (
      "Use the GOTO command with the number of the project to go to a specific project link.\n" +
      "1. TODO app (Flutter)\n" +
      "2. Timmer (HTML, CSS, JS)\n" +
      "3. Calculator (HTML, CSS, JS)\n" +
      "4. Move mouse cursor with eye (Python)\n" +
      "5. Youtube Video Downloader (Python)\n"
    );
  }
  function skills() {
    return (
      "\nMy Skills:\n" +
      "\n HTML : " +
      '<label id="html_skill" style="color: #FFA07A;">85</label> %' +
      "\n CSS : " +
      '<label id="css_skill" style="color: #7FFF00;">70</label> %' +
      "\n Python : " +
      '<label id="python_skill" style="color: #9370DB;">60</label> %' +
      "\n JavaScript : " +
      '<label id="js_skill" style="color: #20B2AA;">50</label> %' +
      "\n Godot Script : " +
      '<label id="godot_skill" style="color: #F08080;">45</label> %' +
      "\n Vue.js : " +
      '<label id="vuejs_skill" style="color: #B22222;">35</label> %' +
      "\n Flutter : " +
      '<label id="flutter_skill" style="color: #8A2BE2;">35</label> %' +
      "\n"
    );
  }
  function contact() {
    return (
      " Feel free to reach out to me via email at " +
      '<label class= "BLUE"> pujanneupaneop0907@gmail.com </label>\n' +
      " check out my GitHub profile at " +
      ' <a style ="color:red" href="https://github.com/Pujan-Dev">Github</a>.' +
      "\n"
    );
  }
  function ls() {
    return "\n Introduction \n Projects \n Skills \n About me \n Contact me \n  ";
  }
  function Help() {
    return " Use the following commands to interact with this webpage.\n  -hub\n  -prank \n  -Introduction \n  -Projects \n  -Skills \n  -About me \n  -Contact me \n  -clear";
  }

  function executeCommand(command) {
    // Customize this function to handle different commands
    switch (command.toLowerCase()) {
      case "prank":
        // Flash screen effect
        document.body.style.backgroundColor = "white";
        setTimeout(() => {
          document.body.style.backgroundColor = ""; // Reset to original color
        }, 2000);

        // Create a hacked popup with a styled "OK" button
        const hackedPopup = document.createElement("div");
        hackedPopup.innerHTML =
          "You have been hacked! send me 5 btc 🚨<br><button onclick='closeHackedPopup()'  style='background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;'>SEND</button>";
        hackedPopup.style.position = "fixed";
        hackedPopup.style.top = "50%";
        hackedPopup.style.left = "50%";
        hackedPopup.style.transform = "translate(-50%, -50%)";
        hackedPopup.style.backgroundColor = "black";
        hackedPopup.style.color = "white";
        hackedPopup.style.padding = "20px";
        hackedPopup.style.borderRadius = "10px";
        hackedPopup.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
        hackedPopup.style.zIndex = "9999";
        document.body.appendChild(hackedPopup);

        // Remove the hacked popup and reset the background color when "OK" is clicked
        window.closeHackedPopup = function () {
          document.body.removeChild(hackedPopup);
          document.body.style.backgroundColor = ""; // Reset to original color
        };

        // Remove the hacked popup after a delay
        setTimeout(() => {
          closeHackedPopup();
        }, 5000);

      case "hub":
        return (
          "\n" +
          "   _    _ _   _ ____  _     _\n" +
          "  | |  | | | | |  _ \\| |   | |\n" +
          "  | |__| | | | | |_) | |__ | | ___ _ __\n" +
          "  |  __  | | | |  _ <| '_ \\| |/ _ \\ '__|\n" +
          "  | |  | | |_| | |_) | | | | |  __/ |\n" +
          "  |_|  |_|\\___/|____/|_| |_|_|\\___|_|\n"
        );

      case "cd":
        // Change directory (just for fun)
        return "\nChanged directory to the quantum realm. Good luck finding your way back! 🌀";
      case "help":
        return Help();
      case "hello":
        return "\n Hello, welcome to the terminal!";
      case "date":
        return new Date().toLocaleString();
      case "ls":
        return ls();
      case "introduction":
        return intro();
      case "intro":
        return intro();
      case "project":
        return projects();
      case "projects":
        return projects();
      case "skills":
        return skills();
      case "skill":
        return skills();

      case "contact":
        return contact();
      case "contact me":
        return contact();
      case "cls":
        output.innerHTML = "";
        return "";
      case "clear":
        output.innerHTML = "";
        return "";
      default:
        if (command.toLowerCase().startsWith("goto")) {
          const parts = command.split(" ");
          if (parts.length == 2) {
            const Pro_number = parseInt(parts[1]);
            const project = projectsDictionary[Pro_number];
            if (project) {
              window.open(project.link, "_blank");
              return `Opening ${project.name} in a new tab ...`;
            } else {
              return "Invalid GOTO command, Usage: GOTO <Project number>";
            }
          }
        }
        return `\n Command not found: ${command} \n`;
    }
  }
});
