const initEnvironment = () => {
  return new Promise(async (resolve, reject) => {
    const count = await delay();

    let text = "Initializing simulation environment";
    let dotsBlinkCount = 0;

    const interval = setInterval(() => {
      if (text.endsWith("...")) {
        text = text.slice(0, text.length - 3);
        dotsBlinkCount++;
      } else {
        text += ".";
      }

      if (dotsBlinkCount === count) {
        clearInterval(interval);
        document.querySelector(".screen-text").textContent = text;
        text += "...";
        resolve();
      }

      document.querySelector(".screen-text").textContent = text;
    }, 1000);
  });
};

const executeFirstCommand = () => {
  return new Promise(async (resolve, reject) => {
    const firstCommand = document.createElement("p");
    document.querySelector(".simulator-terminal").appendChild(firstCommand);

    await delay();
    firstCommand.textContent = "System initialized.";
    firstCommand.textContent += " ";
    await delay();
    firstCommand.textContent += "Select a module to begin.";
    resolve();
  });
};

const executeSecondCommand = () => {
  return new Promise(async (resolve, reject) => {
    const secondCommand = document.createElement("p");
    document.querySelector(".simulator-terminal").appendChild(secondCommand);

    const count = await delay();

    const time = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    let text = `[${time}] Establishing secure connection`;
    let dotsBlinkCount = 0;

    const interval = setInterval(() => {
      if (text.endsWith("...")) {
        text = text.slice(0, text.length - 3);
        dotsBlinkCount++;
      } else {
        text += ".";
      }

      if (dotsBlinkCount === count) {
        clearInterval(interval);
        secondCommand.textContent = text;
        text += "...";
        resolve();
      }

      secondCommand.textContent = text;
    }, 1000);
  });
};

const executeThirdCommand = () => {
  return new Promise(async (resolve, reject) => {
    const thirdCommand = document.createElement("p");
    document.querySelector(".simulator-terminal").appendChild(thirdCommand);

    await delay();

    const time = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    thirdCommand.textContent = `[${time}] Connection established.`;
    resolve();
  });
};

const executeFourthCommand = () => {
  return new Promise(async (resolve, reject) => {
    const fourthCommand = document.createElement("p");
    document.querySelector(".simulator-terminal").appendChild(fourthCommand);

    await delay();

    const time = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    fourthCommand.textContent = `[${time}] Data transfer has started.`;
    resolve();
  });
};

const executefifthCommand = () => {
  return new Promise(async (resolve, reject) => {
    const fifthCommand = document.createElement("p");
    document.querySelector(".simulator-terminal").appendChild(fifthCommand);

    const count = await delay();

    const time = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    let text = `[${time}] Transferring Data`;
    let dotsBlinkCount = 0;

    const interval = setInterval(() => {
      if (text.endsWith("...")) {
        text = text.slice(0, text.length - 3);
        dotsBlinkCount++;
      } else {
        text += ".";
      }

      if (dotsBlinkCount === count) {
        clearInterval(interval);
        fifthCommand.textContent = text;
        text += "...";
        resolve();
      }

      fifthCommand.textContent = text;
    }, 1000);
  });
};

const delay = () => {
  return new Promise((resolve, reject) => {
    const count = Math.round(Math.random() * 7);

    setTimeout(() => {
      resolve(count);
    }, count * 1000);
  });
};

const execute = async () => {
  await initEnvironment();
  await executeFirstCommand();
  await executeSecondCommand();
  await executeThirdCommand();
  await executeFourthCommand();
  await executefifthCommand();
};

execute();
