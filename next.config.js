// next.config.js
module.exports = {
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/thanks": { page: "/thanks" }
    };
  }
};
