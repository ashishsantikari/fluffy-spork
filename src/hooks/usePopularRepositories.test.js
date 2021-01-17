import { renderHook } from "@testing-library/react-hooks";
import usePopularRepositories from "./usePopularRepositories";

// import API mocking utilities from Mock Service Worker
import { rest } from "msw";
import { setupServer } from "msw/node";

describe("usePopularRepositories hook", () => {
  // declare which API requests to mock
  const server = setupServer(
    // capture "GET /greeting" requests
    rest.get("/search", (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(
        ctx.json({
          total_count: 34661401,
          incomplete_results: true,
          items: [
            {
              id: 156624293,
              node_id: "MDEwOlJlcG9zaXRvcnkxNTY2MjQyOTM=",
              name: "ArtifactDeckCode",
              full_name: "ValveSoftware/ArtifactDeckCode",
              private: false,
              owner: {
                login: "ValveSoftware",
                id: 3082775,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjMwODI3NzU=",
                avatar_url:
                  "https://avatars1.githubusercontent.com/u/3082775?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/ValveSoftware",
                html_url: "https://github.com/ValveSoftware",
                followers_url:
                  "https://api.github.com/users/ValveSoftware/followers",
                following_url:
                  "https://api.github.com/users/ValveSoftware/following{/other_user}",
                gists_url:
                  "https://api.github.com/users/ValveSoftware/gists{/gist_id}",
                starred_url:
                  "https://api.github.com/users/ValveSoftware/starred{/owner}{/repo}",
                subscriptions_url:
                  "https://api.github.com/users/ValveSoftware/subscriptions",
                organizations_url:
                  "https://api.github.com/users/ValveSoftware/orgs",
                repos_url: "https://api.github.com/users/ValveSoftware/repos",
                events_url:
                  "https://api.github.com/users/ValveSoftware/events{/privacy}",
                received_events_url:
                  "https://api.github.com/users/ValveSoftware/received_events",
                type: "Organization",
                site_admin: false,
              },
            },
          ],
        })
      );
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  // clean up once the tests are done
  afterAll(() => server.close());

  it("should fetch data from github", async () => {
    let initialPage = 1;
    const { result, rerender, waitForNextUpdate } = renderHook(() =>
      usePopularRepositories(initialPage)
    );

    const [data, loading, err] = result.current;

    initialPage = 2;
    rerender();

    await waitForNextUpdate({ timeout: false });

    expect(data).toBeTruthy();
    expect(loading).toBeFalsy();
    expect(err).not.toBeNull();
  });
});
