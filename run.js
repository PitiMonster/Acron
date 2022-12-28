const core = require("@actions/core");
const { Octokit } = require("@octokit/action");
const github = require("@actions/github");
const octokit = new Octokit();
const context = github.context;

async function sendPRToAcron({ repo, owner, number, split }) {
  const {
    data: { title, body },
  } = await octokit.pulls.get({ owner, repo, pull_number: number });
  const data = await octokit.rest.pulls.get({
    owner,
    repo,
    pull_number: number,
  });
  console.log(
    "----------------------------------------------------------------"
  );
  console.log("TITLE: ", title);
  console.log(
    "----------------------------------------------------------------"
  );

  console.log("BODY: ", body);
  console.log(
    "----------------------------------------------------------------"
  );

  console.log("DATA: ", data.data);
}

module.exports = { sendPRToAcron };
