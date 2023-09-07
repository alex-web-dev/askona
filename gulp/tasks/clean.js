import {deleteAsync} from 'del';

export const clean = async () => {
  return await deleteAsync(app.path.buildFolder, {dryRun: true});
}