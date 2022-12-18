const core = require("@actions/core");

const { sendPRToAcron } = require("./run");

async function run() {
  try {
    const number = parseInt(core.getInput("number"));
    const acronApiKey = core.getInput("apiKey");
    const mode = core.getInput("mode");
    const split = core.getInput("split");

    // Get current repo
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    console.log(process.env.GITHUB_REPOSITORY);

    // Create Acron api here
    // const api = await createAcronAPI(acronApiKey);

    if (mode === "pr") {
      sendPRToAcron({ repo, owner, number, split });
    } else if (mode === "issue") {
      throw "Not implemented";
    } else {
      throw `Invalid mode ${mode}`;
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
