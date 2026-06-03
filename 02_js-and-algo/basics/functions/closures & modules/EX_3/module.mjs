const urlPrefix = "https://www.youtube.com/watch?";

export const SongsManager = function () {
  return {
    songs: {},
    addSong: function (name, url) {
      if (!this.songs[name]) {
        const index = url.indexOf(urlPrefix);
        if (index !== -1) {
          this.songs[name] = url.slice(index + urlPrefix.length);
        }
      }
    },
    getSong: function (name) {
      console.log(`${urlPrefix}${this.songs[name] || null}`);
    },
  };
};
