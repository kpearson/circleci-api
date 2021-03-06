/**
 * CircleCI API Definitions
 * Jordon de Hoog, 2018
 *
 * Route: https://circleci.com/api/v1.1/
 *
 * Reference:
 * @see https://circleci.com/docs/api/v1-reference/
 */

/**
 * Authenticated user info
 *
 * @example GET : https://circleci.com/api/v1.1/me
 * @see https://circleci.com/docs/api/v1-reference/#getting-started
 */
export type MeResponse = Me;

/**
 * Projects
 *
 * All followed projects
 * @example GET : https://circleci.com/api/v1.1/projects
 * @see https://circleci.com/docs/api/v1-reference/#projects
 */
export type AllProjectsResponse = Project[];

/**
 * Follow Project
 *
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @see GitInfo
 * @example POST : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/follow
 * @see https://circleci.com/docs/api/v1-reference/#follow-project
 */
export type FollowProjectResponse = FollowNewResult;

/**
 * Recent Builds
 *
 * @property {number} [limit=30] - The number of builds to return. Maximum 100, defaults to 30.
 * @property {number} [offset=0] - The API returns builds starting from this offset, defaults to 0.
 *
 * Recent builds for all projects
 * @example GET : https://circleci.com/api/v1.1/recent-builds?limit=20&offset=5
 * @see https://circleci.com/docs/api/v1-reference/#recent-builds
 *
 * For Single project
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project?&limit=20&offset=5&filter=completed
 * @see https://circleci.com/docs/api/v1-reference/#recent-builds-project
 *
 * For single branch on project
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {string} branch - The branch to get the builds from
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/tree/:branch
 * @see https://circleci.com/docs/api/v1-reference/#recent-builds-project-branch
 */
export type BuildSummaryResponse = BuildSummary[];

/**
 * Build
 *
 * Details for build
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {number} build_num - Number of the build to fetch
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num
 * @see https://circleci.com/docs/api/v1-reference/#build
 */
export type FetchBuildResponse = BuildWithSteps;

/**
 * Artifacts
 *
 * Get build artifacts
 *
 * For build:
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {number} build_num - Number of the build to fetch
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num/artifacts
 * @see https://circleci.com/docs/api/v1-reference/#build-artifacts
 *
 * Latest build:
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {string} [branch="master"] - Branch to fetch artifacts from
 * @property {string} [filter] - Filter out certain builds (successful, failed, completed)
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/latest/artifacts?branch=:branch&filter=:filter
 * @see https://circleci.com/docs/api/v1-reference/#build-artifacts-latest
 */
export type ArtifactResponse = Artifact[];

/**
 * Build Actions
 */

/**
 * Retry build
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {number} build_num - Number of the build to fetch
 * @example POST : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num/retry
 * @see https://circleci.com/docs/api/v1-reference/#retry-build
 */
export type RetryBuildResponse = BuildSummary;

/**
 * Cancel build
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {number} build_num - Number of the build to fetch
 * @example POST : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num/cancel
 * @see https://circleci.com/docs/api/v1-reference/#cancel-build
 */
export type CancelBuildResponse = BuildSummary;

export type BuildActionResponse = RetryBuildResponse | CancelBuildResponse;

/**
 * Trigger new build
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @example POST : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project
 * @see https://circleci.com/docs/api/v1-reference/#new-build
 *
 * Triger new build on specific branch
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {string} branch - Branch to trigger a new build of
 * @example POST : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/tree/:branch
 * @see https://circleci.com/docs/api/v1-reference/#new-build-branch
 */
export type TriggerBuildResponse = Build;

/**
 * Clear project cache
 *
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @example DELETE : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/build-cache
 * @see https://circleci.com/docs/api/v1-reference/#clear-cache
 */
export type ClearCacheResponse = {
  status: string;
};

/**
 * List all of a projects environment variables
 *
 * Returns four 'x' characters plus the last four ASCII characters of the value,
 * consistent with the display of environment variable values in the CircleCI website.
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/envvar
 * @see https://circleci.com/docs/api/v1-reference/#list-environment-variables
 */
export type ListEnvVariablesResponse = EnvVariable[];

/**
 * Add environment variable to project
 *
 * Creates a new environment variable *
 * Needs "Content-Type" set to "application/json"
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @param {EnvVariable} payload - Variable to create
 * @example POST : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/envvar
 * @see https://circleci.com/docs/api/v1-reference/#add-environment-variable
 *
 * Gets the hidden value of environment variable :name
 *
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {string} name - Name of the env variable
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/envvar/:name
 * @see https://circleci.com/docs/api/v1-reference/#get-environment-variable
 */
export type EnvVariableResponse = EnvVariable;

/**
 * Deletes the environment variable named ':name'
 *
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {string} name - Name of the env variable
 * @example DELETE : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/envvar/:name
 * @see https://circleci.com/docs/api/v1-reference/#delete-environment-variable
 */
export type DeleteEnvVarResponse = MessageResponse;

/**
 * Checkout keys
 *
 * Lists the checkout keys for :project
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/checkout-key
 * @see https://circleci.com/docs/api/v1-reference/#list-checkout-keys
 *
 * Creates a new checkout key. Only usable with a user API token.
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @param {CheckoutKey} payload - The type of key to create. Can be 'deploy-key' or 'github-user-key'.
 * @example { type: "deploy-key" }
 * @example POST : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/checkout-key
 * @see https://circleci.com/docs/api/v1-reference/#new-checkout-key
 *
 * Gets the checkout key
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {string} fingerprint - Fingerprint sha for key
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/checkout-key/:fingerprint
 * @see https://circleci.com/docs/api/v1-reference/#get-checkout-key
 */
export type CheckoutKeyResponse = FullCheckoutKey;

/**
 * Deletes the checkout key
 *
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {string} fingerprint - Fingerprint sha for key
 * @example DELETE : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/checkout-key/:fingerprint
 * @see https://circleci.com/docs/api/v1-reference/#delete-checkout-key
 */
export type DeleteCheckoutKeyResponse = MessageResponse;

/**
 * Provides test metadata for a build
 *
 * @property {string} vcstype - Type of VCS of project (github || bitbucket)
 * @property {string} username - Owner of git repo
 * @property {string} project - Name of the git repo
 * @property {string} build_num - Build number
 * @example GET : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num/tests
 * @see https://circleci.com/docs/api/v1-reference/#test-metadata
 */
export type TestMetadataResponse = {
  tests: TestMetadata[];
  exceptions?: TestMetadata[];
};

/**
 * Creates an ssh key that will be used to access the external system identified by
 * the hostname parameter for SSH key-based authentication.
 * @param {SSHKey} payload - SSH key to add
 * @example { "hostname": "hostname", "private_key": "RSA private key" }
 * @example POST - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/ssh-key
 * @see https://circleci.com/docs/api/v1-reference/#ssh-keys
 */
export type AddSSHKeyResponse = never;

/**
 * Adds your Heroku API key to CircleCI
 * @param {HerokuKey} payload - Heroku api key
 * @example { "apikey": "Heroku key" }
 * @example POST - https://circleci.com/user/heroku-key
 * @see https://circleci.com/docs/api/v1-reference/#heroku-keys
 */
export type AddHerokuResponse = never;

/**
 * Api objects
 */

export interface MessageResponse {
  message: string;
}

export interface Me {
  enrolled_betas?: string[];
  in_beta_program?: boolean;
  selected_email?: string;
  avatar_url?: string;
  trial_end?: string;
  basic_email_prefs?: string;
  sign_in_count?: number;
  github_oauth_scopes?: string[];
  analytics_id?: string;
  name?: string;
  gravatar_id?: string;
  first_vcs_authorized_client_id?: string;
  days_left_in_trial?: number;
  parallelism?: number;
  student?: boolean;
  bitbucket_authorized?: boolean;
  github_id?: number;
  bitbucket?: string;
  dev_admin?: boolean;
  all_emails?: string[];
  created_at?: string;
  plan?: string;
  heroku_api_key?: string;
  identities?: Identity;
  projects?: ProjectsList;
  login?: string;
  organization_prefs?: Organization;
  containers?: number;
  pusher_id?: string;
  num_projects_followed?: number;
}

export interface Identity {
  github?: IdentityDetails;
  bitbucket?: IdentityDetails;
}

export interface IdentityDetails {
  avatar_url?: string;
  external_id?: number;
  id?: number;
  name?: string;
  user?: boolean;
  domain?: string;
  type?: string;
  authorized?: boolean;
  provider_id?: string;
  login?: string;
}

export interface ProjectsList {
  [project: string]: ProjectSummary;
}

export interface ProjectSummary {
  on_dashboard?: boolean;
  emails?: string;
}

export interface Organization {
  [vcs: string]: {
    [org: string]: {
      email: string;
    };
  };
}

export interface User {
  is_user?: boolean;
  login?: string;
  avatar_url?: string;
  name?: string;
  vcs_type?: string;
  id?: number;
}

export interface Project {
  irc_server?: string;
  ssh_keys?: string[];
  branches: Branch;
  irc_keyword?: string;
  oss?: boolean;
  reponame?: string;
  dependencies?: string;
  slack_webhook_url?: string;
  irc_channel?: string;
  parallel?: number;
  campfire_subdomain?: string;
  slack_integration_access_token?: string;
  username?: string;
  slack_integration_team?: string;
  slack_integration_channel?: string;
  hipchat_notify?: string;
  heroku_deploy_user?: string;
  irc_username?: string;
  slack_notify_prefs?: string;
  scopes?: string[];
  campfire_room?: string;
  hipchat_api_token?: string;
  campfire_token?: string;
  slack_subdomain?: string;
  has_usable_key?: boolean;
  setup?: string;
  vcs_type?: string;
  feature_flags?: FeatureFlags;
  irc_password?: string;
  compile?: string;
  slack_integration_notify_prefs?: string;
  slack_integration_webhook_url?: string;
  irc_notify_prefs?: string;
  slack_integration_team_id?: string;
  extra?: string;
  jira?: any;
  slack_integration_channel_id?: string | number;
  language?: string;
  hipchat_room?: string;
  flowdock_api_token?: string;
  slack_channel_override?: string;
  vcs_url?: string;
  following?: boolean;
  default_branch?: string;
  slack_api_token?: string;
  test?: string;
}

export interface Branch {
  [name: string]: BranchDetails;
}

export interface BranchDetails {
  pusher_logins?: string[];
  running_builds?: BuildSummary[];
  recent_builds?: BuildSummary[];
  last_non_success?: BuildSummary;
}

export interface BuildSummary {
  outcome?: string;
  status?: string;
  build_num?: number;
  vcs_revision?: string;
  pushed_at?: string;
  is_workflow_job?: boolean;
  added_at?: string;
}

export interface FeatureFlags {
  "trusty-beta"?: boolean;
  osx?: boolean;
  "set-github-status"?: boolean;
  "build-prs-only"?: boolean;
  "forks-receive-secret-env-vars"?: boolean;
  "build-fork-prs"?: boolean;
  "autocancel-builds"?: boolean;
  oss?: boolean;
}

export interface PreviousBuild {
  build_num?: number;
  status?: string;
  build_time_millis?: number;
}

export interface BuildSummary {
  compare?: string;
  oss?: boolean;
  body?: string;
  branch?: string;
  build_num?: number;
  build_time_millis?: number;
  build_url?: string;
  user?: {
    is_user?: boolean;
    login?: string;
    vcs_type?: string;
  };
  canceled?: boolean;
  committer_email?: string;
  committer_name?: string;
  dont_build?: boolean;
  lifecycle?: string;
  outcome?: string;
  platform?: string;
  previous?: PreviousBuild;
  queued_at?: string;
  reponame?: string;
  retry_of?: number;
  start_time?: string;
  status?: string;
  stop_time?: string;
  subject?: string;
  username?: string;
  vcs_revision?: string;
  vcs_url?: string;
  why?: string;
  workflows?: Workflow;
}

export interface Workflow {
  job_name: string;
  job_id: string;
  workflow_id: string;
  workspace_id: string;
  workflow_name: string;
  upstream_job_ids?: any[];
  upstream_concurrency_map?: any;
}

export interface Build extends BuildSummary {
  all_commit_details?: PreviousBuild;
  all_commit_details_truncated?: boolean;
  author_date?: string;
  author_email?: string;
  author_name?: string;
  body?: string;
  branch: string;
  build_num?: number;
  build_parameters?: string;
  build_time_millis?: number;
  build_url?: string;
  canceled?: boolean;
  canceler?: string;
  circle_yml?: CircleConfig;
  committer_date?: string;
  committer_email?: string;
  committer_name?: string;
  compare?: string;
  fail_reason?: string;
  failed?: boolean;
  has_artifacts?: boolean;
  infrastructure_fail?: boolean;
  is_first_green_build?: boolean;
  job_name?: string;
  lifecycle?: string;
  messages?: string[];
  no_dependency_cache?: boolean;
  node?: any;
  oss?: boolean;
  outcome?: string;
  parallel?: number;
  picard?: BuildPicard;
  platform?: string;
  previous_successful_build?: PreviousBuild;
  queued_at?: string;
  reponame?: string;
  retries?: number;
  ssh_disabled?: boolean;
  ssh_users?: any[];
  start_time?: string;
  status?: string;
  stop_time?: string;
  subject?: string;
  timedout?: boolean;
  usage_queued_at?: string;
  user?: User;
  username?: string;
  vcs_revision?: string;
  vcs_tag?: string;
  vcs_type?: string;
  vcs_url?: string;
  why?: string;
}

export interface BuildWithSteps extends Build {
  steps: BuildStep[];
  pull_requests: PullRequest[];
}

export interface BuildStep {
  name: string;
  actions: BuildStepAction[];
}

export interface PullRequest {
  head_sha: string;
  url: string;
  [key: string]: any;
}

export interface BuildStepAction {
  truncated?: boolean;
  index?: number;
  parallel?: boolean;
  failed?: boolean;
  infrastructure_fail?: boolean;
  name: string;
  bash_command?: string;
  status?: string;
  timedout?: boolean;
  continue?: boolean;
  end_time: string;
  type?: string;
  allocation_id?: string;
  output_url?: string;
  start_time: string;
  background?: boolean;
  exit_code?: number;
  insignificant?: boolean;
  canceled?: boolean;
  step?: number;
  run_time_millis?: number;
  has_output?: boolean;
}

export interface BuildPicard {
  build_agent?: {
    image?: null;
    properties?: {
      build_agent?: string;
      executor?: string;
    };
  };
  resource_class?: {
    cpu?: number;
    ram?: number;
    class?: string;
  };
  executor?: string;
}

export interface CommitDetails {
  committer_date?: string;
  body?: string;
  branch?: string;
  author_date?: string;
  committer_email?: string;
  commit?: string;
  committer_login?: string;
  committer_name?: string;
  subject?: string;
  commit_url?: string;
  author_login?: string;
  author_name?: string;
  author_email?: string;
}

export interface CircleConfig {
  string?: string;
}

export interface FollowNewResult {
  followed?: boolean;
  first_build?: Build;
}

export interface Artifact {
  path: string;
  pretty_path?: string;
  node_index?: number;
  url: string;
}

export interface EnvVariable {
  name: string;
  value: string;
}

export interface CheckoutKey {
  type: CheckoutType;
}

export interface FullCheckoutKey extends CheckoutKey {
  public_key: string;
  fingerprint: string;
  preferred: boolean;
  time: string;
  login?: string;
}

export type CheckoutType = "deploy-key" | "github-user-key";

export interface TestMetadata {
  message?: string;
  file?: string;
  source?: string;
  run_time?: number;
  result?: string;
  name?: string;
  classname?: string;
}

export interface SSHKey {
  hostname: string;
  private_key: string;
}

export interface HerokuKey {
  apikey: string;
}
