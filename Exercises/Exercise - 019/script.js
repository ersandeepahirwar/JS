const formatViews = (views) => {
  if (views < 1000) {
    return views;
  } else if (views < 1000000 && views >= 1000) {
    return Math.round(views / 1000) + "K";
  } else if (views < 1000000000 && views >= 1000000) {
    return Math.round(views / 1000000) + "M";
  } else if (views < 1000000000000 && views >= 1000000000) {
    return Math.round(views / 1000000000) + "B";
  } else {
    return Math.round(views / 1000000000000) + "T";
  }
};

const timeAgo = (uploadDate) => {
  const currentDate = new Date();
  const videoUploadDate = new Date(uploadDate);
  const elapsedTime = currentDate - videoUploadDate;

  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
};

const createCard = (thumbnail, duration, title, channel, views, uploadDate) => {
  const card = `
        <div class="card">
          <div class="thumbnail">
            <img
              src=${thumbnail}
              alt="Thumbnail of ${title}"
            />
            <span class="duration">${duration}</span>
          </div>
          <div class="content">
            <h1 class="title">${title}</h1>
            <p>
              <span class="channel">${channel}</span>
              <span class="middot" >&nbsp;&middot;&nbsp;</span>
              <span class="views">${formatViews(views)} view${views > 1 ? "s" : ""}</span>
              <span class="middot" >&nbsp;&middot;&nbsp;</span>
              <span class="uploadDate">${timeAgo(uploadDate)}</span>
            </p>
          </div>
        </div>
  `;

  document.querySelector(".container").innerHTML += card;
};

const tutorials = [
  {
    thumbnail:
      "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA",
    duration: "31:20",
    title:
      "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    channel: "CodeWithHarry",
    views: "6373709",
    uploadDate: "2023-09-26",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg",
    duration: "28:30",
    title: "Your First HTML Website | Sigma Web Development Course - Tutorial #2",
    channel: "CodeWithHarry",
    views: "2277811",
    uploadDate: "2023-09-27",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDpdOoVMCl1Z3qDixA988oU8Cot0w",
    duration: "11:12",
    title: "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3",
    channel: "CodeWithHarry",
    views: "1440507",
    uploadDate: "2023-09-28",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAPrVzyLHFYcUIk5bv_LXaJrgOztA",
    duration: "19:34",
    title: "Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4",
    channel: "CodeWithHarry",
    views: "1320279",
    uploadDate: "2023-09-29",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBzUcEscAQXVAJpBm0Ta4GoTrML6Q",
    duration: "18:20",
    title: "Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5",
    channel: "CodeWithHarry",
    views: "1313471",
    uploadDate: "2023-09-30",
  },
];

tutorials.map((tutorial) => {
  createCard(
    tutorial.thumbnail,
    tutorial.duration,
    tutorial.title,
    tutorial.channel,
    tutorial.views,
    tutorial.uploadDate
  );
});
