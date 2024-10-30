window._ENV_ = {
  // These values are replaced by the entrypoint of Docker Image
  VUE_APP_MOCKED_DATA: "false",
  VUE_APP_SCOPE: "organization",
  VUE_APP_GITHUB_ORG: "",
  VUE_APP_GITHUB_ENT: "",
  VUE_APP_GITHUB_TOKEN: "",
  VUE_APP_GITHUB_API: "",
  VUE_APP_GITHUB_TEAM: "",
};

const url = new URL(window.location.href);

window._ENV_.VUE_APP_GITHUB_TOKEN = url.searchParams.get('token');
window._ENV_.VUE_APP_GITHUB_ORG = url.searchParams.get('org');

