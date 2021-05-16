export function getProjectID(): string {
  const projectID = process.env.PROJECT_ID;
  if (projectID) {
    return projectID;
  }
  throw new Error(`'${projectID}' is not a valid value for environment variable 'PROJECT_ID'.`);
}
